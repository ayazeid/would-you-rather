import React from 'react'
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import {handleSubmitAnswer} from '../actions/questions'


function Question(props){
   

    function handleSubmit(e){
        e.preventDefault();
        const oneIsChecked=document.getElementById('option-one').checked
        const twoIsChecked=document.getElementById('option-two').checked
        
        
       const authedUser=props.authedUser
       const qid=props.questionID
       const answer=(oneIsChecked && !twoIsChecked)?'optionOne'
        :((!oneIsChecked && twoIsChecked)?'optionTwo':null)

      if(answer !== null && answer !== undefined){
        props.dispatch(handleSubmitAnswer({qid,answer}))
      }else{alert('Please select one option to vote for')}
        
      
      //Todo: when submit answer it vote to the optian and redirect to result card
       
    }
    return(
        <div className='card'>
        <Card>
        <div className='card-heading'>
        <h4 className='username-asking'>Asked by {props.author}</h4></div>
        <div className='card-content'>
        <div className='avatar-div' >
        <img  className='avatar'
        src={props.authorAvatar}
        alt={props.author}/>
        </div>

        <div className='card-detials'>
        <form className='question-form' onSubmit={handleSubmit}>
          <h3>Would you rather?</h3>
        <div className='optians'>
          <div className='checkbox'>
          <input type='checkbox' id='option-one' name='optian-one' value='optionOne'/>
          <label>{props.optionOne}</label>
          </div>
             <p className='center'>OR</p>
          <div className='checkbox'>
          <input type='checkbox' id='option-two' name='optian-two' value='optionTwo'/>
         <label>{props.optionTwo}</label>
          </div>
        </div>
        <input className='btn' type='submit'/>
        </form>
        </div>   
        </div>
        </Card>
        </div>
    )
}
function mapStateToProps({questions ,users, authedUser},{id}){
  const optionOne=questions[id].optionOne.text
  const optionTwo=questions[id].optionTwo.text
  const author=users[questions[id].author].name
  const authorAvatar=users[questions[id].author].avatarURL
  const questionID=id
  return({
  optionOne,
  optionTwo,
  author,
  authorAvatar,
  authedUser,
  questionID

  })
}
export default connect(mapStateToProps)(Question)

