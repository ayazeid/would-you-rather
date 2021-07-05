import React from 'react'
import UserCard from './UserCard'
import { connect } from 'react-redux';

function LeaderBoard(props){
    const users=props.users;
    return( 
        <div className='container'>
        <div className='heading'>
        <h1 className='center'>Leader Board</h1>
        </div>
        <div className='board'>
        {users.map((userID)=>(
            <li key={userID}>
            <UserCard id={userID}/>
            </li>
        ))}    
        </div>
        </div>
    )
}
function mapStateToProps({users}){
    return({
        users:Object.keys(users).sort((a,b)=>(
            (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length)
        ))
    })

}
export default connect(mapStateToProps)(LeaderBoard)