import { useEffect,useRef } from 'react';
import {Link, NavLink} from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';
import {navlinks} from '../../constants/constants';
import {BiMenu} from "react-icons/bi";

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickHeader = () => {
    window.addEventListener('scroll',() => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add("sticky__header");
      }else{
        headerRef.current.classList.remove("sticky__header");
      }
    })
  };

  useEffect(() => {
    handleStickHeader();
    return() => window.removeEventListener('scroll',handleStickHeader);
  },[]);

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show__menu');
  }

  return (
    <header ref={headerRef} className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <img
              src={logo}
              alt="logo" 
            />
          </div>

          {/* menu */}
          <div ref={menuRef} onClick={toggleMenu} className='navigation'>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navlinks.map((link,index) => (
                <li key={index}>
                  <NavLink 
                    to={link.path}
                    className={navClass => navClass.isActive? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>

          </div>

          {/* nav right */}
          <div className='flex items-center gap-4'>

            <div className='hidden'>
              <Link
                to="/home"
              >
                <figure
                  className='w-[35px] h-[35px] rounded-full cursor-pointer'
                >
                  <img
                    src={userImg}
                    alt="userImg"
                    className='w-full rounded-full' 
                  />
                </figure>
              </Link>
            </div>

            <Link
              to="/login"
            >
                <button
                  className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'
                >
                  Login
                </button>
            </Link>

            <span onClick={toggleMenu} className='md:hidden'>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
            
          </div>

        </div>
      </div>
    </header>
  )
};

export default Header;