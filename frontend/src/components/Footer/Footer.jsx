import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/01medical-logo.jpg"
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const socialLinks = [
  {
    path: "https://github.com/77Mehdi",
    icon: <AiFillGithub className=' group-hover:text-white w-4 h-5' />
  },
  {
    path: "https://www.instagram.com/s_m_o_k_e_yngt",
    icon: <AiOutlineInstagram className=' group-hover:text-white w-4 h-5' />
  },
]

const footerLink1 = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/',
    display: 'About us'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/',
    display: 'Blog'
  },

]

const footerLink2 = [
  {
    path: '/find-a-docter',
    display: 'Find a Doctore'
  },
  {
    path: '/',
    display: 'Request an Appointment'
  },
  {
    path: '/',
    display: 'Find a Location'
  },
  {
    path: '/',
    display: 'Get a Opinion'
  },

]

const footerLink3 = [
  {
    path: '/',
    display: 'Donate'
  },
  {
    path: '/contact',
    display: 'Contact us'
  },


]





function Footer() {

  const year = new Date().getFullYear();
  return (
    <footer className=' pb-16 pt-10'>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">

          <div>
            <div className="flex items-center">
              <img src={logo} alt="" className='rounded-[50px] h-24 w-24' />
              <span className='ml-4 mt-7 font-bold text-3xl'>Med<span className='text-red-400'>icare</span></span>
            </div>
            <p className=' text-[16px] leading-7 font-[400] text-textColor mt-4'>
              Copyright {year} developed by El Mehdi El Gheryb
            </p>
            <div className=' flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className=' w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className=' text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Our services
            </h2>
            <ul>
              {footerLink1.map((link, index) => (
                <li key={index} className='mb-3'>
                  <Link to={link.path} className=' hover:text-gray-600 font-[400] leading-7 text-[16px]'>{link.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className=' text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Our services
            </h2>
            <ul>
              {footerLink2.map((link, index) => (
                <li key={index} className='mb-3'>
                  <Link to={link.path} className=' hover:text-gray-600 font-[400] leading-7 text-[16px]'>{link.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>



    </footer>
  )
}

export default Footer