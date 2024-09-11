import { useContext, useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { AuthContext } from '../../context/authContexts'
import { useNavigate } from 'react-router-dom'

function Tabs({ tab, setTab }) {

  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()


  const handelLogin = () => {

    dispatch({ type: "LOGOUT" });
    navigate('/');
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <span className=' lg:hidden' onClick={toggleMenu}>
        <BiMenu className=' w-6 h-6 cursor-pointer' />
      </span>
      {isMenuOpen && (
        <div className='  lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounnded-md'>

          <button
            onClick={() => setTab('overview')}
            className={`${tab === 'overview'
              ? ' bg-indigo-100 text-primaryColor'
              : ' bg-transparent text-headingColor'
              } w-full btn mt-0 rounded-md`}
          > Overview
          </button>
          <button
            onClick={() => setTab('appointments')}
            className={`${tab === 'appointments'
              ? ' bg-indigo-100 text-primaryColor'
              : ' bg-transparent text-headingColor'
              } w-full btn mt-0 rounded-md`}
          > Appointments
          </button>
          <button
            onClick={() => setTab('settings')}
            className={`${tab === 'settings'
              ? ' bg-indigo-100 text-primaryColor'
              : ' bg-transparent text-headingColor'
              } w-full btn mt-0 rounded-md`}
          > Profile
          </button>

          <div className='mt-[100px] w-full '>
            <button
              className=' w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'
              onClick={handelLogin}
            >Logout
            </button>

            <button className=' w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'
            >Delet account
            </button>
          </div>


        </div>)}

      <div className=' hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounnded-md'>

        <button
          onClick={() => setTab('overview')}
          className={`${tab === 'overview'
            ? ' bg-indigo-100 text-primaryColor'
            : ' bg-transparent text-headingColor'
            } w-full btn mt-0 rounded-md`}
        > Overview
        </button>
        <button
          onClick={() => setTab('appointments')}
          className={`${tab === 'appointments'
            ? ' bg-indigo-100 text-primaryColor'
            : ' bg-transparent text-headingColor'
            } w-full btn mt-0 rounded-md`}
        > Appointments
        </button>
        <button
          onClick={() => setTab('settings')}
          className={`${tab === 'settings'
            ? ' bg-indigo-100 text-primaryColor'
            : ' bg-transparent text-headingColor'
            } w-full btn mt-0 rounded-md`}
        > Profile
        </button>

        <div className='mt-[100px] w-full '>
          <button
            className=' w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white'
            onClick={handelLogin}
          >Logout
          </button>

          <button className=' w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'
          >Delet account
          </button>
        </div>


      </div>
    </div>
  )
}

export default Tabs