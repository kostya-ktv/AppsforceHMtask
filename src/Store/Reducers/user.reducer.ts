import { FETCH_USERS_ACTION, UPDATE_USERS_ACTION } from "../../constants";
import { User } from "../../types";

const USER_STATE: Array<User> = []

const userReducer = (state = USER_STATE, action: {type: string, payload: Array<User>}) => {

   switch(action.type){
      case FETCH_USERS_ACTION: return [...action.payload]
      case UPDATE_USERS_ACTION: return [...action.payload]
      default: return state
   }
}

export default userReducer;