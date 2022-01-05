import React from 'react'
import s from './Contact.module.css'

export function Contact() {
    /*to find through a href='#contact' put id="contact"*/
    return <section id={'contact'} className={s.contact}>
        <div className={s.wrapper}>
            <form className={s.form}>
                <header className={s.header}>
                    <h2>Contact Us</h2>
                </header>
                <div className={`${s.field} ${s.name_form}`}>
                    <label htmlFor='name'>Name:</label>
                    <input id={'name'} type={'text'} name={'name'} required/>
                </div>
                <div className={`${s.field} ${s.email_form}`}>
                    {/*to click on the label and jump to input write htmlFor+name+id*/}
                    <label htmlFor='email'>Email:</label>
                    <input  id={'email'} type={'text'} name={'email'} required/>
                </div>
                <button className={s.button}>Submit</button>
            </form>
        </div>
    </section>
}
