import React from 'react';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';


function Nav (props) {
  function handleClick(e){
    e.preventDefault()
    props.onLogout()
  }
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
             New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>  
        </ul>
        
        <div className='user-icons'>
         <ul>
         <li>
            <img  className='avatar-icon'
               src={props.users[props.authedUser].avatarURL}
               alt={props.authedUser}/>
           </li>
           <li>{props.users[props.authedUser].name}!  <button className='logout-btn' onClick={(e)=>handleClick(e)}/></li> 
         </ul>
         </div>
      </nav>
    )
  } 

export default connect(({users,authedUser})=>
({
  users,
  authedUser
}))(Nav)