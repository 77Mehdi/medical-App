import React from 'react'
import userImg from '../../assets/images/doctor-img01.png'


function MyAccount() {
    return (
        <div className=' max-w-[1170px] px-5 mx-auto'>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="pd-[50px] px-[30px] rounded-md">

                    <div className="flex items-center justify-center">
                        <figure className=' w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
                            <img src={userImg} alt="" className=' w-full rounded-full h-full' />
                        </figure>
                    </div>
                    <div className="text-center mt-4">
                        <h3 className="text-[18px] leading-[30px] text-headingColor font-bold"> Mehdi Gheryb</h3>
                        <p className="text-textColor text-[15px] leading-6 font-medium"> mehdi@gmial.com</p>
                        <p className="text-textColor text-[15px] leading-6 font-medium">Blood Type:
                            <span className=' ml-2 text-headingColor text-[22px] leading-8'>A+</span>
                        </p>
                    </div>
                    <div className=' mt-[50px] md:mt-[100px]'>
                        <button className=' w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'>Logout</button>
                        <button className=' w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>Delet account</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default MyAccount

