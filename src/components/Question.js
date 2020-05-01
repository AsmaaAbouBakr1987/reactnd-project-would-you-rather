import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../index.css'
import {formatQuestion} from '../utils/helpers'


class Questions extends Component{    
    render(){
        const {question,optionOneText,authedUser} = this.props

        const {name, avatar, timestamp, id } = question

        return(
            <div className= 'question'>
                <img
                src={avatar}
                alt={`Avatar of ${name}`}
                className='avatar'
                />
                <p className='user-info'>{name}</p>
                <div className='would-u-rather'>
                    <h2>WOULD YOU RATHER ?</h2>
                    {console.log('88', question)}
                    <p>{optionOneText}</p>
                    <p>Or</p>
                    <p>....</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}){
    const question = questions[id]
    const optionOneText = question.optionOne.text
    

    return{
        authedUser,
        question: formatQuestion(question, users[question.author] ,authedUser),
        optionOneText: question.optionOne.text
    }
}
export default connect(mapStateToProps)(Questions)