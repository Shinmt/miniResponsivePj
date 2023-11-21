/* eslint-disable no-unused-vars */
import React from 'react'

const Troubleshoot = () => {
  return (
    <div className='main'>
      {/* headlinebar */}
      <div className=' headline-base'>
        <div className=' headline-bar'>
          <div className='headline-text'>
            Troubleshoot
          </div>
          <div className='headline-X'>X</div>
        </div>
      </div>

      <div className=' flex flex-grow border border-b-slate-300'>
      
      {/* sidebar */}
      <div className='lg:w-[232px] sm:w-fit lg:h-[793px] bg-white border-r border-[#CDCDCD]'>
        <div className=' flex flex-row justify-normal lg:pt-[34px] sm:pt-7 items-baseline gap-x-1.5'>
          <text className=' w-[62px] pl-8 font-mono text-base sm:text-sm font-bold '>Reasons</text>
          <img src='/img/Q.png' className=' w-[15px] h-[15px] lg:ml-9 sm:ml-6' />
        </div>

        <div className=' flex flex-col lg:pt-[47px] sm:pt-7 '>
          <text className=' pl-8 font-bold '>Data</text>
          <div className=' pl-8 h-[50px] bg-[#09092D] my-[35px] text-justify'>
          <text className=' w-[116px] font-bold text-sm sm:text-xs text-white '>Model Parameters</text>
          </div>
          <text className=' pl-8 font-normal sm:text-sm sm:pr-2 text-black '>Out-of-Vocabulary Word</text>
        </div>
      </div>

      <div className='lg:pl-[46px] sm:pl-5 pt-[29px]'>

      {/* heading and paragraph */}
        <h1 className='text-black font-bold text-base '>Model Parameters</h1>
        <p className=' pt-3 font-normal text-sm sm:text-xs'>Following are model parameters that can cause duplicate embedding</p>

      {/* data box */}
      <div className=' lg:pt-20 lg:pl-52 sm:pt-12 sm:pl-28 h-[508px] '>
      <div className=' flex flex-col sm:flex-row'>

        {/*items left */}
        <div>
        <div className=' grid grid-row sm:relative text-left lg:w-[137px] h-full sm:w-auto lg:pt-1.5 sm:pt-0 pr-[38px] lg:text-sm sm:text-xs font-normal lg:gap-y-[72px] sm:gap-y-5'>
          <label>Vector Dimensionality</label>
          <label>Window Size</label>
          <label>Min Count</label>
          <label>Learning Rate</label>
          <label>Epochs</label>
        </div>
        </div>

        {/*items right */}
        <div>
        <div className=' grid grid-row justify-end lg:gap-y-[72px] sm:gap-y-5 relative'>
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
      <div className=' lg:ml-[600px] sm:ml-[320px] my-2.5 '>
      <div className=' w-[353px] h-[33px] lg:gap-40 sm:gap-8 grid grid-flow-col justify-center'>
        <button className='footer-btn lg:px-[29px] sm:px-4 bg-white border border-Skyblue'>Cancel</button>
        <button className='footer-btn lg:px-[23px] sm:px-3 justify-center bg-CTA-color'>Save</button>
      </div>
      </div>
    </div>
  )
}

export default Troubleshoot