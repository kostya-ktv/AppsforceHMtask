import { AxiosResponse } from "axios"
import { API } from "../API/api"
import { UsersResponseType } from "../types"

export const fetchUsers = (): Promise<AxiosResponse<UsersResponseType>> => {
   return API.get<UsersResponseType>('/?results=10')
}