import React, { FC } from 'react'
import styled from 'styled-components'

const Fade = styled.div`
   position: fixed;
   background-color: rgba(0,0,0,0.9);
   width: 100%;
   height: 100%;
   left: 0;
   top: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 99;
`
const Modal:FC = ({children}) => {
  return (
    <Fade>
       {children}
    </Fade>
  )
}

export default Modal