import React from 'react'
import DataIntegration from './assets/DataIntegration.png'
import './Card.css'

export default function Card3(props) {
  return (
    <div className='card mx-2 my-2'>
        <img src={DataIntegration}/>
        <p className='title my-4'>Data Integration</p>
        <p className='text-gray-500'>We offer access to user friendly analysis & visualization of anonymized dispensing data collected from the relatail pharmacies</p>
    </div>
  )
}
