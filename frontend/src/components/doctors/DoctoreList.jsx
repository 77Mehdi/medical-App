import React from 'react'
// import { doctors } from '../../assets/data/doctors'
import DoctorCard from './DoctorCard'

import { BASE_URL } from '../../config'
import useFetchData from '../../hooks/useFetchData'
import MyError from '../error/MyError'
import HashLoader from 'react-spinners/HashLoader'

function DoctoreList() {
 

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/api/doctors`)
  

  return (
    <>
      {loading && <div className=' flex justify-center items-center mt-20'><HashLoader color='#0067FF' /></div>}
      {error && <MyError />}

      {!loading && !error && (
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
          {
            doctors.map(doctor => (
              <DoctorCard key={doctor._id} doctor={doctor}  />
            ))
          }
        </div>)}
    </>
  )
}

export default DoctoreList