import React from 'react'
import MuiModal from "@mui/material/Modal"
import { useRecoilValue, useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { XIcon } from '@heroicons/react/outline'
const Modal = () => {
    const [showModal, setShowModal] = useRecoilState(modalState)
    const handleClose = () => {
        setShowModal(false)
    }
    return (
       <MuiModal open={showModal} onClose={handleClose}>
            <>
                <button>
                    <XIcon className="h-6 w-6"></XIcon>
                </button>
            </>
       </MuiModal>
  )
}

export default Modal