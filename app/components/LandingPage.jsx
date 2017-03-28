import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class LandingPage extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    browserHistory.push('/interstitial')
  }

  render () {
    return (
      <div>
        <div id="welcome-page">
            <div id="logo">
              <img src="images/sketch_images/logo.png" className="img-responsive" id="logoName"/>
              <img src="images/sketch_images/banner.png" className="img-responsive" id="banner"/>
              <button id="play" onClick={this.handleClick}></button>
            </div>
          </div>
      </div>
    )
  }
}
export default LandingPage

