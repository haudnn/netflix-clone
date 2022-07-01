import React,{useState, useEffect} from 'react'
import MuiModal from "@mui/material/Modal"
import { useRecoilValue, useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import  { Movie } from "../typings"
import { XIcon } from '@heroicons/react/outline'
const Modal = () => {
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect (() => {

    },[])
    const handleClose = () => {
        setShowModal(false)
    }
    return (
       <MuiModal open={showModal} onClose={handleClose}>
            <>
                <button onClick={handleClose} className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]">
                    <XIcon className="h-6 w-6"></XIcon>
                </button>
                <div>

                </div>
            </>
       </MuiModal>
  )
}

export default Modal