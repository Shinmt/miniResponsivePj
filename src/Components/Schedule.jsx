/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';

const Schedule = () => {
  return (
    <div className='main'>
      {/* headlinebar */}
      <div className='headline-base'> 
            <div className=' headline-bar'>
                <div className='headline-text'>
              Schedule
          </div>
          <Link to='/'>
            <div className='headline-X'>X</div>
          </Link>
        </div>

      </div>

      {/* action button */}
      <div className=' flex flex-col lg:mr-20 sm:mr-4 lg:mt-4 sm:mt-2'>
        <div className=' grid grid-flow-col justify-end gap-[18px]'>
          <button onClick={() => {alert('Do you want to create new schedule?');}} className=' lg:w-[141px] sm:w-full lg:h-8 sm:h-5 sm:px-1 btn-text bg-CTA-color shadow-md '>New Schedule</button>                
        </div>
      </div>

      {/* table */}
      <div className=' relative lg:ml-20 sm:ml-7 lg:pt-4 sm:pt-2 mr-20'>
        <table className=' lg:table-auto sm:table-fixed bg-white border-collapse lg:w-full sm:w-[620px] lg:h-[260px] sm:h-[300px] mr-20 border border-gray-300'>
          <thead className=' h-[46px]'>
          <tr className=' bg-primary text-white font-mono text-sm font-bold'>
            <th>Year</th>
            <th>Month</th>
            <th>Day</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody className=' lg:w-[155px] sm:w-[50px] h-[35px]'>
          <tr className=' table-row border border-b-gray-300'>
            <td className=' lg:px-7 sm:px-3 '><text className='text-style bg-Year-rgba'>2023</text></td>
            <td className=' lg:px-7 sm:px-3'><text className='text-style bg-Month-rgba'>January</text></td>
            <td className=' lg:px-7 sm:px-3'><text className='text-style bg-Time-rgba'>12:00 AM</text></td>
            <td className=' lg:px-7 sm:px-3'><text className='text-style bg-Day-rgba'>Every 3 days</text></td>
            <td className=' lg:px-7 sm:px-3'>
              <div className=' flex flex-wrap justify-around'>
                <button onClick={() => {alert('Edit your data.');}}><img src='/img/Edit.png' /></button>
                <button onClick={() => {alert('Are you sure to DELETE this?')}}><img src='/img/Delete.png' /></button>
              </div>
            </td>
          </tr>
          <tr className='  table-row border border-b-gray-300 '>
            <td className=' lg:px-7 sm:px-3'><text className='text-style bg-Year-rgba'>From 2024 to 2027</text></td>
            <td className=' lg:px-7 sm:px-3'>
            <div className='flex lg:flex-row sm:flex-col lg:gap-x-[15px] sm:gap-y-1 '>
              <text className='text-style bg-Month-rgba'>February</text>
              <text className='text-style bg-Month-rgba'>March</text>
            </div>
            </td>
            <td className=' lg:px-7 sm:px-3'><text className='text-style bg-Day-rgba'>Monday</text></td>
            <td className=' lg:px-7 sm:px-3'>
            <div className='flex lg:flex-row sm:flex-col lg:gap-x-[15px] sm:gap-y-1 '>
              <text className='text-style bg-Time-rgba'>4:20 PM</text>
              <text className='text-style lg:w-auto bg-Time-rgba'>12:20 PM</text>
            </div>
            </td>
            <td className=' lg:px-7 sm:px-3'>
              <div className=' flex flex-wrap justify-around'>
              <button onClick={() => {alert('Edit your data.');}}><img src='/img/Edit.png' /></button>
              <button onClick={() => {alert('Are you sure to DELETE this?')}}><img src='/img/Delete.png' /></button>
              </div>
            </td>
          </tr>
          <tr className='  table-row border border-b-gray-300'>
            <td className=' lg:px-7 sm:px-3'><text className='text-style bg-Year-rgba'>Every 4 year</text></td>
            <td className=' lg:px-7 sm:px-3'><text className='text-style bg-Month-rgba'>February</text></td>
            <td className=' lg:px-7 sm:px-3'><text className='text-style bg-Day-rgba'>29</text></td>
            <td className=' lg:px-7 sm:px-3'><text className='text-style bg-Time-rgba'>Every 6 hour</text></td>
            <td className=' lg:px-7 sm:px-3'>
              <div className=' flex flex-wrap justify-around'>
              <button onClick={() => {alert('Edit your data.');}}><img src='/img/Edit.png' /></button>
              <button onClick={() => {alert('Are you sure to DELETE this?')}}><img src='/img/Delete.png' /></button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Schedule