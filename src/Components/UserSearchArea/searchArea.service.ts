import { User } from "../../types";

export const filterByEmail = (data: Array<User>, setFiltered: Function, searchValue: string) => {
   const filtered = data.filter(el => el.email.toLowerCase().includes(searchValue.toLowerCase()))
   setFiltered([...filtered])
}

export const filterByName = (data: Array<User>, setFiltered: Function, searchValue: string) => {
   const filtered = data.filter(el => el.name.first.toLowerCase().includes(searchValue.toLowerCase()))
   setFiltered([...filtered])
}

export const filterByID = (data: Array<User>, setFiltered: Function, searchValue: string) => {
   const filtered = data.filter(el => el.login.uuid.toLowerCase().includes(searchValue.toLowerCase()))
   setFiltered([...filtered])
}

export const filterByCity = (data: Array<User>, setFiltered: Function, searchValue: string) => {
   const filtered = data.filter(el => el.location.city.toLowerCase().includes(searchValue.toLowerCase()))
   setFiltered([...filtered])
}