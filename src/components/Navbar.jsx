import React from 'react'
import index from '../index.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faAddressCard, faBars, faHome } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img className='logo' src={index} alt=""></img></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={ faBars }/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><span><FontAwesomeIcon icon={faHome}/></span> Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span><FontAwesomeIcon icon={faAddressCard}/></span> About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span><FontAwesomeIcon icon={faAddressBook}/></span> Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
