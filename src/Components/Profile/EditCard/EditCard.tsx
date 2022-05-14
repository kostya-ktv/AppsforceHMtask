import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Card } from '../../Card/Card'
import Button from '../../UI/Button/Button'
import Modal from '../../UI/Modal/Modal'
import { IEditCard } from './editCard.interface'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validator } from './editCard.service'
import { GlobalStoreType, User } from '../../../types'
import { useDispatch, useSelector } from 'react-redux'
import { updateUsers } from '../../../Store/Actions/user.actions'
import {v4} from "uuid"
const Label = styled.label`
   margin-top: 16px;
   margin-bottom: 10px;
   font-size: 1.3rem;
`
const Input = styled.input`
   margin-bottom: 10px;
`

const EditCard:FC<IEditCard> = ({handleClose, user, title}) => {
   const users = useSelector((store:GlobalStoreType) => store.userStore)
   const dispatch = useDispatch()

   const [editEmail, setEditEmail] = useState<string>(user?.email || "")
   const [editCity, setEditCity] = useState<string>(user?.location.city || "")
   const [editCountry, setEditCountry] = useState<string>(user?.location.country || "")
   const [editStreetName, setEditStreetName] = useState<string>(user?.location.street.name || "")
   const [editStreetNumber, setEditStreetNumber] = useState<string>(user?.location.street.number || "")
   const [editFirstName, setEditFirstName] = useState<string>(user?.name.first || "")
   const [editLastName, setEditLastName] = useState<string>(user?.name.last || "")
   const uuid = user?.login.uuid || v4()
   
   const notify = (msg?: string) => {
      toast.error(msg)
   }

   const validate = (e: any) => {
      const result = validator(e, uuid, users)
      if(result === true) {
         const updateInfo = {
            id: uuid,
            email: editEmail,
            city: editCity,
            country: editCountry,
            streetName: editStreetName,
            streetNumber: editStreetNumber,
            firstName: editFirstName,
            lastName: editLastName
         }         
         updateUsers(dispatch, users, updateInfo)
         handleClose()
      } else {
         notify(`${result[0]} : ${result[1]}`)
      }
   }
   
  return (
   <Modal>
      <Card>
         <h1>{title}</h1>
         <Label>First name</Label>
         <Input 
            type="text" 
            value={editFirstName} 
            onChange={(e: any) => setEditFirstName(e.target.value)} 
            id="first_name"
         />

         <Label>Last name</Label>
         <Input 
            type="text" 
            value={editLastName} 
            id="last_name"
            onChange={(e: any) => setEditLastName(e.target.value)}
         />

         <Label>Email</Label>
         <Input 
            type="text" 
            value={editEmail} 
            id="email"
            onChange={(e: any) => setEditEmail(e.target.value)}
         />

         <Label>City</Label>
         <Input 
            type="text" 
            value={editCity} 
            id="city"
            onChange={(e: any) => setEditCity(e.target.value)}
         />
         <Label>Country</Label>
         <Input 
            type="text" 
            value={editCountry} 
            id="country"
            onChange={(e: any) => setEditCountry(e.target.value)}
         />
         <Label>Street name</Label>
         <Input 
            type="text" 
            value={editStreetName} 
            id="street_name"
            onChange={(e: any) => setEditStreetName(e.target.value)}
         />
         <Label>Street number</Label>
         <Input 
            type="text" 
            value={editStreetNumber} 
            id="street_number"
            onChange={(e: any) => setEditStreetNumber(e.target.value)}
         />

         <Button title='CANCEL' type='cancel' onClick={handleClose}/>
         <Button title='SAVE' type='confirm' onClick={validate}/>
      </Card>
      <ToastContainer 
         position="top-center"
         autoClose={3000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
      />
</Modal>
  )
}

export default EditCard