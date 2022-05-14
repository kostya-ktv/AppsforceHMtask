import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box } from '../UI/Box'
import { ISearchArea } from './searchArea.interface'
import { filterByEmail } from './searchArea.service'

const BoxWrap = styled(Box)`
   padding: 8px;
   color: black;
   display: flex;
   flex-direction: column;
   align-items: center;

`

const UserSearchArea:FC<ISearchArea> = ({setFilteringData, users}) => {

   const [radioFilter, setRadioFilter] = useState<string>("byEmail")
   const [searchValue, setSearchValue] = useState<string>('')

   useEffect(() => {
      radioFilter === "byEmail" && filterByEmail(users, setFilteringData, searchValue)
      radioFilter === "byName" && filterByEmail(users, setFilteringData, searchValue)
      radioFilter === "byId" && filterByEmail(users, setFilteringData, searchValue)
      radioFilter === "byCity" && filterByEmail(users, setFilteringData, searchValue)
   },[searchValue])

  return (
     <BoxWrap>
      <input 
         type="text" 
         placeholder={`Search ${radioFilter}`} 
         style={{width: "100%"}} 
         value={searchValue}
         onChange={(e) => setSearchValue(e.target.value)}
      />
      <div style={{marginTop: 5, display: 'flex'}}>
         <>
            <input 
               type="radio" 
               id="byEmail" 
               name="filter" 
               value="byEmail" 
               onChange={(e) => setRadioFilter(e.target.value)}
               />
            <label>By Email</label>
         </>
         <>           <input 
            type="radio" 
            id="byName" 
            name="filter" 
            value="byName"
            onChange={(e) => setRadioFilter(e.target.value)}
         />
           <label>By Name</label>
         </>

         <> 
              <input 
               type="radio" 
               id="byId" 
               name="filter" 
               value="byId"
               onChange={(e) => setRadioFilter(e.target.value)}
            />
              <label>By Id</label>
         </>

         <> 
              <input 
               type="radio" 
               id="byCity" 
               name="filter" 
               value="byCity"
               onChange={(e) => setRadioFilter(e.target.value)}
            />
              <label>By City</label>
         </>
      </div>
         
     </BoxWrap>
    

  )
}

export default UserSearchArea