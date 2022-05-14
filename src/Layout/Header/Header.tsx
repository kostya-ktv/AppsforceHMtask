import React, { FC, useState } from 'react'
import { Container } from '../../Components/UI/Container'
import addICon from "../../Assets/Images/add.svg"
import styled from 'styled-components'
import EditCard from '../../Components/Profile/EditCard/EditCard'

const AddButton = styled.img`
  height: 40px;
  margin-left: 20px;
  cursor: pointer;
  animation: .5s ease-in .5s infinite reverse both running wave;

  @keyframes wave {
    0% {transform: scale(1)};
    100% {transform: scale(1.1)};
  }
  @media (max-width: 550px) {
    position: absolute;
    right: 10px;
    top: 5px;
   }
`
const Header:FC = () => {
  const [showAddUserModal, setAddShowUserModal] = useState<boolean>(false)
  return (
  <>
    <Container style={{textAlign: 'center'}}>
       <h1>User library in React</h1>
       <AddButton src={addICon} onClick={() => setAddShowUserModal(true)}/>
    </Container>
    {showAddUserModal && <EditCard title="NEW PROFILE" handleClose={() => setAddShowUserModal(false)}/>} 
  </>
  )
}

export default Header