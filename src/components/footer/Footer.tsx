import React from 'react'
import s from './Footer.module.css'
import twitter from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/instagram.svg'
import youtube from '../../assets/icons/youtube.svg'

export function Footer() {
    return <footer className={s.footer}>
        <h5>Travelly &copy;</h5>
        <ul>
            <li><a href="#"><img src={twitter} alt={''}/> </a></li>
            <li><a href="#"><img src={instagram} alt={''}/></a></li>
            <li><a href="#"><img src={youtube} alt={''}/></a></li>
        </ul>
    </footer>
}
