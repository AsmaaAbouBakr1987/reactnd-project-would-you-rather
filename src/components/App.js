import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import Login from './Login'
import { Route,Redirect, withRouter } from 'react-router-dom'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />  
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)