import React from 'react'

import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <nav>
            <div>
                <div>
                    <img src={Logo} alt="Logo" />
                    <Link to={'/home'}>Logo</Link>
                </div>
                <ul className='no-mobile'>
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/'}>Cliente</Link></li>
                    <li><Link to={'/admin'}>Admin</Link></li>
                    <li><Link to={'/ajuda'}>Ajuda</Link></li>
                </ul>
            </div>
            <button className='btn-primary btn-color-primary no-mobile'><Link to={'/'}>Envie seu arquivo!</Link></button>
        </nav>
    )
}

export default Navbar