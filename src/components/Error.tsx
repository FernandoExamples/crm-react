import React from 'react'

interface Props {
  children?: React.ReactNode
}

export const Error = ({ children }: Props) => {
  return <div className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">{children}</div>
}
