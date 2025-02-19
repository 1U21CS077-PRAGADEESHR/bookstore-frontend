import React from 'react'
import { BsArrowBarLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function BackButton({destination='/'}) {
  return (
    <div className='flex'>
      <Link to={destination}  className='bg-blue-800 text-white px-4 py-2 rounded-lg w-fit'>
      <BsArrowBarLeft className='text-2xl'/>
      </Link>
    </div>
  )
}

export default BackButton
