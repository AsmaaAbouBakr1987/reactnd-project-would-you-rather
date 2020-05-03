import React, { Component , Fragment } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'
import Login from './Login'
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProtectedRoute from './ProtectedRoute'
import NewQuestion from './NewQuestion';
import Answer from './Answer';
import Leaderboard from './Leaderboard';
import NotFound from './NotFound'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
      <Fragment>
        <div className='container'>
          
            <div className="main-content"> 
              <Switch>
                <Route path="/" exact component={Login}/>
                <ProtectedRoute path='/dashboard' exact component={Dashboard} />
                <ProtectedRoute path='/newQuestion' exact component={NewQuestion} />
                <ProtectedRoute path='/question/:id' component={Answer} />
                <ProtectedRoute path='/leaderBoard' component={Leaderboard} />
                <Route path="/not-found" component={NotFound} />
                
              </Switch>
              
            </div>
        </div>
      </Fragment>
    </Router>
    
 
  
    )
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)