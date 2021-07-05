import React from 'react'
import Card from '@material-ui/core/Card';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



function QuestionCard(props){
    function handleSubmit(e){
        e.preventDefault();
        //Todo: when submit answer it vote to the optian and redirect to result card
    }
    return(
        <div className='card question-card'>
        
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
        
        <form className='question-form' onSubmit={(e)=>handleSubmit(e)}>
        <h3>Would you rather?</h3>
        <div className='optians'>
        <p id='optian-one'>{props.optionOne}</p>
        <p>or</p>
        <p id='optian-two'>{props.optionTwo}</p>
        </div>
        <Link to={`/questions/${props.id}`} className='btn center'>View Question</Link>
        </form>

        </div>
        
        
        </div>

        </Card>


        </div>
    )
}

export default withRouter(connect(({questions ,users}, {id})=>{
    const optionOne=questions[id].optionOne.text
    const optionTwo=questions[id].optionTwo.text
    const author=users[questions[id].author].name
    const authorAvatar=users[questions[id].author].avatarURL
    

    

    return({
    optionOne,
    optionTwo,
    author,
    authorAvatar
  
    })
})(QuestionCard))