import React from 'react'

function SidelPanel() {
  return (
    <div className=' shadow-panelShadow p-3 lg:p-5 rounded-md'>
        <div className="flex items-center justify-between">
            <p className=' text__para mt-0 font-semibold'>Ticket Price </p>
            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold"> 1500 DH</span>
        </div>
        <div className="mt-[30px]">
            <p className="text__para mt-0 font-semibold text-headingColor">Availabel Time Slots:</p>
            <ul className="mt-3">
                <li className="flex items-center justify-between mb-2">
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>Monday</p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>8:00 AM - 12:00 PM</p>
                </li>
                <li className="flex items-center justify-between mb-2">
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>Tuesday</p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>8:30 AM - 6:00 PM</p>
                </li>
                <li className="flex items-center justify-between mb-2">
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>Wednesday</p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>8:30 AM - 4:00 PM</p>
                </li>
                <li className="flex items-center justify-between mb-2">
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>Thursday</p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>8:00 AM - 12:00 PM</p>
                </li>
                <li className="flex items-center justify-between mb-2">
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>Friday</p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>7:00 AM - 1:00 PM</p>
                </li>
              
            </ul>
        </div>
        <button className=' btn px-2 w-full rounded-md'>Book Appointment</button>
    </div>
  )
}

export default SidelPanel