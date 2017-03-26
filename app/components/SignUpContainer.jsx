import React, {Component} from 'react'
import {connect} from 'react-redux'
import SignUp from './SignUp'
import axios from 'axios'
import {browserHistory} from 'react-router'
import {Signup} from '../reducers/auth'

class SignUpContainer extends React.Component {

 constructor(props){
    super(props)

   this.state = {
      name: '',
      email: '',
      pw1: '',
      password: '',
      isIncorrectPassword: false
    }

   this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePassword1Change = this.handlePassword1Change.bind(this)
    this.handlePassword2Change = this.handlePassword2Change.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

 handleNameChange(evt){
    const value = evt.target.value;
    this.setState({name: value})
  }

 handleEmailChange(evt){
    const value = evt.target.value
    this.setState({email: value})
  }

 handlePassword1Change(evt){
    const value = evt.target.value
    this.setState({pw1: value})
  }

 handlePassword2Change(evt){
    const value = evt.target.value

   if(value !== this.state.pw1){
      this.setState({
        isIncorrectPassword: true
      })
    }
    else{
      this.setState({
        password: value,
        isIncorrectPassword: false
      })
    }
  }


 handleSubmit(evt){
    evt.preventDefault();
    let newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    this.props.signupNewUser(newUser.name, newUser.email, newUser.password)
  }


 render(){


   return (

     <SignUp
        handleNameChange={this.handleNameChange}
        handleEmailChange={this.handleEmailChange}
        handlePassword1Change={this.handlePassword1Change}
        handlePassword2Change={this.handlePassword2Change}
        handleSubmit={this.handleSubmit}
        isIncorrectPassword={this.state.isIncorrectPassword}
      />

   )

 }


}

const mapDispatchToProps = (dispatch) => {
  return {

   signupNewUser(user, email, password){
      dispatch(signup(user, email, password))
      browserHistory.push('/interstitial')
    }

 }
}

export default connect(null, mapDispatchToProps)(SignUpContainer)
