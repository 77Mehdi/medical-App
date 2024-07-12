import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import bordImg from '../../assets/images/patirn2.jpg'
import patientAvatar3 from '../../assets/images/patirn3.jpg';
import { HiStar } from 'react-icons/hi';

function Testimonial() {
    return (
        <div className='mt-[30px] lg:mt-[55px]'>
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="Patient Avatar" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                   rabia rahi
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            " I have taken medical service from them. they treat so well
                            and they are provding the best medical services."
                        </p>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={bordImg} alt="Patient Avatar" className=' w-14 rounded' />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                    charlse kkkk
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            " Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ratione quas perferendis dolorum."
                        </p>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="Patient Avatar" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                    El Mehdi El Gheryb
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            " I have taken medical service from them. they treat so well
                            and they are provding the best medical services."
                        </p>


                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar3} alt="Patient Avatar" className=' w-14 rounded' />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                    emly emanwill
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            " great expirins on this midical service thank you all "
                        </p>


                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="Patient Avatar" />
                            <div>
                                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                    Mouad menbia
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                    <HiStar className=' text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className=' text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            " I have taken medical service from them. they treat so well
                            and they are provding the best medical services."
                        </p>


                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Testimonial;
