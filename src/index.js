import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
//1-import reducer from reducers folder
import reducer from './reducers'
//2-import createStore from redux
import {createStore} from 'redux'
//3-import Provider from react-redux 
import {Provider} from 'react-redux'
//6-import middleware from middleware folder
import middleware from './middleware'

//4-createStore 
const store=createStore(reducer, middleware)
//5-modify App component and wrappe it inside Provider component passing store as prop
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
  document.getElementById('root')
  )
