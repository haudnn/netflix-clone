import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import { Movie } from "../typings"
interface Props { 
  netflixOriginals:Movie[]
}
const Banner = ({netflixOriginals}: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)
  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  },[netflixOriginals])
  return (
    <div>
      <div>

      </div>
    </div>
  )
}

export default Banner