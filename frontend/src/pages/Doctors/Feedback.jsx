import React, { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateData'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'


function Feedback({ reviews, totalRating }) {

  const [showFeedback, sethowFeedback] = useState(false)
  return (
    <>
      <div className='mb-[50px]'>
        <h4 className=' text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>All reviews ({totalRating})</h4>

        {reviews?.map((reviw,index) => (
          <div key={index} className=' flex justify-between gap-10 mb-[30px]'>
            <div className="flex gap-3">

              <figure className=' w-10 h-10 rounded-full'>
                <img src={reviw?.user?.photo} alt="" className=' w-full' />
              </figure>

              <div>
                <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
                  {reviw?.user?.name}
                </h5>
                <p className=' text-[14px] leading-6 text-textColor'>{formateDate(reviw?.createdAt)}</p>
                <p className=' text__para mt-3 font-medium text-[15px]'>
                  {reviw?.reviewText}
                </p>
              </div>
            </div>

            <div className=' flex gap-1'>
              {[...Array(reviw?.rating).keys()].map((_, index) => (
                <AiFillStar key={index} color='#0067FF' />
              ))}
            </div>

          </div>
        ))
        }
      </div>

      {!showFeedback && <div className=' text-center'>
        <button className=' btn' onClick={() => sethowFeedback(true)}>Give Feedback</button>
      </div>
      }

      {
        showFeedback && <FeedbackForm />
      }
    </>
  )
}

export default Feedback