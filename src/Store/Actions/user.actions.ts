//@ts-nocheck
import { Dispatch } from "redux";
import { FETCH_USERS_ACTION, STATIC_AVATAR_URL, UPDATE_USERS_ACTION } from "../../constants";
import { fetchUsers } from "../../Service/user.service";
import { updateUserType, User } from "../../types";

export const getUsersAndDispatch = async (dispatch: Dispatch) => {
   try {
      const result = await fetchUsers()
      dispatch({type: FETCH_USERS_ACTION, payload: result.data.results})
   } catch (error) {
      console.log(error);
   }
}

export const updateUsers = (dispatch: Dispatch, users: Array<User>, update: updateUserType ) => {
   
   let user = users.find(el => el.login.uuid === update.id)

   if(user){
         user.email = update.email
         user.location = {
         street: {
         number: update.streetNumber,
         name: update.streetName
         },
         city: update.city,
         country: update.country,
      }
      user.name.first = update.firstName
      user.name.last = update.lastName
      user.login.uuid = update.id
      user.picture.medium = user.picture.medium || STATIC_AVATAR_URL
      dispatch({type: UPDATE_USERS_ACTION, payload: users})
   } else {
      user = {
         name: {
            title: "Mr.",
            first: update.firstName,
            last: update.lastName
          },
          location: {
            street: {
              number: update.streetNumber,
              name: update.streetName
            },
            city: update.city,
            country: update.country,
          },
          email: update.email,
          login: {
            uuid: update.id
          },
          picture: {
            medium: STATIC_AVATAR_URL,
          }
       }
       dispatch({type: UPDATE_USERS_ACTION, payload: [...users, user]})
   }
}

export const deleteUser = (dispatch: Dispatch, users: Array<User>, id: string ) => {
   users.splice(users.findIndex((el) => el.login.uuid === id), 1)
   dispatch({type: UPDATE_USERS_ACTION, payload: users})
}