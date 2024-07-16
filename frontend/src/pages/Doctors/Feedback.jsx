import React, { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateData'
import {AiFillStar} from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'


function Feedback() {
  
  const [showFeedback,sethowFeedback] =useState(false)
  return (
   <>
    <div className='mb-[50px]'>
      <h4 className=' text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>All reviews (582)</h4>
      <div className=' flex justify-between gap-10 mb-[30px]'>
        <div className="flex gap-3">

          <figure className=' w-10 h-10 rounded-full'>
            <img src={avatar} alt="" className=' w-full' />
          </figure>

          <div>
            <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
              Mehdi
            </h5>
            <p className=' text-[14px] leading-6 text-textColor'>{formateDate("07-15-2024")}</p>
            <p className=' text__para mt-3 font-medium text-[15px]'>
              Good services, highly recommended 👍
            </p>
          </div>
        </div>

        <div className=' flex gap-1'>
          {[...Array(5).keys()].map((_, index) => (
            <AiFillStar key={index} color='#0067FF' />
          ))}
        </div>

      </div>
    </div>

   {!showFeedback &&  <div className=' text-center'>
      <button className=' btn' onClick={()=>sethowFeedback(true)}>Give Feedback</button>
    </div>
    }

    {
      showFeedback && <FeedbackForm/>
    }
   </>
  )
}

export default Feedback