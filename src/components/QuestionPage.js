import React from 'react'
import Question from './Question'
import ResultCard from './ResultCard'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuthedUser } from './../actions/authedUsers';





function QuestionPage(props){

    

    if(!props.isError){
        const {id}=props.match.params
        return(
            <div>
            {props.isAnswered?<ResultCard id={id}/>:<Question id={id}/>}
            </div>
        )}else{
            
            return(<Redirect to='/error404'/>)
        }
}

function mapStateToProps({authedUser, users,questions}, props){
    const { id } = props.match.params
    if(Object.keys(questions).includes(id)){

        if (!Object.keys(users[authedUser].answers).includes(id)){
            return ({
                id,
                isAnswered: false
            })
        }else{
            return({
                id,
                isAnswered: true
            })
        }
    }else{
        return{
            isError:true
        }
    }
    
}

export default connect(mapStateToProps)(QuestionPage)