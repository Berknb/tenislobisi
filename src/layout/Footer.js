import React from 'react'
import Classes from './Footer.module.css'
import Image from '../images/logo.jpg'
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

export default function Footer() {
    return (
        <>
    <footer className={Classes.footer}>
        
    <div className={Classes.logo}>
    <img src={Image} alt="logo"/>
    </div>
    <div className={Classes.items}>
    <ul>
        <li><Link to='/'>Ana sayfa</Link></li>
        <li><Link to='/Kortlar'>Kortlar</Link></li>
        <li><Link to='/Kort_kayit'>Kort kayıt</Link></li>
        <li><Link to='/Eslestirme'>Eşleştirme</Link></li>
        <li><Link to='/Kayit'>Kayıt ol</Link></li>
        </ul>
        <a href = "mailto: berkodundar@gmail.com">İletişim için: berkodundar@gmail.com</a>
        <div className={Classes.blankLinks}>
    <a href = "https://www.linkedin.com/in/berkdündar/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
    <a href = "https://github.com/Berknb" target="_blank" rel="noreferrer"><GoMarkGithub/></a>
    </div>
    <p>Tüm Hakkı Saklıdır 2021 Tenislobisi.com</p>
    </div>
    
</footer>

</>
    )
}
