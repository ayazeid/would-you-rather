import React from 'react'
import Card from '@material-ui/core/Card'
import { connect } from 'react-redux';
import { setAuthedUser } from './../actions/authedUsers';



function Login(props){

    function handleLogin(e){
        //todo:handle login
        //set-authedID
        e.preventDefault()
        const user=document.getElementById('loggeduser').value;
        console.log(user)
        if(user !== 'none'){
          props.dispatch(setAuthedUser(user))
            return props.onLogin(user)
        }
        
    }
    return(  
        <div className='login-screen'>

         <div className='container'>
           <h1 className='center'>Would You Rather?</h1>
           
           <div className='login-card'>
             <Card>
             <p className='center'>Welcome to would you rather app.</p>
             <img src='https://image.flaticon.com/icons/png/128/1484/1484822.png' alt='welcome'/>
             <p className='center'>Please login</p>
             <div className="login-users">   
             <form onSubmit={handleLogin}>
             <select  defaultValue='none' id='loggeduser'>
                    <option value="none" disabled>Please choose username to login</option>
                    {props.usersID.map(userID=>{
                      const username=props.users[userID].name
                      return <option key={userID} value={userID}>{username}</option>                
                    })}
                   </select>  
                   <button className='login-btn'/>
             </form>            
                   
                          </div>
             </Card>

           </div>
         </div>
        </div>
        
    )
}
export default connect(({users})=>{
  const usersID=Object.keys(users)
  return{
    users,
    usersID
  }
})(Login)