import React, {Component, Fragment} from "react";
import { BrowserRouter as Router, Redirect, Route ,Switch} from 'react-router-dom'
import Home from "./Home";
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import Nav from './Nav';
import Login from './Login';
import {connect} from 'react-redux'
import {handleIntialData} from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import CssBaseline from '@material-ui/core/CssBaseline';
import QuestionPage from "./QuestionPage";
import NoPage from "./NoPage";


class App extends Component{
  state={isLogged:false}

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleIntialData())
  }

  onLogin=(user)=>{
    this.setState(()=>(
      {isLogged:true}
    ))
  }

  onLogout=()=>{
    this.setState(()=>({isLogged:false}))
  }

  render(){
  return (
<div className='app'>
<Router>
   {/* first render login component */}
  {/* we make a conditional render for login first */}
  {(this.state.isLogged)?
  (
  <Fragment>
  <LoadingBar />
  <Nav onLogout={this.onLogout}/>
  <CssBaseline/>
  
    <div>
     
     <Switch>
      <Route exact path='/' component={Home}/>
      <Route  path='/add' component={NewQuestion}/>
      <Route  path='/leaderboard' component={LeaderBoard}/>
      <Route path='/questions/:id' component={QuestionPage}/>
      <Route path='/error404' component={NoPage}/>    
      <Redirect to='error404'/>
     </Switch>
     
    </div>
    </Fragment>)
    :(
  <Login onLogin={this.onLogin}/>
    )}
  </Router>
    


</div>
 
  );}
}

export default connect()(App);
