import React from 'react'
import aboutImag from '../../assets/images/about-img.jpg'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'



function About() {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row" >

                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                        <img src={aboutImag} alt="" className=' w-[500px] rounded-lg ' />
                        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                            <img src={aboutCardImg} alt="" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className="heading">Proud to be one of the nations best</h2>
                        <p className=' text__para'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto non obcaecati
                            fugit voluptatum ipsa perspiciatis quas placeat eius distinctio? Architecto, voluptate ipsum
                        </p>
                        <p className="text__para mt-[30px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis optio eos aut
                            architecto. Sapiente consectetur accusamus sequi fugiat ipsa, iure, aspernatur at ullam impedit,
                            temporibus suscipit dolore enim cumque nam rem quis!
                        </p>
                        <Link to='/' >
                            <button className=' btn'>learn more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About