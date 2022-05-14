import React, { FC, useEffect, useState }  from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../Components/UI/Container'
import Spinner from '../Components/UI/Spinner/Spinner'
import { GlobalStoreType, User } from '../types'
import Footer from './Footer/Footer'
import Header from './Header/Header'

export const Wrapper = styled(Container)`
   display: flex;
   flex-direction: column;
  flex-wrap: nowrap;
   align-items: center;
   justify-content: space-between;
   height: 100vh;
`

const Main:FC = () => {
  const users = useSelector((store:GlobalStoreType) => store.userStore)
  const [userState, setUserState] = useState<Array<User>>(users)

  useEffect(() => setUserState(users),[users])
  
  return (
    <Wrapper>
      {userState.length > 0 
      ? 
        <>
        <Header/>
          <Outlet/>
        <Footer/>
        </>
        :
        <Spinner/>
      }
      
    </Wrapper>
  )
}

export default Main