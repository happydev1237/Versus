import React from 'react'
import Insight from './assets/Insight.png'
import './Card.css'

export default function Card2(props) {
  return (
    <div className='card mx-2 my-2'>
        <img src={Insight}/>
        <p className='title my-4'>Strategy & Insight</p>
        <p className='text-gray-500'>We offer access to user friendly analysis & visualization of anonymized dispensing data collected from the relatail pharmacies</p>
    </div>
  )
}
