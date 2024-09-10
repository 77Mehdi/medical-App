import React, { useEffect, useState } from 'react'
// import { doctors } from '../../assets/data/doctors'
import DoctorCard from '../../components/doctors/DoctorCard'
import Testimonial from '../../components/testimonail/testimonil'

import { BASE_URL } from '../../config.js'
import useFetchData from '../../hooks/useFetchData'
import MyError from '../../components/error/MyError'
import HashLoader from 'react-spinners/HashLoader'





function Doctors() {


  const [query, setQuery] = useState('')
  const [debounceQuery,setDebounceQuery] = useState('')

  const handelSearch =()=>{
    setQuery(query.trim())

    console.log("first")
  }
  
  useEffect(()=>{
     
      const timeaut = setTimeout(()=>{
        setDebounceQuery(query)
      },700) 
      
      return ()=> clearTimeout(timeaut)

  },[query])
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/api/doctors?query=${debounceQuery}`)


  return (
    <>
      <section className=' '>
        <div className="container text-center">
          <h2 className=' heading'>Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className=' py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
              placeholder='Search doctor by name or specification'
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button
              onClick={handelSearch}
              className=' btn mt-0 rounded-[0px] rounded-r-md'>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading && <div className=' flex justify-center items-center mt-20'><HashLoader color='#0067FF' /></div>}
          {error && <MyError />}

          {!loading && !error && (
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5 '>
              {
                doctors.map(doctor => (
                  <DoctorCard key={doctor._id} doctor={doctor} />
                ))
              }
            </div>)}

          

        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> what our patient say </h2>
            <p className="text__para text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, fugiat.
              Tempore tenetur explicabo rem trbvbttb car.
            </p>
          </div>
          <Testimonial /> 

        </div>
      </section>
    </>
  )
}

export default Doctors