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
            <ChevronLeftIcon/>
            <ChevronRightIcon/>
        </div>
    </div>
  )
}

export default Row