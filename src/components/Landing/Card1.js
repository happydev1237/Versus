import React from 'react'
import DataSource from './assets/DataSource.png'
import './Card.css'

export default function Card1(props) {
  return (
    <div className='card mx-2 my-2'>
        <img src={DataSource}/>
        <p className='title my-4'>Data Sourcing</p>
        <p className='text-gray-500'>We offer access to user friendly analysis & visualization of anonymized dispensing data collected from the relatail pharmacies</p>
    </div>
  )
}
