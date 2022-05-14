import { User } from "../../../types";

const isEmail = (email: string) => {
   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   return regex.test(email);
 }

export const validator = (e: any, id: string, users?: Array<User>) => {
   const inputs = e.target.parentNode.querySelectorAll('input') as [any]
   for(let input of inputs) {
      if(!input.value) return [input.id, 'cannot be empty']

      if(input.id === "last_name" || input.id === "first_name") {
         if(input.value.length < 3) return [input.id, 'need to be min of 3 characters']
      }
      if(input.id === "email") {

         if(!isEmail(input.value)) return [input.id, 'wrong email']

         if(!users?.every(el => el.email !== input.value || el.login.uuid == id)) {
            return [input.id, 'this email already exists']
         }
      }
   }
   return true
}