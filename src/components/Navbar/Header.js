import React from 'react'
import Log from '../../assets/Logo.png'
import DropItem from './dropdown/DropItem'
import './Header.css'

export default function Header() {         
    const headerIntro = <> <b className='text-basic-red'>VERSUS™  </b>offers access to user-friendly analysis<br/>and visualization of anonymised dispensing data<br/>collected from the retail pharmacies.</>

    return (
    <div >
        <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap  z-50 w-full bg-white text-sm py-4">
            <nav className=" w-full mx-auto px-4 flex sm:items-center sm:justify-between" aria-label="Global">
                <div className='flex items-center w-full justify-between'>
                    <div className="items-center">
                        <img src={Log}/>
                    </div>
                    <div class="sm:hidden">
                        <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-600 transition-all text-sm" data-hs-collapse="#navbar-collapse-basic" aria-controls="navbar-collapse-basic" aria-label="Toggle navigation">
                        <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-basic" className="hidden basis-full grow sm:block font-satoshi">
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">          
                        <DropItem name="About Us" />
                        <DropItem name="Products" />
                        <DropItem name="Services" />
                        <DropItem name="Use Case" />
                        <a className="font-medium text-gray-800 mx-3" href="#" aria-current="page">Insight</a>
                        <a className="font-medium text-gray-800 mx-3" href="#" aria-current="page">PharmacyMetricsTM</a>
                    </div>
                </div>
            </nav>
        </header>
        <div className="flex shadow-3xl header-intro">
            <h2 className='font-black font-rubick'>
                {headerIntro}
            </h2>
            <div className='form-group mt-16 flex flex-row ml-20'>
                <div class="relative flex rounded-md shadow-sm mr-4 basis-1/2">
                    <input type="text" id="hs-search-box-with-loading-5" name="hs-search-box-with-loading-5" className="py-3 px-4 pl-11 block w-3/4 h-16 border-gray-200 shadow-sm rounded-l-md text-sm outline-none" placeholder="Search for company name/ATC code/Brand" />
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 22L20 20" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <select id="hs-inline-leading-select-currency" name="hs-inline-leading-select-currency" className="block w-1/4 text-gray-600 shadow-2xl rounded-r-md rounded-1-md outline-none">
                        <option>ATC-1</option>
                        <option>ATC-2</option>
                        <option>ATC-3</option>
                    </select>
                </div>
                <div className='relative flex rounded-md shadow-sm mx-4 basis-1/6'>
                    <select id="hs-inline-leading-select-currency" name="hs-inline-leading-select-currency" className="block w-full px-4 text-gray-600 rounded-md border-gray-500 rounded-1-md outline-none">
                        <option class>Period</option>
                        <option>ATC-2</option>
                        <option>ATC-3</option>
                    </select>
                </div>
                <div className='relative flex rounded-md shadow-sm mx-4 basis-1/6'>
                    <select id="hs-inline-leading-select-currency" name="hs-inline-leading-select-currency" className="block w-full px-4 text-gray-600 rounded-md border-gray-500 rounded-1-md outline-none">
                        <option>Product Analysis</option>
                        <option>ATC-2</option>
                        <option>ATC-3</option>
                    </select>
                </div>
                <div className='flex basis-1/6'>
                    <button type="button" class="py-3 px-4 mx-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-basic-red text-white ">
                        View Data
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}
