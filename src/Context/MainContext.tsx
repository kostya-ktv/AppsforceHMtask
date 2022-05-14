import React, { FC } from 'react'
import { ThemeContext } from './ThemeContext'

const MainContext:FC = ({children}) => {
  return (
      <ThemeContext>
         {children}
       </ThemeContext>
  )
}

export default MainContext