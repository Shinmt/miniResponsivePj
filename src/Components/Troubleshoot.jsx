/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

const Troubleshoot = () => {
  return (
    <div className='main'>
      {/* headlinebar */}
      <div className=' headline-base'>
        <div className=' headline-bar'>
          <div className='headline-text'>
            Troubleshoot
          </div>
          <Link to='/'>
            <div className='headline-X'>X</div>
          </Link>
        </div>
      </div>

      <div className=' h-[500px] flex flex-grow border border-b-slate-300'>
      
      {/* sidebar */}
      <div className='lg:w-[232px] sm:w-40 h-auto bg-white border-r border-[#CDCDCD]'>
        <div className=' flex flex-col lg:pt-[47px] sm:pt-7 justify-center lg:gap-y-9 sm:gap-y-5'>
          <button onClick={() => {alert('REASONS!!!');}} className=' grid grid-cols-2 lg:gap-x-0 sm:gap-x-5 items-center hover:bg-[#09092D] hover:text-white '>
          <text className=' sidebar-text'>Reasons</text>
          <button onClick={() => {alert('Do you need some help?');}}><img src='/img/Q.png' className=' w-[15px] h-[15px] text-base' /></button>
          </button>
        <text onClick={() => {alert('DATA!!!');}} className=' sidebar-text hover:bg-[#09092D] hover:text-white '>Data</text>
        <text onClick={() => {alert('This is where we are viewing...');}} className=' h-[50px] sidebar-text hover:bg-[#09092D] hover:text-white py-3'>Model Parameters</text>
        <text onClick={() => {alert('Out-of-Vocabulary Word~');}} className=' sidebar-text hover:bg-[#09092D] hover:text-white '>Out-of-Vocabulary Word</text>
        </div>
      </div>

      <div className=' h-auto lg:pl-[46px] sm:pl-5 lg:mt-5 sm:mt-8'> {/* lg:mt-5 sm:mt-8 */}

      {/* heading and paragraph */}
        <h1 className='text-black font-bold text-base '>Model Parameters</h1>
        <p className=' pt-3 font-normal text-sm sm:text-xs'>Following are model parameters that can cause duplicate embedding</p>

      {/* data box */}
      <div className=' lg:py-12 lg:mx-36 sm:py-16 sm:mx-24'>
      <div className=' flex flex-col sm:flex-row'>

        {/*items left */}
        <div>
        <div className=' grid grid-row relative text-left lg:w-[137px] sm:w-auto lg:h-full sm:h-auto lg:pt-0.5 sm:pt-1.5 lg:text-sm sm:text-xs font-normal lg:gap-y-6 sm:gap-y-11'>
          <label>Vector Dimensionality</label>
          <label>Window Size</label>
          <label>Min Count</label>
          <label>Learning Rate</label>
          <label>Epochs</label>
        </div>
        </div>

        {/*items right */}
        <div>
        <div className=' h-auto relative grid grid-row justify-end lg:pl-20 sm:pl-24 mb-3 lg:gap-y-5 sm:gap-y-7 '>
        <div className='selectbar'>
          <p className='selectbar-text'>100</p>
          <svg xmlns="http://www.w3.org/2000/svg" className=' selectbar-arrow ' width="10" height="20" viewBox="0 0 10 20" fill="none">
            <path d="M5.00005 0L9.33018 7.5H0.669922L5.00005 0Z" fill="#D9D9D9"/>
            <path d="M5.00005 19.5L9.33018 12H0.669922L5.00005 19.5Z" fill="#D9D9D9"/>
          </svg>
        </div>
        <div className='selectbar'>
          <p className='selectbar-text'>5</p>
          <svg xmlns="http://www.w3.org/2000/svg" className=' selectbar-arrow ' width="10" height="20" viewBox="0 0 10 20" fill="none">
            <path d="M5.00005 0L9.33018 7.5H0.669922L5.00005 0Z" fill="#D9D9D9"/>
            <path d="M5.00005 19.5L9.33018 12H0.669922L5.00005 19.5Z" fill="#D9D9D9"/>
          </svg>        </div>
        <div className='selectbar'>
          <p className='selectbar-text'>5</p>
          <svg xmlns="http://www.w3.org/2000/svg" className=' selectbar-arrow ' width="10" height="20" viewBox="0 0 10 20" fill="none">
            <path d="M5.00005 0L9.33018 7.5H0.669922L5.00005 0Z" fill="#D9D9D9"/>
            <path d="M5.00005 19.5L9.33018 12H0.669922L5.00005 19.5Z" fill="#D9D9D9"/>
          </svg>
        </div>
        <div className='selectbar'>
          <p className='selectbar-text'>5</p>
          <svg xmlns="http://www.w3.org/2000/svg" className=' selectbar-arrow ' width="10" height="20" viewBox="0 0 10 20" fill="none">
            <path d="M5.00005 0L9.33018 7.5H0.669922L5.00005 0Z" fill="#D9D9D9"/>
            <path d="M5.00005 19.5L9.33018 12H0.669922L5.00005 19.5Z" fill="#D9D9D9"/>
          </svg>
        </div>
        <div className='selectbar'>
          <p className='selectbar-text'>0.025</p>
          <svg xmlns="http://www.w3.org/2000/svg" className=' selectbar-arrow ' width="10" height="20" viewBox="0 0 10 20" fill="none">
            <path d="M5.00005 0L9.33018 7.5H0.669922L5.00005 0Z" fill="#D9D9D9"/>
            <path d="M5.00005 19.5L9.33018 12H0.669922L5.00005 19.5Z" fill="#D9D9D9"/>
          </svg>
        </div>
        </div>
        </div>

      </div>
      </div>
      </div>

      </div>
      {/* footer button */}
      <div className=' flex flex-col justify-center lg:px-60 sm:mx-80 py-4'>
            <footer className=' footer lg:gap-40 sm:gap-8 grid grid-flow-col '>
                <button onClick={() => {alert('Are you sure to cancel?');}} className='footer-btn lg:px-7 sm:px-4 bg-white border border-Skyblue'>Cancel</button>
                <button onClick={() => {alert('Successfully save your data!');}} className='footer-btn lg:px-9 sm:px-6 bg-CTA-color'>Save</button>
            </footer>
      </div>
    </div>
  )
}

export default Troubleshoot