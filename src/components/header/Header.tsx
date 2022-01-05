import React from 'react'
import s from './Header.module.css'
export function Header(){
    /*to find through a href='#benefits' put id="benefits"*/
    return <header className={s.main_head}>
        <nav>
            <h1 id={s.logo}>Travelly</h1>
            <ul>
                <li><a href={'#locations'}>Locations</a></li>
                <li><a href={'#benefits'}>Benefits</a></li>
                <li><a href={'#contact'}>Contact</a></li>
            </ul>
        </nav>
    </header>
}
