import React from 'react'
import spin from "../../../Assets/Images/spin.svg"
import Modal from '../Modal/Modal'

const Spinner = () => {
  return (
   <Modal>
      <img src={spin} alt="spin"/>
   </Modal>
  )
}

export default Spinner