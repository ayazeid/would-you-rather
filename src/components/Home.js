import React, {useState} from 'react'
import QuestionList from './QuestionList';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';


function Home(){
    const [state, setState]=useState("unanswered")

 function handleClick(value){
        setState(
            value
        ) 
        
    }

    return(
        <div className='container center'>
        <h2 className='center'>Questions Dashboard</h2>
         <ButtonGroup disableElevation variant="outlined" color="default">
         <Button onClick={()=>handleClick('unanswered')} disabled={state === 'unanswered'}>UnAnswered</Button>
         <Button onClick={()=>handleClick('answered')} disabled={state ==='answered'}>Answered</Button>
         </ButtonGroup>

       {(state === 'answered')?(
        <QuestionList tab={state}/>
       ):
       <QuestionList tab={state}/>
       }
     </div>
    )
}
export default connect()(Home)