import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import logo from '../../images/logo.png';

const NavBarItem = ({ title, classprops }) => {
  return (
      <li className={`mx-4 cursor-pointer ${classprops}`}>
        {title}
        </li>
)
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={logo} alt='logo' className='w-32 cursor-pointer' />
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        <NavBarItem title='Market' />
        <NavBarItem title='Exchange' />
        <NavBarItem title='Tutorials' />
        <NavBarItem title='Wallets' />
        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
          Login
          </li>
      </ul>
      <div className='flex relative'>
        {toggleMenu
          ? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
          : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)}
         />}
         {toggleMenu && (
          <ul
            className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none bg-[#1c1c24]'>    
            <NavBarItem title='Market' classprops='my-2 text-lg' />
            <NavBarItem title='Exchange' classprops='my-2 text-lg' />
            <NavBarItem title='Tutorials' classprops='my-2 text-lg' />
            <NavBarItem title='Wallets' classprops='my-2 text-lg' />
            <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
              Login
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
