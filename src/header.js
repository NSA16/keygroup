import React from 'react';
import KGLogo from './KeyGroup Main Logo.png';



function Header (){
    return(
        <div className="header">
            <div className='Klogo'>
                <img src={KGLogo} className='logonaminto' alt='KeyGroup Logo'></img>
            </div>
            <div className='mainMenu'>
                <button className='rounded'>Home</button>
                <button className='rounded'>Meet The Team</button>
                <button className='rounded'>Contact Us</button>
            </div>
        </div>
    );

}

export default Header;