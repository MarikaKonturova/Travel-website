import React from 'react'
import s from './Footer.module.css'
import twitter from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/instagram.svg'
import youtube from '../../assets/icons/youtube.svg'

export function Footer() {
    return <footer className={s.footer}>
        <h5>Travelly &copy;</h5>
        <ul>
            {/*to show text when a and img hover = alt + title*/}
            <li><a href="#" title={'twitter'}
            ><img src={twitter} alt={'twitter'}/> </a></li>
            <li><a href="#" title={'instagram'}
            ><img src={instagram} alt={'instagram'}/></a></li>
            <li><a href="#" title={'youtube'}
            ><img src={youtube} alt={'youtube'}/></a></li>
        </ul>
    </footer>
}
