import React from "react";
import s from './Skills.module.css'
import sContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


const Skills = () => {
    const desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'
   return (
       <div className={s.skillsBlock}>
            <div className={ `${sContainer.container} ${s.skillsContainer}` }>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={desc}/>
                    <Skill title={'CSS'} description={desc}/>
                    <Skill title={'React'} description={desc}/>
                    <Skill title={'React'} description={desc}/>
                    <Skill title={'React'} description={desc}/>
                </div>
            </div>
       </div>
   )

}

export default Skills