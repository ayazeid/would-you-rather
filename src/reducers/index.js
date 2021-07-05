// main default reducer combaineReducers
//this is where the default export from reducer folder to src/index.js folder to createStore come from

//1-import combineReducers from redux
import {combineReducers} from 'redux';
//3-import all other reducers here
import questions from './questions'
import users from './users'
import authedUser from './authedUsers'
//4-import loading bar reducer
import { loadingBarReducer } from 'react-redux-loading'


//2-combine reducers as one reducer
export default combineReducers({
    authedUser,
    users,
    questions,
    loadingBar: loadingBarReducer
})