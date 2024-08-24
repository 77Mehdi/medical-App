import { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContexts'
import userImg from '../../assets/images/doctor-img01.png'
import MyBooking from './MyBooking'
import Profile from './Profile'
import useGetProfile from '../../hooks/useFetchData'
import { BASE_URL } from '../../config'
import HashLoader from 'react-spinners/HashLoader'
import MyError from '../../components/error/MyError'



function MyAccount() {

    const { dispatch } = useContext(AuthContext)
    const [tab, setTab] = useState('bookings')

    const {data:userData,loading,error}  = useGetProfile(`${BASE_URL}/api/users/profile/me`)

    // console.log(userData)

    const handelLogin = () => {
        dispatch({ type: "LOGOUT" });
    }
    return (
        <section>
            <div className=' max-w-[1170px] px-5 mx-auto'>

                {loading && !error && <div className=' flex justify-center '><HashLoader color='#0067FF'/></div>}

                { error && !loading  && <MyError errMsg={error}/>}

               {
                !loading && !error && (
                    <div className="grid md:grid-cols-3 gap-10">
                    <div className="pd-[50px] px-[30px] rounded-md">

                        <div className="flex items-center justify-center">
                            <figure className=' w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
                                <img src={userData.photo} alt="" className=' w-full rounded-full h-full' />
                            </figure>
                        </div>
                        <div className="text-center mt-4">
                            <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">{userData.name}</h3>
                            <p className="text-textColor text-[15px] leading-6 font-medium"> {userData.email}</p>
                            <p className="text-textColor text-[15px] leading-6 font-medium">Blood Type:
                                <span className=' ml-2 text-headingColor text-[22px] leading-8'>{userData.bloodType}</span>
                            </p>
                        </div>
                        <div className=' mt-[50px] md:mt-[100px]'>
                            <button
                                className=' w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'
                                onClick={handelLogin}
                            >Logout</button>
                            <button className=' w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>Delet account</button>
                        </div>


                    </div>

                    <div className=' md:col-span-2 md:px-[30px]'>
                        <div>
                            <button
                                onClick={() => setTab('bookings')}
                                className={` ${tab === 'bookings' && 'bg-primaryColor text-white font-normal'} mr-5 p-2 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                            >My Bookings
                            </button>
                            <button
                                onClick={() => setTab('settings')}
                                className={` ${tab === 'settings' && 'bg-primaryColor text-white font-normal'} p-2 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                            > Profile Setting
                            </button>
                        </div>

                        {tab === 'bookings' && <MyBooking />}
                        {tab === 'settings' && <Profile  user={userData}/>}

                    </div>
                </div>
                )
               }
            </div>
        </section>
    )
}

export default MyAccount

