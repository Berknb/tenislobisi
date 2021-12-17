import React from 'react'
import Classes from './MatchingMain.module.css'
import Main from './Main'
import Options from './Options'



export default function MatchingMain() {
   
   
    return (
        <>
            <div className={Classes.main} id="main"><Main/></div>
            <div className={Classes.options} id="options"><Options/></div>
        </>
    )
}
