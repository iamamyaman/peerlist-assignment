import React from 'react'

const IconButton = ({icon,onClick}) => {
  return (
    <div className='w-6 h-6 flex justify-center items-center border-[1px] border-solid border-gray-300 rounded-full' onClick={onClick}>
      <img src={icon}></img>
    </div>
  )
}

export default IconButton
