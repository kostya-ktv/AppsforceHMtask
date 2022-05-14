import { combineReducers } from "redux"
import { rootReducer } from "./Store/Reducers/root.reducer"

type RootReducerType = typeof rootReducer
export type GlobalStoreType = ReturnType<RootReducerType>

export type UsersResponseType = {
   results: Array<User>
 }

 export type User = {
   name: {
      title: string,
      first: string,
      last: string
    },
    location: {
      street: {
        number: string,
        name: string
      },
      city: string,
      country: string,
    },
    email: string,
    login: {
      uuid: string
    },
    picture: {
      medium: string,
    }
 }
export type updateUserType = {
  id: string,
  email: string,
  city: string,
  country: string,
  streetName: string,
  streetNumber: string,
  firstName: string,
  lastName: string
}