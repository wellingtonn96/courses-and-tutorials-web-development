import React from 'react'
import Logo from '../../assets/img/logo.png'
import './Logo.css'

export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={Logo} alt="logo"/>
        </a>
    </aside>