import React from 'react'
import Card from './Card'

const Event = () => {
  return (
    <div className='bg-[#0f0f19] min-h-screen flex flex-col items-center gap-20 pb-20 overflow-x-hidden'>
        <h1 className='text-[#E7B472] text-[50px] mb-6 font-abril-fatface '>Events</h1>
        <div className='flex flex-col md:flex-row justify-evenly gap-32'>
        <Card eventName="Hera's Trials" />
        <Card eventName="Hera's Trials" />
        </div>
        <div className='flex flex-col md:flex-row justify-evenly gap-32'>
        <Card eventName="Hera's Trials" />
        <Card eventName="Hera's Trials" />
        <Card eventName="Hera's Trials" />
        </div>
        <div className='flex flex-col md:flex-row justify-evenly gap-32'>
        <Card eventName="Hera's Trials" />
        <Card eventName="Hera's Trials" />
        <Card eventName="Hera's Trials" />
        </div>
        <div className='flex flex-col md:flex-row justify-evenly gap-32'>
        <Card eventName="Hera's Trials" />
        <Card eventName="Hera's Trials" />
        <Card eventName="Hera's Trials" />
        </div>


    </div>
  )
}

export default Event
