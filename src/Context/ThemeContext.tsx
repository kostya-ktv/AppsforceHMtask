import { createContext, FC } from 'react'
import { StyledVariables } from '../style/style-variables'

export const Theme = createContext(StyledVariables) 

export const ThemeContext:FC = ({children}) => {
  return (
      <Theme.Provider value={StyledVariables}>
         {children}
      </Theme.Provider>
  )
}
