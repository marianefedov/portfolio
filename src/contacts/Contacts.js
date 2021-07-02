import React from 'react'
import s from './Contacts.module.css'
import sContainer from "../common/styles/Container.module.css";


export default function  Contacts() {
    return (
        <div className={s.contactBlock}>
            <div className={ s.contactContainer }>
                <h2 className={s.title}>Contacts</h2>
                <form action="submit"  className={s.contactForm}>
                    <input className={s.inputItem} type="text" placeholder='Name'/>
                    <input className={s.inputItem} type="text" placeholder='E-mail'/>
                    <textarea className={ s.textareaItem}  placeholder='Your message'/>
                </form>
                <button className={s.btn} type='submit'>SEND MESSAGE</button>

            </div>
        </div>
    )

}