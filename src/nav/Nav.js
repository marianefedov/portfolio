import React from 'react'
import sContainer from '../common/styles/Container.module.css'
import s from './Nav.module.css'



export default function Nav() {
    return (
       <div className={`${sContainer.container} ${s.navContainer}`}>
           <div className={`${s.nav}`}>
               <a href="#">Main</a>
               <a href="#">Skills</a>
               <a href="#">Projects</a>
               <a href="#">Contacts</a>
           </div>
       </div>
    )
}