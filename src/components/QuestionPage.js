import React from 'react'
import Question from './Question'
import ResultCard from './ResultCard'
import { connect } from 'react-redux';



function QuestionPage(props){

    const {id}=props.match.params

    return(
        <div>
        {props.isAnswered?<ResultCard id={id}/>:<Question id={id}/>}
        </div>
    )
}

function mapStateToProps({authedUser, users}, props){
    const { id } = props.match.params
    if (!Object.keys(users[authedUser].answers).includes(id)){
        return ({
            isAnswered: false
        })
    }else{
        return({
            isAnswered: true
        })
    } 
}

export default connect(mapStateToProps)(QuestionPage)