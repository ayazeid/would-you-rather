import React from 'react'
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';


function  ResultCard(props){

    return(

        <div className='card'>
        <Card>
        <div className='card-heading'>
        <h3 className='username-asking'>Question???:  <span>Asked by {props.author}</span></h3>  
        <img  className='avatar-icon'
        src={props.authorAvatar}
        alt={props.author}/>
        </div>
        <div className='result-card-content'>
        <div className='card-detials'>
        <div className='result-form'>
        <div className='result'>
         <div id='optionOne' className={props.isVoted==="optionOne"? "voted": undefined}>{props.optionOne}</div>
         <span>{props.voteOne} of votes out of {props.totalVotes}</span>
         <div id='optionTwo' className={props.isVoted==="optionTwo"?"voted":undefined}>{props.optionTwo}</div>
         <span>{props.voteTwo} of votes out of {props.totalVotes}</span>
        </div>
      
        </div>

        </div>
        
        
        </div>

        </Card>


        </div>
    )
}
function mapStateToProps({authedUser,questions ,users},{id}){
    const optionOne=questions[id].optionOne.text
    const optionTwo=questions[id].optionTwo.text
    const voteOne=questions[id].optionOne.votes.length
    const voteTwo=questions[id].optionTwo.votes.length
    const totalVotes=voteOne + voteTwo
    const author=users[questions[id].author].name
    const authorAvatar=users[questions[id].author].avatarURL
    const isVoted= users[authedUser].answers[id]

    return({
    optionOne,
    optionTwo,
    voteOne,
    voteTwo,
    totalVotes,
    author,
    authorAvatar,
    isVoted
  
    })
  }
export default connect(mapStateToProps)(ResultCard)