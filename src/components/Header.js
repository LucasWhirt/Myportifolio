import React from 'react';

// image criar logo
import Logo from '../assets/letra.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='' style={{ width: '200px' }} />
          </a>
          <button className='btn btn-sm'>work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
