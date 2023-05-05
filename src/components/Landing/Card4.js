import React from 'react'
import CustomSpt from './assets/CustomSpt.png'
import './Card.css'

export default function Card4(props) {
  return (
    <div className='card mx-2 my-2'>
        <img src={CustomSpt}/>
        <p className='title my-4'>Custom Support</p>
        <p className='text-gray-500'>We offer access to user friendly analysis & visualization of anonymized dispensing data collected from the relatail pharmacies</p>
    </div>
  )
}
