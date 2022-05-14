import { User } from "../../../types";

export interface IEditCard {
   user?: User
   handleClose: () => void
   title?: string
}