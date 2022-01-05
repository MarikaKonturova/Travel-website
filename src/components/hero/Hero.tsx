import React from 'react'
import s from './Hero.module.css'

export function Hero() {
    return <section className={s.hero}>
        <h2>Travel Beyond Limits.</h2>
        <h3>Start your travel at an affordable price with Travely <br/>
            Contact us now below.</h3>
        <button>Book now</button>
    </section>
}
