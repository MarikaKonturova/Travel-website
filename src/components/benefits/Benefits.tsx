import React from 'react'
import s from './Benefits.module.css'
import route from '../../assets/icons/route-solid.svg'
import bed from '../../assets/icons/bed-solid.svg'
import plane from '../../assets/icons/plane-departure-solid.svg'

export function Benefits() {
    /*to find through a href='#benefits' put id="benefits"*/
    return <section id={'benefits'} className={s.benefits}>
        <header className={s.header}>
            <h2>The Perfect Travelling Experience</h2>
            <h3> We cover everything from picking the perfect hotel, <br/>
                flight and travelling destination</h3>
        </header>
        <div className={s.cards}>
            <div className={s.card}>
                <div className={s.card_icon}>
                    <img src={route} alt={'route'}/>
                </div>
                <h4>Travel</h4>
                <p>Travel In over 250 countries no effort.</p>
            </div>
            <div className={s.card}>
                <div className={s.card_icon}>
                    <img src={bed} alt={'bed'}/>
                </div>
                <h4>Hotel</h4>
                <p>Hotels locates near popular areas.</p>
            </div>
            <div className={s.card}>
                <div className={s.card_icon}>
                    <img src={plane} alt={'plane'}/>
                </div>
                <h4>Fly</h4>
                <p>Flight included in every purchased trip.</p>
            </div>

        </div>
    </section>
}
