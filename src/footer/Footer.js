import React from 'react'
import sContainer from "../common/styles/Container.module.css";
import s from './Footer.module.css'




export default function Footer() {
    return (
        <div className={s.footer}>
           <div className={`${sContainer.container} ${s.footerContainer}`}>
               <h2>Ivan Ivanov</h2>
               <div className={s.footerBlock}>
                   <div className={s.divItem}> </div>
                   <div className={s.divItem}> </div>
                   <div className={s.divItem}> </div>
                   <div className={s.divItem}> </div>
               </div>
               <p>© 2019 All Rights Reserved.</p>
           </div>
        </div>
    )
}