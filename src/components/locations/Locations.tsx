import React from 'react'
import s from './Locations.module.css'
import cloud from '../../assets/img/cloud.png'

export function Locations() {
    /*to find through a href='#locations' put id="locations"*/
    return <section id={'locations'} className={s.locations}>
        <header className={s.header}>
            <h2>The Perfect Travelling Experience</h2>
            <h3> We cover everything from picking the perfect hotel, flight and travelling destination</h3>
        </header>
        <img src={cloud} alt="" className={`${s.moving_cloud_1} ${s.cloud}`}/>
        <img src={cloud} alt="" className={`${s.moving_cloud_2} ${s.cloud}`}/>
    </section>
}
