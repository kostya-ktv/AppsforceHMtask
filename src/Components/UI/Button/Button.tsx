import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { IButton } from './button.interface'

const Wrapper = styled.div<IButton>`
   ${({type}) => {
      return css`
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         color: black;
         padding: 16px 37px;
         background: ${type === "edit" ? "#FFF037" 
         : type === "cancel" ? "#e7d3ff" 
         : type === "delete" ? "#ff5151" 
         : "#c6ffd7"};
         border: 2px solid #222222;
         box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
         border-radius: 33px;
         font-weight: bold;
         cursor: pointer;
         transition: all .3s;
         margin: 5px;
         &:hover {
            background: #FFF;
         }
      `
   }} 
`
const Button:FC<IButton> = (props) => {
  return (
    <Wrapper {...props} onClick={props.onClick}>{props.title}</Wrapper>
  )
}

export default Button