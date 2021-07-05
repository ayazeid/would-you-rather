import React from 'react'
import QuestionCard from "./QuestionCard";
import { connect } from 'react-redux';




function QuestionList(props){
    
    
    return(
        <div className='board'>
       
        <ul>
        {(props.tab !=='answered')?
        (props.unansweredID.map(qid=>
        <li key={qid}>
      
        <QuestionCard id={qid}/>
        </li>
        ))
        :(props.answersID.map(qid=>
        <li key={qid}>
        <QuestionCard id={qid}/>
        </li>
        ))}

        </ul>
        </div>
    )
}
function mapStateToProps({questions, authedUser,users},props){
    const answersID=Object.keys(users[authedUser].answers)
    const unansweredID= Object.keys(questions).filter((qid)=>(!answersID.includes(qid)))
    
    return({
        answersID:answersID.sort((a,b)=>questions[b].timestamp -questions[a].timestamp),
        unansweredID:unansweredID.sort((a,b)=>questions[b].timestamp -questions[a].timestamp)
    })

}
export default connect(mapStateToProps)(QuestionList)


