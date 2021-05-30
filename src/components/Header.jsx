import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>MAG RESIGN KANA! LUMIPAT KANA COMPANY!!</h1>
                <Typed className='typed-text'
                strings={["Front End Developer","HTML5","Bootstrap","React JS"]}
                typeSpeed={40}
                backSpeed={60}
                loop/>
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
