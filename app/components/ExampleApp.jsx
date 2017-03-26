import React from 'react'
import Modal from 'react-modal'
import {Link, browserHistory} from 'react-router'
import Login from './Login'
import SignUpContainer from './SignUpContainer'
import Controller from './Controller'


// const customStyles = {
//   overlay : {
//     position          : 'fixed',
//     top               : 300,
//     left              : 300,
//     right             : 300,
//     bottom            : 300,
//     backgroundColor   : 'rgba(255, 255, 255, 0.75)'
//   },
//   content : {
//     position                   : 'absolute',
//     top                        : '20px',
//     left                       : '20px',
//     right                      : '20px',
//     bottom                     : '20px',
//     border                     : '1px solid #ccc',
//     background                 : 'grey',
//     overflow                   : 'auto',
//     WebkitOverflowScrolling    : 'touch',
//     borderRadius               : '4px',
//     outline                    : 'none',
//     padding                    : '20px'

//   }
// };


export default class ExampleApp extends React.Component{

   // constructor(props){
    // super(props)

    // this.state = {
    //   loginOrSignup: ''
    // }
    // this.openModal = this.openModal.bind(this)
    // this.closeModal = this.closeModal.bind(this)
    // this.openLogin = this.openLogin.bind(this)
    // this.openSignup = this.openSignup.bind(this)
  // }

  // openLogin(e){
  //   this.setState({loginOrSignup: e.target.name})
  //   browserHistory.push('/login')
  // }

  // openSignup(e){
  //   this.setState({loginOrSignup: e.target.name})
  //   browserHistory.push('/signup')
  // }
  // openModal(e){
  //   this.setState({modalIsOpen: true})
  //   this.setState({loginOrSignup: e.target.name})
  // }

  // closeModal(){
  //   this.setState({modalIsOpen: false})
  // }
    render(){
    return(
      <div>
        <Link to='/login'>
          <button id="login-btn" name="login"> Login! </button>
        </Link>

        <Link to='/signup'>
          <button id="signup-btn" name="signup"> Sign up! </button>
        </Link>

    </div>
  )

}

}



