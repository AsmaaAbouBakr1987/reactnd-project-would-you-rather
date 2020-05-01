import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../index.css'
import Question from './Question'


class Dashboard extends Component{
    render(){
        console.log(this.props)
        return(
            <div className='center'>
                <ul className='dashboard-list'> 
                    {this.props.qIds.map( (id) =>(
                    <li key={id}> <Question id={id}/></li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions}){
    return {
        qIds : Object.keys(questions)
        .sort((a,b) => questions[b].timeStamp - questions[a].timeStamp)
    }
}

export default connect(mapStateToProps)(Dashboard)