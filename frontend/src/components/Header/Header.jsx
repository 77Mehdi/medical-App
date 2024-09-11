import React from 'react'
import { useEffect, useRef, useContext } from 'react'
import logo from "../../assets/images/01medical-logo.jpg"
import userImg from '../../assets/images/avatar-icon.png'
import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { AuthContext } from '../../context/authContexts'


const navLink = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },

]




function Header() {

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(AuthContext)
  // console.log(user)

  const handleStixkyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStixkyHeader();

    return () => window.removeEventListener('scroll', handleStixkyHeader)
  })


  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')


  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className=' flex cursor-pointer'>
            <img src={logo} alt="" className=' rounded-[50px] h-24 w-24 hidden sm:block ' /><span className='mt-7 font-bold text-3xl'>Med<span className=' text-red-400'>icare</span></span>
          </div>
          <div className=' navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className=' menu flex items-center gap-[2.7rem]'>
              {
                navLink.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item.path}
                      className={navClass => navClass.isActive
                        ? " text-primaryColor text-[16px] leading-7 font-[600]"
                        : " text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                      } >{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className=' flex items-center gap-4 '>

            {token && user ? (<div className=''>
              <Link to={`${role==='doctor'?'/doctors/profile/me':'/users/profile/me'}`}>
                <figure className=' w-[35px] h-[35px] rounded-full cursor-pointer flex'>
                  <img src={user?.photo} alt="" className=' w-full rounded-full' />
                  {/* <h2 className='  flex justify-center items-center  px-4'>{user?.name}</h2> */}
                </figure>
                
              </Link>
            </div>) :
              (<Link to='/login'>
                <button className=' bg-primaryColor py-2 px-6 text-white font-[600] h-[40px] flex items-center  justify-center rounded-[50px]'>
                  Login
                </button>
              </Link>)
            }

            <span className=' md:hidden' onClick={toggleMenu}>
              <BiMenu className=' w-6 h-6 cursor-pointer' />
            </span>

          </div>

        </div>
      </div>
    </header>
  )
}

export default Header