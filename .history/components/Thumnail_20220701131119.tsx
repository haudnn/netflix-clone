import React from 'react'
import {Movie} from "../typings"
import Image from "next/image"
interface Props {
  movie: Movie
}
const Thumnail = ({ movie}: Props) => {
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumnail