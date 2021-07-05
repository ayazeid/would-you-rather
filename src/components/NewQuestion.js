import React,{useState} from 'react'
import Card from '@material-ui/core/Card'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {handleAddQuestion} from '../actions/questions'


function NewQuestion(props){
  const[state, setState]=useState({optionOne:'',optionTwo:'', toHome:false})

  function handleChange(e){

    const {name,value}=e.target
    setState(prevState=>({
        ...prevState,
        [name]:value
    }))
}


    function handleSubmit(e){
        e.preventDefault();
        console.log(state)
        // const author=props.authedUser
        const {optionOne, optionTwo}=state
        if(state.optionOne !== '' && state.optionTwo !==''){
          props.dispatch(handleAddQuestion({optionOne,optionTwo}))
          return setState({optionOne:'',optionTwo:'', toHome:true})
        }else(
          alert('Please type questions to submit')
        )
        //Todo: when submit answer it vote to the optian and redirect to result card
    }
    if(state.toHome === true){ 
      return <Redirect to='/'/> 
   }

    return(
        <div className='card'>  
        <h1 className='center'>Create New Question</h1>
        <Card>
        <div className='card-detials'>

        <form className='question-form' onSubmit={handleSubmit}>
          <h2>Would You Rather.....?</h2>
        <div className='optians center'>
         <input type='text' onChange={(e)=>handleChange(e)} placeholder='Add Question one' id='optian-one' name='optionOne'/>
            <span>OR</span>
         <input type='text' onChange={(e)=>handleChange(e)} placeholder='Add Question two'  id='optian-two' name='optionTwo'/>
        </div>
        <input className='btn' type='submit'/>

        </form>

        </div>
        </Card>

        </div>
        
    )
}

function mapStateToProps({authedUser}){
  return({
    authedUser
  })
}
export default connect(mapStateToProps)(NewQuestion)