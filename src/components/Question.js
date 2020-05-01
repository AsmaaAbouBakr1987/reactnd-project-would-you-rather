import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../index.css'
import {formatQuestion} from '../utils/helpers'


class Questions extends Component{
    render(){
        return(
            <div className= 'question'></div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}){
    const question = questions[id]

    return{
        authedUser,
        question: formatQuestion(question, users[question.author] ,authedUser)
    }
}
export default connect(mapStateToProps)(Questions)