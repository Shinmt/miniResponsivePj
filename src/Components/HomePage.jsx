// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='main'>
        {/* headlinebar */}
        <div className=' headline-base'> 
            <div className='headline-bar'>
                <div className='headline-text'>
                    MySQL Configuration
                </div>
                <div className='headline-X'>X</div> 
            </div>

        </div>

        {/* linked button */}
        <div className=' flex flex-col mt-4 sm:mt-2 sm:mr-4'>
            <div className=' grid lg:grid-flow-col sm:grid-flow-row justify-end gap-4 sm:gap-8'>
                <Link to='/troubleshoot'>
                    <button className=' w-[141px] btn-text bg-white border border-CTA-color shadow-md'>Toubleshoot</button>
                </Link>
                <Link to='/schedule'>
                    <button className=' w-[141px] btn-text bg-CTA-color shadow-md '>Show Schedule</button>                
                </Link>
            </div>
        </div>

        {/*box */}
        <div className='sm:mr-16 sm:pt-8'>
        <div className='flex flex-col lg:w-full sm:w-[977px] h-[581px] '>
            {/* left items */}
            <div className=' grid grid-flow-row absolute text-left lg:ml-[471px] sm:ml-10 mb-40 sm:mb-5 '>
                <label className='label-text'>Source Name*</label>
                <label className='label-text'>Source Type*</label>
                <label className='label-text'>Engine*</label>
                <label className='label-text'>Access*</label>
                <label className='label-text'>Location*</label>
                <label className='label-text pt-5'>Authentication*</label>
                <label className='label-text'>Database Name*</label>
            </div>
            
            {/* right items */}
            <div className=' grid grid-flow-row static text-left lg:ml-[696px] sm:ml-[320px] mb-40 sm:mb-5'>
                <text className='input-text lg:w-[640px] sm:w-[280px]'>Flower Dataset</text>
                <text className='w-[26px] text-sm font-normal mb-[50px]'>SQL</text>
                <text className='w-[26px] text-sm font-normal mb-[50px]'>MySQL</text>
                <div className=' grid grid-flow-col h-[65px]'>
                    <text className='input-text lg:w-[640px] lg:h-[35px] sm:w-[280px] sm:h-auto'>Tenant
                    <svg className='float-right mt-2.5' xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 15 9" fill="none">
                    <path d="M1 1L7.5 8L14 1" stroke="#09092D" strokeLinecap="round"/>
                    </svg>
                    </text>
                </div>
                <div className=' lg:w-[640px] sm:w-[280px] grid grid-cols-2 lg:gap-[14px] sm:gap-5'>
                <div className=' flex flex-col'>
                    <h4 className=' font-mono text-sm font-bold text-[#868686]'>host</h4>
                    <text className=' lg:w-[312px] sm:w-[130px] px-4 font-normal text-sm bg-[#EAF0F6] pt-[7px] pb-1.5 mb-[50px] rounded-[3px]'>10.100.100.84</text>
                </div>
                <div className=' flex flex-col'>
                    <h4 className=' font-mono text-sm font-bold text-[#868686]'>Port</h4>
                    <text className='lg:w-[312px] sm:w-[130px] px-4 font-normal text-sm bg-[#EAF0F6] pt-[7px] pb-1.5 mb-[50px] rounded-[3px]'>1107</text>
                </div>
                </div>
                <div className=' lg:w-[640px] sm:w-[280px] grid grid-cols-2 lg:gap-[14px] sm:gap-5'>
                <div className=' flex flex-col'>
                    <h4 className=' font-mono text-sm font-bold text-[#868686]'>User Name</h4>
                    <text className=' lg:w-[312px] sm:w-[130px] px-4 font-normal text-sm bg-[#EAF0F6] pt-[7px] pb-1.5 mb-[50px] rounded-[3px]'>Anna</text>
                </div>
                <div className=' flex flex-col'>
                    <h4 className=' font-mono text-sm font-bold text-[#868686]'>Password</h4>
                    <text className='lg:w-[312px] sm:w-[130px] px-4 font-normal text-sm bg-[#EAF0F6] pt-[7px] pb-1.5 mb-[50px] rounded-[3px]'>**********
                    <svg className='float-right lg:mt-1.5 sm:mt-1 lg:mr-1' xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none">
                            <path d="M6 0C3.27273 0 0.943636 1.866 0 4.5C0.943636 7.134 3.27273 9 6 9C8.72727 9 11.0564 7.134 12 4.5C11.0564 1.866 8.72727
                            0 6 0ZM6 7.5C4.49455 7.5 3.27273 6.156 3.27273 4.5C3.27273 2.844 4.49455 1.5 6 1.5C7.50545 1.5 8.72727 2.844 8.72727 4.5C8.72727 6.156 7.50545 7.5 6 7.5ZM6 2.7C5.09455 2.7 4.36364 3.504 4.36364 4.5C4.36364 5.496 5.09455 6.3 6 6.3C6.90545 6.3 7.63636 5.496 7.63636 4.5C7.63636 3.504 6.90545 2.7 6 2.7Z" fill="black"/>
                    </svg>
                    </text>
                </div>
                </div>
                <text className='input-text lg:w-[640px] sm:w-[280px] h-[35px]'>flower_dataset</text>
            </div>

        </div>
        </div>
        {/* footer button */}
        <div className='flex flex-col mb-1'>
            <footer className=' footer grid grid-flow-col justify-center lg:gap-40 sm:gap-20'>
                <button className='footer-btn lg:px-[29px] sm:px-4 bg-white border border-Skyblue'>Cancel</button>
                <button className='footer-btn lg:px-[23px] sm:px-3 bg-CTA-color'>Continue</button>
            </footer>
        </div>
    </div>
  )
}

export default HomePage