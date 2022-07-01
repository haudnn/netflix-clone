import React from 'react'
import MuiModal from "@mui/material/Modal"
import { useRecoilValue, useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
const Modal = () => {
    const [showModal, setShowModal] = useRecoilState(modalState)
    return (
        <div>Modal</div>
  )
}

export default Modal