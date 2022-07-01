import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import { Movie } from "../typings"
import { baseUrl } from "../constants/movie"
interface Props { 
  netflixOriginals:Movie[]
}
const Banner = ({netflixOriginals}: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)
  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  },[netflixOriginals])
  console.log(movie)
  return (
    <div>
      <div className="absolute top-0 left-0 ">
        <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} layout="fill"></Image>
      </div>
    </div>
  )
}

export default Banner