import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../index.css'
import Question from './Question'
import Nav from './Nav'
import { Link } from 'react-router-dom'


class Dashboard extends Component{
    state = {
        showAnswered: false
    }
    filterQuestions = (showAnswered) => {
        this.setState((state) => {
            return { showAnswered: showAnswered }
    })
    }
    render(){
        const {questions, authedUser} = this.props
        console.log(this.props)

        const { showAnswered } = this.state;
        const questionsArray = Object.values(questions)
        const filteredQuestions = questionsArray.filter(function(question) {
            const contains = (
                question.optionOne.votes.indexOf(authedUser) > -1 ||
                question.optionTwo.votes.indexOf(authedUser) > -1
            );
            return showAnswered ? contains : !contains;
        });
        const sortedQuestions = filteredQuestions.sort((a, b) => b.timestamp - a.timestamp);
        return(
            
            <div className='center'>
                <Nav/>
                <ul className='dashboard-list'>
                    {sortedQuestions.map((question) => (
                        <li key={question.id}>
                            <Link to={`question/${question['id']}`}>
                                <Question id={question.id}/>
                            </Link>
                        </li>
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
        questions,
        author,

        qIds : Object.keys(questions)
        .sort((a,b) => questions[b].timeStamp - questions[a].timeStamp)
    }
}
export default connect(mapStateToProps)(Dashboard)