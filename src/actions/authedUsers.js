//1-create and export const of action type used
export const SET_AUTHED_USER="SET_AUTHED_USER"

//2-create action creator function that return action obj have action type and proparties
export function setAuthedUser (id) {
    return {
      type: SET_AUTHED_USER,
      id,
    }
  } 