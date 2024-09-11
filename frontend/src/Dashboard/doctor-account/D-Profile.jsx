import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import uolodImgeToCloudinaray from '../../utils/uolodCloudinaray'
import { BASE_URL, token } from '../../config'
import { toast } from 'react-toastify'



function Profile({ doctorData }) {


  const [formData, setformData] = useState({
    name: '',
    phone: '',
    bio: '',
    gender: '',
    specialization: '',
    ticketPrice: null,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: '',
    photo: null,
  })

  useEffect(() => {
    setformData({
      name: doctorData?.name,
      email: doctorData?.email,
      phone: doctorData?.phone,
      bio: doctorData?.bio,
      gender: doctorData?.gender,
      specialization: doctorData?.specialization,
      ticketPrice: doctorData?.ticketPrice,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      timeSlots: doctorData?.timeSlots,
      about: doctorData?.about,
      photo: doctorData?.photo,
    })
  }, [doctorData])


  const handelInputChange = (e) => {

    setformData({ ...formData, [e.target.name]: e.target.value })
  }

  

  const handelFilechange = async (e) => {

    const file = e.target.files[0];
    const data = await uolodImgeToCloudinaray(file);

    setformData({ ...formData, photo: data?.url });
  }


  const updateProfileHandeler = async (e) => {
    e.preventDefault()
    // console.log("first",formData.ticketPrice)

    try {

      const res = await fetch(`${BASE_URL}/api/doctors/${doctorData._id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      const result = await res.json()

      if (!res.ok) {
        throw Error(result.message)
      }

      toast.success(result.msg)
      window.scrollTo({ top: 0, behavior: 'smooth' });
      


    } catch (err) {
      toast.error(err.message)
    }
  }

  // ################# inpute function ################
  const addItem = (key, item) => {

    setformData(prev => ({ ...prev, [key]: [...prev[key], item] }))
  }

  const handeleReusableInputChangeFunc = (key, index, e) => {

    const { name, value } = e.target
    setformData(prev => {
      const updateItems = [...prev[key]]

      updateItems[index][name] = value

      return {
        ...prev,
        [key]: updateItems,
      }
    })
  }

  const deleteItem = (key, index) => {
    setformData(prev => ({ ...prev, [key]: prev[key].filter((_, i) => i != index) }))
  }

  // ################# Qualifications  function #############################
  const addQualification = (e) => {
    e.preventDefault()

    addItem('qualifications', {
      startingDate: '',
      endingDate: '',
      university: '',
      degree: '',
    })
  }


  const handeleQualificationChange = (e, index) => {

    handeleReusableInputChangeFunc('qualifications', index, e)
  }

  const deletQualification = (e, index) => {
    e.preventDefault()

    deleteItem('qualifications', index)
  }

  // ###################  Experience function ###########################
  const addExperience = (e) => {
    e.preventDefault()

    addItem('experiences', {
      startingDate: '',
      endingDate: '',
      position: '',
      hospital: '',
    })
  }
  //console.log("first",formData)

  const handeleExperienceChange = (e, index) => {

    handeleReusableInputChangeFunc('experiences', index, e)
  }

  const deletExperience = (e, index) => {
    e.preventDefault()

    deleteItem('experiences', index)
  }

  // ###################  TimeSlots function ###########################

  const addTimeSlots = (e) => {
    e.preventDefault()

    addItem('timeSlots', {
      day: '',
      endingTime: '',
      startingTime: '',
    })
  }
  //console.log("first",formData)

  const handeleTimeSlotsChange = (e, index) => {

    handeleReusableInputChangeFunc('timeSlots', index, e)
  }

  const deletTimeSlots = (e, index) => {
    e.preventDefault()

    deleteItem('timeSlots', index)
  }


  return (
    <div>
      <h2 className="text-headingColor  font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>

      <form >
        <div className=' mb-5'>
          <p className=' form__label'>Name*</p>
          <input
            type="text"
            name='name'
            value={formData.name}
            onChange={handelInputChange}
            placeholder='Full Name'
            className=' form__input'
          />
        </div>
        <div className=' mb-5'>
          <p className=' form__label'>Email*</p>
          <input
            type="email"
            name='email'
            value={doctorData.email}
            placeholder='Email'
            readOnly
            aria-readonly
            disabled="true"
            className=' form__input'
          />
        </div>
        <div className=' mb-5'>
          <p className=' form__label'>Phone*</p>
          <input
            type="number"
            name='phone'
            value={formData.phone}
            onChange={handelInputChange}
            placeholder='phone number'
            className=' form__input'
          />
        </div>
        <div className=' mb-5'>
          <p className=' form__label'>Bio*</p>
          <input
            type="text"
            name='bio'
            value={formData.bio}
            onChange={handelInputChange}
            placeholder='Bio'
            className=' form__input'
            maxLength={100}
          />
        </div>
        <div className=' mb-5'>
          <div className="grid grid-cols-3 gap-5 mb-[30px]">

            <div>
              <p className="form__label">Gender*</p>
              <select name="gender" value={formData.gender} onChange={handelInputChange} className=' form__input py-3.5'>
                <option value="">select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <p className="form__label">Specialization*</p>
              <select name="specialization" value={formData.specialization} onChange={handelInputChange} className=' form__input py-3.5'>
                <option value="">select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>
            <div >
              <p className=' form_label mb-3'>Ticket Price*</p>
              <input type="number" placeholder='100' name='ticketPrice' value={formData.ticketPrice} onChange={handelInputChange}  className=' form__input' />
            </div>

          </div>
        </div>
        <div className=' mb-5'>
          <p className=' form__label'>Qualifications*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className=' grid grid-cols-2 gap-5'>
                  <div>
                    <p className='form__label'>Starting Date*</p>
                    <input
                      type="date"
                      name='startingDate'
                      value={item.startingDate}
                      className='form__input'
                      onChange={e => handeleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className='form__label'>Ending Date*</p>
                    <input
                      type="date"
                      name='endingDate'
                      value={item.endingDate}
                      className='form__input'
                      onChange={e => handeleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className=' grid grid-cols-2 gap-5 mt-5'>
                  <div>
                    <p className='form__label'>Degree*</p>
                    <input
                      type="text"
                      name='degree'
                      value={item.degree}
                      className='form__input'
                      onChange={e => handeleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className='form__label'>University*</p>
                    <input
                      type="text"
                      name='university'
                      value={item.university}
                      className='form__input'
                      onChange={e => handeleQualificationChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  onClick={e => deletQualification(e, index)}
                  className=' bg-red-600 p-2 rounded-full text-[18px] mt-2 mb-[30px] cursor-pointer'>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button onClick={addQualification} className=' bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>
            Add Qualification
          </button>
        </div>
        <div className=' mb-5'>
          <p className=' form__label'>Experiences*</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className=' grid grid-cols-2 gap-5'>
                  <div>
                    <p className='form__label'>Starting Date*</p>
                    <input
                      type="date"
                      name='startingDate'
                      value={item.startingDate}
                      className='form__input'
                      onChange={e => (handeleExperienceChange(e, index))}
                    />
                  </div>
                  <div>
                    <p className='form__label'>Ending Date*</p>
                    <input
                      type="date"
                      name='endingDate'
                      value={item.endingDate}
                      className='form__input'
                      onChange={e => (handeleExperienceChange(e, index))}
                    />
                  </div>
                </div>
                <div className=' grid grid-cols-2 gap-5 mt-5'>
                  <div>
                    <p className='form__label'>Position*</p>
                    <input
                      type="text"
                      name='position'
                      value={item.position}
                      className='form__input'
                      onChange={e => (handeleExperienceChange(e, index))}
                    />
                  </div>
                  <div>
                    <p className='form__label'>Hospital*</p>
                    <input
                      type="text"
                      name='hospital'
                      value={item.hospital}
                      className='form__input'
                      onChange={e => (handeleExperienceChange(e, index))}
                    />
                  </div>
                </div>

                <button
                  onClick={e => deletExperience(e, index)}
                  className=' bg-red-600 p-2 rounded-full text-[18px] mt-2 mb-[30px] cursor-pointer'>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addExperience}
            className=' bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>
            Add Experience
          </button>
        </div>
        <div className=' mb-5'>
          <p className=' form__label'>Time Slots*</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className=' grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5'>
                  <div>
                    <p className='form__label'>Day*</p>
                    <select
                      name="day"
                      value={item.day}
                      className="form__input py-3.5"
                      onChange={e => handeleTimeSlotsChange(e, index)}
                    >
                      <option value="">Select a day</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                      <option value="saturday">Saturday</option>
                    </select>
                  </div>
                  <div>
                    <p className='form__label'>Starting Time*</p>
                    <input
                      type="time"
                      name='startingTime'
                      value={item.startingTime}
                      className='form__input'
                      onChange={e => handeleTimeSlotsChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className='form__label'>Ending Time*</p>
                    <input
                      type="time"
                      name='endingTime'
                      value={item.endingTime}
                      className='form__input'
                      onChange={e => handeleTimeSlotsChange(e, index)}
                    />
                  </div>
                  <div className=' flex items-center'>
                    <button
                      onClick={e => deletTimeSlots(e, index)}
                      className=' bg-red-600 p-2 rounded-full text-[18px] mt-6  cursor-pointer'>
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>



              </div>
            </div>
          ))}

          <button
            onClick={addTimeSlots}
            className=' bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>
            Add TimeSlot
          </button>
        </div>
        <div className="mb-5">
          <p className='form__label'>About*</p>
          <textarea
            name="about"
            rows={5}
            value={formData.about}
            placeholder=' Write about you '
            onChange={handelInputChange}
            className=' form__input'
          ></textarea>
        </div>
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center '>
            <img src={formData.photo} alt="" className=' w-full rounded-full' />
          </figure>}

          <div className=' relative w-[130px] h-[50px]'>
            <input
              type="file"
              name="photo"
              id="customFile"
              onChange={handelFilechange}
              accept=' .jpg, .png'
              className=' absolute top-0 w-full h-full opacity-0 cursor-pointer'
            />
            <label
              htmlFor="customFile"
              className=' absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg  truncate cursor-pointer'
            >Upload Photo
            </label>
          </div>
        </div>
        <div className="mt-7">
          <button
            type='submit'
            onClick={updateProfileHandeler}
            className=' bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg'>Update Profile</button>
        </div>
      </form>
    </div>
  )
}

export default Profile


