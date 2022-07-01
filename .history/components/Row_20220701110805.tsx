import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'
import {Movie} from "../typings"
interface Props { 
    title: string,
    movies: Movie[],
}
const Row = ({title, movies}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <div>
            <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0"/>
            <ChevronRightIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0"/>
        </div>
    </div>
  )
}

export default Row