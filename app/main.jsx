'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Int from './components/Int'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import SignUpContainer from './components/SignUpContainer'
import Game from './components/Game'
import Modal from 'react-modal'

const App = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) => {
    console.log('hello!')
    return (
    <div id="parent-div">
      <div id="login children-div">
        <div>
          {user ? <WhoAmI/> : <Login/>}
        </div>
        {children}
      </div>
  </div>

  )
  }
)

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 300,
    left              : 300,
    right             : 300,
    bottom            : 300,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '20px',
    left                       : '20px',
    right                      : '20px',
    bottom                     : '20px',
    border                     : '1px solid #ccc',
    background                 : 'grey',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
};


class ExampleApp extends React.Component{

   constructor(props){
    super(props)

    this.state = {
      modalIsOpen: false,
      loginOrSignup: ''
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal(e){
    this.setState({modalIsOpen: true})
    this.setState({loginOrSignup: e.target.name})
  }

  closeModal(){
    this.setState({modalIsOpen: false})
  }

  render(){
    return(
      <div>
          <button id="login-btn" name="login" onClick={this.openModal}> Log in! </button>
          <button id="signup-btn" name="signup" onClick={this.openModal}> Sign up! </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="login Modal"
          >
          {
            this.state.loginOrSignup === 'signup' ? <SignUpContainer /> : <Login />
          }
          </Modal>
      </div>
    )
  }

}

export default class AppContainer extends React.Component{
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}


/*connect() => function called connectFunc
connectFunc(({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>) */


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
      <IndexRedirect to="/login"/>
        <Route path="/interstitial" component={Int}/>
        <Route path="/login" component={ExampleApp}/>
        <Route path="/game" component={Game}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
