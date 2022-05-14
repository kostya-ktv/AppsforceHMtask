import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { IProfile } from './profile.interface'
import Button from "../UI/Button/Button"
import EditCard from './EditCard/EditCard'
import { Card } from '../Card/Card'
import deleteIcon from '../../Assets/Images/delete.svg'
import Modal from '../UI/Modal/Modal'
import { Box } from '../UI/Box'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../Store/Actions/user.actions'
import { useOutletContext } from 'react-router-dom'
import { GlobalStoreType, User } from '../../types'

const Avatar = styled.img`
   border-radius: 50px;
   margin-top: -70px;
   height: 100px;
   margin-bottom: 10px;
   align-self: center;
`
const DeleteButton = styled.img`
   position: absolute;
   height: 25px;
   cursor: pointer;
   transition: all .3s;
   &:hover {
      transform: scale(1.1);
   }
`
const Profile:FC<IProfile> = ({user}) => {
   const {email, location, login, name, picture} = user
   const {first, last, title} = name
   const {city, country, street} = location
   const users = useSelector((store:GlobalStoreType) => store.userStore)
   const [isShowEditor, setIsShowEditor] = useState<boolean>(false)
   const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
   const dispatch = useDispatch()

   const deleteCardHandler = () => {
      deleteUser(dispatch, users, login.uuid)
      setShowDeleteModal(false)
   }
  return (
     <>
      <Card>
         <DeleteButton src={deleteIcon} onClick={() => setShowDeleteModal(true)}/>
         <Avatar src={picture.medium}/>
         <h2>{title + " " + first}</h2>
         <h3>{last}</h3>

         <h4 style={{marginTop: 10}}>{email}</h4>
         

         <div style={{display: "flex", justifyContent:"space-evenly", marginTop: 10}}>
            <h4 style={{marginTop: 10}}>{country}</h4>

            <h4 style={{marginTop: 10}}>{city}</h4>
         </div>
         
         <div style={{display: "flex", justifyContent:"space-evenly", marginBottom: 20}}>
            <h4 style={{marginTop: 10}}>{street.name}</h4>
            <h4 style={{marginTop: 10}}>{street.number}</h4>
         </div>
         <h6 style={{marginTop: 10}}>{login.uuid}</h6>

         <Button title='EDIT' type='edit' onClick={() => setIsShowEditor(true)}/>
      </Card>
      {isShowEditor && <EditCard user={user} title="EDIT PROFILE" handleClose={() => setIsShowEditor(false)}/>}
      {showDeleteModal && 

         <Modal>
            <div style={{display: "flex", flexDirection: "column"}}>
               <h2>Are you sure? </h2>
                  <Button title='CANCEL' type='cancel' onClick={() => setShowDeleteModal(false)}/>
                  <Button title='DELETE' type='delete' onClick={deleteCardHandler}/>
               </div>          
         </Modal>
      }
   </>
  )
}

export default Profile