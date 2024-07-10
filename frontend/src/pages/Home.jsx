import React from 'react'
import heroImgP from '../assets/images/heroo-pexels.jpg'
import heroImg2 from '../assets/images/hero-img02.png'
import heroImg1 from '../assets/images/hero03-pix.jpg'

function Home() {
  return (
    <>
      <section className=' hero__section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">

            <div>
              <div className="lg:w-[570px]">
                <h1 className=" text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">We help you live your life in the best way , and health , longer life. </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis esse laudantium sint. Esse inventore eos quod repellat ipsum unde vitae,
                  eligendi debitis corrupti minus eaque explicabo, fuga quam a blanditiis nesciunt.
                  Ullam nostrum suscipit cum aliquam voluptates blanditiis cupiditate, hic animi maxime
                  earum quam omnis repellat quis doloribus placeat id.
                </p>
                <button className='btn'>Request an Appointment</button>
              </div>

              <div className=' mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className=' text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>37+</h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div>
                  <h2 className=' text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>20+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className="text__para">Clinic Location</p>
                </div>
                <div>
                  <h2 className=' text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>

            </div>
            {/* ########################## */}
            <div className=' flex gap-[30px] justify-end'>
              <div>
                <img src={heroImgP} alt="" className=' w-[450px] rounded-md ' />
              </div>
              <div>
                <img src={heroImg2} alt="" className=' mb-[30px]' />
                <img src={heroImg1} alt="" className=' w-[500px] rounded-lg' />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home