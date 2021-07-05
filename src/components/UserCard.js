import React from 'react'
import Card from '@material-ui/core/Card'
import { connect } from 'react-redux';

function UserCard(props){
    const {id, name,avatarURL,answers,questions}=props.user
    const answered=Object.keys(answers).length
    const created=questions.length
    const score=answered+created
    return(
        <div className='card'>
        <Card>
        <div className='card-content'>
        <img  className='avatar'
        src={avatarURL}
        alt='avatar'/>
        <div className='user-card-detials'> 
        <h2>{name}</h2>
        <p>Answered questions: {answered}</p>
        <p>Created questions: {created}</p>
        </div>

        <div className='score'>
        <h2>score</h2>
        <hr/>
        <h2>{score}</h2>
        </div>

        
        
        
        </div>
        

        </Card>
        </div>
    )
}

function mapStateToProps({users},{id}){
    const user=users[id]
    return ({
        user
    })
}
export default connect(mapStateToProps)(UserCard)