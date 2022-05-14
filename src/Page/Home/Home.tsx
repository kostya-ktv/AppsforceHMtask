import React, { FC, useEffect, useState } from 'react'
import { Container } from '../../Components/UI/Container'
import Profile from '../../Components/Profile/Profile'
import { GlobalStoreType, User } from '../../types'
import { useSelector } from 'react-redux'
import UserSearchArea from '../../Components/UserSearchArea/UserSearchArea'

const Home:FC = () => {
  const users = useSelector((store:GlobalStoreType) => store.userStore)
  const [userState, setUserState] = useState<Array<User>>([...users])

  useEffect(() => setUserState([...users]),[users])

  return (
    <>
      <UserSearchArea users={users} setFilteringData={setUserState}/>
      <Container>
        
        {userState?.length > 0 ?
          userState.map((user, index) =><Profile user={user} key={index}/>)
          :
          <h1>oops....</h1>
        }
      </Container>
    </>
    
  )
}

export default Home