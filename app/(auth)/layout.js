import React, { Children } from 'react'

const layout = ({children}) => {
  return (
    <div className='flex justify-center py-40'>{children}</div>
  )
}

export default layout