import React from 'react';
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen space-y-12'>
        <p className='font-bold text-4xl text-red-600'>
          Not Found Page
        </p>
        <NavLink to='/'>
          <button className='text-xl font-semibold bg-sky-500 text-white px-2 py-1 rounded-xl'>Go Back</button>
        </NavLink>
      </div>
    </>
  )
}

export default Error