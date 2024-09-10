import React, { useState } from 'react'
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from './DoctorAbout'
import Feedback from './Feedback'
import SidelPanel from './SidelPanel'

import { BASE_URL } from '../../config'
import useFetchData from '../../hooks/useFetchData'
import MyError from '../../components/error/MyError'
import HashLoader from 'react-spinners/HashLoader'
import { useParams } from 'react-router-dom'

function DoctoreDetails() {

  const [tab, settab] = useState('about')

  const { id } = useParams()

  const { data: doctor, loading, error } = useFetchData(`${BASE_URL}/api/doctors/${id}`)

  const {
    name,
    photo,
    ticketPrice,
    specialization,
    qualifications,
    experiences,
    bio,
    about,
    reviews,
    averageRating,
    totalRating,
    timeSlots,

  } = doctor
  return (
    <>
      <section>
        <div className="max-w-[1170px] px-5 mx-auto">

          {loading && <div className=' flex justify-center items-center mt-20'><HashLoader color='#0067FF' /></div>}
          {error && <MyError />}

          {!loading && !error && (
            <div className="grid md:grid-cols-3 gap-[50px]" >
              <div className="md:col-span-2">
                <div className="flex items-center gap-5">
                  <figure className=' max-w-[200px] max-h-[200px]'>
                    <img src={photo} alt="" className='w-full' />
                  </figure>
                  <div>
                    <span className=' bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                      {specialization}
                    </span>
                    <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>
                      {name}
                    </h3>
                    <div className='flex items-center gap-[6px]'>
                      <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                        <img src={starIcon} alt="" /> {averageRating}
                      </span>
                      <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                        ({totalRating})
                      </span>
                    </div>
                    <p className=' text__para text-[14px] leading-6 md:text-[15px] lg:mx-w-[390px]'>
                     {bio}
                    </p>
                  </div>

                </div>

                <div className='  mt-[50px] border-b  border-solid border-[#0066ff34]'>
                  <button
                    onClick={() => settab('about')}
                    className={`${tab === 'about' && ' border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => settab('feedback')}
                    className={`${tab === 'feedback' && ' border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                  >
                    Feedback
                  </button>
                </div>

                <div className="mt-[50px]">
                  {tab === 'about' && <DoctorAbout name={name} about={about} qualifications={qualifications} experiences={experiences} />}
                  {tab === 'feedback' && <Feedback reviews={reviews} totalRating={totalRating}  />}
                </div>
              </div>

              <div>
                <SidelPanel doctorId={doctor._id} ticketPrice={ticketPrice} timeSlots={timeSlots}/>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default DoctoreDetails