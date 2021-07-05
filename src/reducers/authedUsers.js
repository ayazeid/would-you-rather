  //1-import the reducer actions from action creators
import { SET_AUTHED_USER } from './../actions/authedUsers';


// create and export default reducer function have arguments (state={}||[], action) state = {} or [] or null depend on our received date
export default function authedUser(state=null, action){
    switch(action.type){
        case SET_AUTHED_USER:
            return action.id    
        default:
            return state    

    }
}