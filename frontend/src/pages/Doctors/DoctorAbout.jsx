import React from 'react'
import { formateDate } from '../../utils/formateData'

function DoctorAbout({name ,about ,qualifications ,experiences}) {
    return (
        <div>
            <div>
                <h3 className=' text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                    About of
                    <span className=' text-irisBlueColor font-bold text-[24px] leading-9'>Mouade mnbia</span>
                </h3>
                <p className=' text__para'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                    omnis quidem sed repellat laudantium, tempore soluta pariatur perspiciatis
                    hic corporis porro possimus, debitis mollitia rem ullam magni reiciendis minus nobis
                    molestias? Excepturi molestias inventore perspiciatis consectetur suscipit vel? Pariatur
                    eius vitae atque dolorum eligendi officia, voluptate eum? Soluta, aspernatur vitae!
                </p>
            </div>

            <div className="mt-12">
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold '>Education</h3>
                <ul className=' pt-4 md:p-5'>
                    <li className=' flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                        <div>
                            <span className=' text-irisBlueColor text-[15px] leading-6 font-semibold'>
                                {formateDate('2020-09-20')}
                            </span>
                            <p className=' text-[16px] leading-6 font-medium text-textColor'>PHD in Suigron</p>

                        </div>
                        <p className=' text-[16px] leading-6 font-medium text-textColor'> Morocon Hospital, Marackech </p>
                    </li>

                    <li className=' flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                        <div>
                            <span className=' text-irisBlueColor text-[15px] leading-6 font-semibold'>
                                {formateDate('2022-07-13')}
                            </span>
                            <p className=' text-[16px] leading-6 font-medium text-textColor'> Bachelor of Surgery</p>

                        </div>
                        <p className=' text-[16px] leading-6 font-medium text-textColor'>France Hospital, Pare </p>
                    </li>
                </ul>
            </div>

            <div className="mt-12">
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold '>Experience</h3>
                <ul className=' grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                    <li className=' p-4 rounded bg-[#f6fea4]'>
                        <span className=' text-yellowColor text-[15px] leading-6 font-semibold'>
                            {formateDate('2022-02-12')} - {formateDate('2024-03-15')}
                        </span>
                        <p className=' text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
                        <p className="text-[14px] leading-6 font-medium text-textColor">Specialists in heart valve repair </p>
                    </li>

                    <li className="p-4 rounded bg-[#f6fea4]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {formateDate('2019-01-05')} - {formateDate('2021-11-30')}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">Lead Cardiologist</p>
                        <p className="text-[14px] leading-6 font-medium text-textColor">Expert in cardiac catheterization procedures</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DoctorAbout