import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import { Movie } from "../typings"
interface Props { 
  netflixOriginals:Movie[]
}
const Banner = ({netflixOriginals}: Props) => {
  const [movie, setMovie] = useState(null)
  return (
    <div>
      <div>

      </div>
    </div>
  )
}

export default Banner