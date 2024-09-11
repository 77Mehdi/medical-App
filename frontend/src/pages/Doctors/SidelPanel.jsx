import React from 'react'
import {BASE_URL, token} from '../../config'
import {toast} from 'react-toastify'


function SidelPanel({doctorId,ticketPrice,timeSlots}) {
    

    const bookingHandler = async()=>{
          
        try {
             
            const res =await fetch(`${BASE_URL}/api/bookings/checkout-session/${doctorId}`,{
                method:'POST',
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })

            const data = await res.json()

            if(!res.ok){
                throw new Error(data.msg + 'Pleass try again')
            }

            if(data.session.url){
                window.location.href = data.session.url
            }

        } catch (err) {
            
            toast.error(err.message)
        }
    }


  return (
    <div className=' shadow-panelShadow p-3 lg:p-5 rounded-md'>
        <div className="flex items-center justify-between">
            <p className=' text__para mt-0 font-semibold'>Ticket Price </p>
            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold"> {ticketPrice} DH</span>
        </div>
        <div className="mt-[30px]">
            <p className="text__para mt-0 font-semibold text-headingColor">Availabel Time Slots:</p>
            <ul className="mt-3">
                {timeSlots?.map((item,index)=>(
                   <li className="flex items-center justify-between mb-2" key={index}>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                        </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        {item.startingTime} AM - {item.endingTime} PM
                        </p>
                </li> 
                ))}
                
                
              
            </ul>
        </div>
        <button onClick={bookingHandler} className=' btn px-2 w-full rounded-md'>Book Appointment</button>
    </div>
  )
}

export default SidelPanel