import React from 'react'
import Image from 'next/image'
import { Movie } from "../typings"
interface Props { 
  netflixOriginals:Movie[]
}
const Banner = ({netflixOriginals}: Props) => {
  return (
    <div>Banner</div>
  )
}

export default Banner