import React from 'react'

const Error = ({ message }) => {
  return (
    <div className='text-center my-4 bg-red-600 text-white p-3 font-bold'>{message}</div>
  )
}

export default Error
