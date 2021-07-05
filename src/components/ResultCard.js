import React from 'react'
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';

function  ResultCard(props){
const {voteOne,voteTwo,totalVotes,author,authorAvatar,optionOne,optionTwo,isVoted}=props

    const precentage1=Math.round((voteOne*100)/totalVotes)
    const precentage2=Math.round((voteTwo*100)/totalVotes)

    return(

        <div className='card'>
        <Card>
      
        <div className='card-heading'>
        <h3 className='username-asking'>Question???:  <span>Asked by {author}</span></h3>  
        <img  className='avatar-icon'
        src={authorAvatar}
        alt={author}/>
        </div>
     
        
        <div className='result-card-content'>
        <div className='card-detials'>
        <div className='result-form'>
        <div className='result'>
        <div id='optionOne' className={isVoted==="optionOne"? "voted": undefined}>
         <img className={isVoted !=="optionOne"?"no-icone":undefined} src='https://image.flaticon.com/icons/png/32/1582/1582054.png' alt='voting'/>
         <p>{optionOne}</p>
         <Box component='span' display="flex" alignItems="center">
           <LinearProgress 
             className='bar'
             variant="buffer"
             value={precentage1}
             color='secondary'
             valueBuffer={100}
             />
           <h3>{precentage1}%</h3>
         </Box>
        </div>
         <span>{voteOne} of votes out of {totalVotes}</span>
         
         
         <div id='optionTwo' className={isVoted==="optionTwo"?"voted":undefined}>
         <img className={isVoted !=="optionTwo"?"no-icone":undefined} src='https://image.flaticon.com/icons/png/32/1582/1582054.png' alt='voting'/>
         <p>{optionTwo}</p>
         <Box component='span' display="flex" alignItems="center">
           <LinearProgress 
             className='bar'
             variant="buffer"
             value={precentage2}
             color='secondary'
             valueBuffer={100}
             />
           <h3>{precentage2}%</h3>
         </Box>
         </div>
         <span>{voteTwo} of votes out of {totalVotes}</span>
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