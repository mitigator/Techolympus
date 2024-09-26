import React from 'react'

const Card = ({ eventName }) => {
  return (
    <div className='bg-[#352A2E] border-[#E7B472] h-64 w-64 border-[1px] flex justify-center items-center'>
      <h2 className='text-[#E7B472] text-xl font-abril-fatface'>{eventName}</h2>
    </div>
  )
}

export default Card
