import React from 'react';
import KGLogo from './KeyGroup Main Logo.png';





function Footer (){
    return(
        <div className="footer mt-5">
            <div>
                <img src={KGLogo} className='logonaminto' alt='KeyGroup Logo'></img>
            </div>
        </div>
    );

}


export default Footer;