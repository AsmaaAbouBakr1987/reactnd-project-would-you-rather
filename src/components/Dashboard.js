import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../index.css'
import Question from './Question'
import Nav from './Nav'


class Dashboard extends Component{
    render(){
        const { user, authedUser } = this.props
        const name = user ? user.name : ''
        console.log(this.props)
        console.log("UserId2 : ",name)
        return(
            
            <div className='center'>
                <Nav/>
                <ul className='dashboard-list'> 
                    {this.props.qIds.map( (id) =>(
                    <li key={id}> <Question id={id}/></li>
                    ))}
                </ul>
            </div>
        )
    }
}


function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id]
    const author = question ? users[question.author] : null
  
    return {
        authedUser,
        question,
        author,
        qIds : Object.keys(questions)
        .sort((a,b) => questions[b].timeStamp - questions[a].timeStamp)
    }
}
export default connect(mapStateToProps)(Dashboard)