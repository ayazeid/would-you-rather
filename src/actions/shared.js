//shared action ex. receive inital data from api
//1-import intial data from data.js
import {_getUsers,_getQuestions} from '../utils/_DATA'
//5-import loadingbar functions
import { showLoading, hideLoading } from 'react-redux-loading'
import {receiveQuestions} from './questions'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUsers';


//4-create AUTHED_ID const for start  || import it


//2-handle receiving intial data
export function handleIntialData(){
  return (dispatch)=>{
    dispatch(showLoading())
    return Promise.all([
      _getUsers(),
      _getQuestions()
      ])
      .then(([users,questions])=>{
        //seperate the receive actions for each part so we can easly used later
       dispatch(receiveUsers(users))
       dispatch(receiveQuestions(questions))
       dispatch(hideLoading())
      })
  }
}
