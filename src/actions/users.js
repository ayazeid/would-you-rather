//1-create and export const of action type used
export const RECEIVE_USERS="RECEIVE_USERS"

//2-create action creator function that return action obj have action type and proparties
export function receiveUsers (users) {
    return {
      type: RECEIVE_USERS,
      users,
    }
  } 