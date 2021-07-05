//3-import methods from api
import {_saveQuestionAnswer,_saveQuestion}from '../utils/_DATA'
import { showLoading } from 'react-redux-loading';
import { hideLoading } from 'react-redux-loading';

import { handleIntialData } from './shared';

//1-create and export const of action type used
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION='ANSWER_QUESTION'
export const ADD_QUESTION='ADD_QUESTION'

//2-create action creator function that return action obj have action type and proparties
export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
} 

function submitAnswer({authedUser,qid,answer}){
  return{
    type:ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}



function addQuestion(question){
  //author:authedUser`, `optionOneText`, and `optionTwoText
  return{
    type:ADD_QUESTION,
    question
  }
}


export function handleSubmitAnswer({qid,answer}){
  return (dispatch, getState)=>{
    const {authedUser}=getState()
    dispatch(submitAnswer({
      authedUser,
      qid,
      answer
    }))

    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
    .then(()=>dispatch(handleIntialData()))
    .catch((e)=>{
      console.warn('Error is handleSubmitAnswer: '/ e)
      dispatch(_saveQuestion({
        authedUser,
        qid,
        answer
      }))
      alert("There was an error in answering Question. Try again")
    
    })
  }}





//done add 
export function handleAddQuestion(newquestion){
  return(dispatch, getState)=>{
    const {authedUser}=getState() 
    const {optionOne,optionTwo}=newquestion
    dispatch(showLoading())
    return _saveQuestion({
      author:authedUser,
      optionOneText:optionOne,
      optionTwoText:optionTwo
    })
    .then(question=>dispatch(addQuestion(question)))
    .then(()=>{dispatch(hideLoading())
    dispatch(handleIntialData())})
  }
}