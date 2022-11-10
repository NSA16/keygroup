import React from 'react';
import KGLogo from './KeyGroup Main Logo.png';

const menus = ["Home","About","Contact Us","Login"];
const mainMenu = menus.map((item) => <li>{item}</li>);

class Header extends React.Component {
    constructor(props){
        super(props);
    }

render (){
    return(
        <div className="header">
            <div>
                <img src={KGLogo} className='Klogo' alt='KeyGroup Logo'></img>
            </div>
            <div className='mainMenu'>
                {mainMenu}
            </div>
            <div>{this.props.tXt}</div>
        </div>
    );

}
}

export default Header;