import React from 'react'
import Listitems from './listitems'
import { useState } from 'react'
const Accordian = ({title,open ,setOpen}) => {
  
  const showItems = () => {
    setOpen()
  }


  return (
    <div className='mt-5 w-64 shadow-md border-gray-200 p-2.5'>
      <div className='flex justify-between '>
        <h1 className='text-md font-bold'>{title}</h1>
        <button onClick={showItems} className='bg-black text-white rounded-md px-1'>Show</button>
    </div>
    {
      open && (
        <Listitems />
      )
    }
    </div>
  )
}
 
export default Accordian