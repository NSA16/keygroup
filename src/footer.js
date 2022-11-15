import React from 'react';
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';
import KGLogo from './KeyGroup Main Logo.png';





function Footer (){
    return(
        <div className="footerChild">
            <div>
                <img src={KGLogo} className='logonaminto' alt='KeyGroup Logo'></img>
            </div>
        </div>
    );

}


export default Footer;