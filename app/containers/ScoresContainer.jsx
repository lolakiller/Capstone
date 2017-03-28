import React, {Component} from 'react'
import {connect} from 'react-redux'
import Scores from '../components/Scores'

const mapStateToProps = (state) => {
  return {
    snakes: state.snakes // should gives us all the snakes on board (obj with all their info)
  }
}

export default connect(mapStateToProps)(Scores)

