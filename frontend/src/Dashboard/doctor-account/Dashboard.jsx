import React, { useState } from 'react'
import MyError from '../../components/error/MyError'
import useGetProfile from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import HashLoader from 'react-spinners/HashLoader'
import Tabs from './Tabs'
import { MdError } from 'react-icons/md'
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from '../../pages/Doctors/DoctorAbout'
import Profile from './D-Profile'

function Dashboard() {


  const { data, loading, error } = useGetProfile(`${BASE_URL}/api/doctors/profile/me`)

   //console.log("first", data)

  const [tab, setTab] = useState('overview')

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto' >
        {
          loading && !error && <div className=' flex justify-center items-center mt-20'><HashLoader color='#0067FF' /></div>
        }
        {
          error && loading && <MyError />
        }
        {
          !loading && !error && (

            <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
              <Tabs tab={tab} setTab={setTab} />

              <div className="lg:col-span-2">
                {
                  data.isApproved === 'pending' && (
                    <div className=' flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg'>

                      <MdError className=' flex-shrink-0 w-5 h-5' />
                      <span className=' sr-only'>Info</span>
                      <div className="ml-3 text-sm font-medium">
                        To get approval please complete your profile. We&apos;ll review manuall and approve eithin 3days
                      </div>

                    </div>
                  )
                }

                <div className=' mt-8'>
                  {
                    tab === 'overview' && (
                      <div>
                        <div className="flex items-center gap-4 mb-10">
                          <figure className=' max-w-[200px] max-h-[200px]'>
                            <img src={data?.photo} alt="" className=' w-full' />
                          </figure>
                          <div>
                            <span className=' bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold'
                            > Surgeon
                            </span>
                            <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
                              Mouad Mnbia
                            </h3>
                            <div className="flex items-center gap-[6px]">
                              <span className=' flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                                <img src={starIcon} alt="" />
                                4.9
                              </span>
                              <span className='  text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                                (1580)
                              </span>
                            </div>
                            <p className="text__para font-[15px] lg:max-w-[390px] leading-6">
                              doctor bio
                            </p>
                          </div>
                        </div>
                        <DoctorAbout
                          name={data.name}
                          about={data.about}
                          qualifications={data.qualifications}
                          experiences={data.experiences}
                        />
                      </div>
                    )
                  }
                  {tab === 'appointments' && <div>appointments</div>}
                  {tab === 'settings' && <Profile/>}
                </div>

              </div>

            </div>
          )
        }
      </div>
    </section>
  )
}

export default Dashboard