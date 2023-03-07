import React from 'react'

import { Link } from 'react-router-dom'

import Logo from '../../assets/iconLOGO 1.png'

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
            <Link to={'/'} className='btn-secundary btn-border-blue no-mobile'>
                <p>Envie seu arquivo!</p>
            </Link>
        </nav>
    )
}

export default Navbar