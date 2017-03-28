import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import io from 'socket.io-client'
var socket = io.connect('http://192.168.2.111:1337')

export default class Int extends Component {

  constructor(props){
      super(props)
      this.state = {
        users: [],
        colors: [],
        ready: false,
        counter: 5
      }
      this.tick = this.tick.bind(this)
  }

componentDidMount(){
  socket.emit('ask-for-users')
  socket.on('get-current-users', users => {
    var colors = users.map(function(i){
      return i.colorName
    })
    this.setState({users: users, colors: colors})
    if (this.state.users.length >= 4){
      this.interval = setInterval(this.tick, 1000)
      this.setState({ready: true})
    }
  })
}
 tick() {
    this.setState({counter: this.state.counter - 1})
    if (this.state.counter <= 0){
      clearInterval(this.interval)
       browserHistory.push('/game')
    }
  }
  
  render(){
   let len = this.state.users.length
   var users = this.state.users
   var color = this.state.colors
        if (this.state.ready === false){
          return (
        <div id="waiting-room">
          <h1>WAITING ROOM</h1>
        {this.state.colors && 
            <h2>A 
          {this.state.colors[this.state.colors.length - 1]} snake has joined!</h2>}
        </div>)
      }
      else{
          return (
          <div id="waiting-room">
          <h1>WAITING ROOM</h1>
        {this.state.colors && 
            <h2>A 
          {this.state.colors[this.state.colors.length - 1]} snake has joined!</h2>}
        <p><b id="nums">{this.state.counter}</b></p>
        </div>
        )     
      }      
  }
}


