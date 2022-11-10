import React from 'react';
import KGLogo from './KeyGroup Main Logo.png';



class Header extends React.Component {
    constructor(props){
        super(props);
    }

render (){
    return(
        <div className="header">
            <div className='Klogo'>
                <img src={KGLogo} className='logonaminto' alt='KeyGroup Logo'></img>
            </div>
            <div className='mainMenu'>
                <button>Home</button>
                <button>Meet The Team</button>
                <button>Contact Us</button>
            </div>
            <div>{this.props.tXt}</div>
        </div>
    );

}
}

export default Header;