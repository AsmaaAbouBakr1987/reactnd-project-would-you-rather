import {getInitialData} from '../utils/api'
import {reciveQuestions} from '../actions/questions'
import {reciveUsers} from '../actions/users'
import {setAuthedUser} from '../actions/authedUser'


export function handleInitialData(){
    return (dispatch) => {
        return getInitialData()
        .then( ({users, questions}) => {
            dispatch(reciveUsers(users))
            dispatch(reciveQuestions(questions))
        })
    }
}