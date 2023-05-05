import React from 'react'
import './Sector.css'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import IconDashboard from './assets/icon-dashboard.png'

export default function Sector() {
    const sectorIntro = <><b className='text-basic-red'>Services </b><span className='text-gray-700' >We Provide with Quality</span></>
    return (
        <div className='sector-intro flex flex-col'>
            <div>
                <h2 className='font-rubick'>
                    {sectorIntro}
                </h2>
            </div>
            <div className='text-gray-500'>
                <p className='sector-desc'>We provide cloud based real world non-observational pharmacy sell out data to help<br></br> upscale brand, give market insight and impact success of brand in the continent</p>
            </div>
            <div className='flex my-20'>
                <Card1/>
                <Card2/>
                <Card3/>
                <Card4/>
            </div>
            <p className='font-satoshi text-3xl mt-10 text-gray-700'>Company Analysis</p>
            <div className='flex flex-row'>
                <div className='flex flex-col basis-1/6'>
                    <div className='flex flex-col h-32 border-b-2 border-gray-100'>
                        <div className='flex items-center justify-content mt-12 pl-3'>
                            <img src={IconDashboard} className='inline pr-2'/>
                            <span className='font-bold text-xl text-rubick text-gray-800'>DashBoards</span>
                        </div>
                    </div>
                    <div className='w-full px-3 h-12 hover:bg-basic-red flex items-center'>
                        <span>COMPANY RANKING</span >
                    </div>
                    <div>
                        Company brand
                    </div>
                    <div>
                        Brand SKU
                    </div>
                    <div>
                        competitive analysis 
                    </div>
                </div>
                <div className='flex basis-5/6'>
                    brandsdsdsd
                </div>
            </div>
        </div>
        
    )
}
