import React from 'react';
// import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
// import link
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50">
          <Link
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            to="home"
            smooth={true}
            spy={true}
            duration={500}
            activeClass="active"
          >
            <BiHomeAlt />
          </Link>

          <Link
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            to="About"
            smooth={true}
            spy={true}
            duration={500}
            activeClass="active"
          >
            <BiUser />
          </Link>

          <Link
          
          smooth={true}
          spy={true}
          duration={500}
          activeClass="active"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            to="services"
           
          >
            <BsClipboardData />
          </Link>

          <Link
          smooth={true}
          spy={true}
          duration={500}
          activeClass="active"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            to="work"
            
          >
            <BsBriefcase />
          </Link>

          <Link
          smooth={true}
          spy={true}
          duration={500}
          activeClass="active"
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
            to="contact"
            
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
