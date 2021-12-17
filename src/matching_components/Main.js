import React from 'react'
import Classes from './Main.module.css'
import {Card} from "react-bootstrap"
import SearchPage from './SearchPage'
import SearchList from './SearchList'



export default function Main() {
    function ilanOnclick() {
        document.getElementById("ilanlar").style.display="none"
        document.getElementById("ilan").style.display="block"
    }
    function ilanlarOnclick() {
        document.getElementById("ilanlar").style.display="block"
        document.getElementById("ilan").style.display="none"
    }
    
    return (
        <Card>
        <ul className={Classes.buttons}>
        <li>
        <input type="radio" id="ilanlarButton" name="cb" onChange={ilanlarOnclick} defaultChecked/>
        <label for="ilanlarButton" >İlanları gör</label>
        </li>
        <li>
        <input type="radio" id="ilanButton" name="cb" onChange={ilanOnclick}/>
        <label for="ilanButton" >İlan bırak</label>
        </li>
        </ul>
        <div id="ilanlar" style={{display:"block"}}>
            <SearchList/>
        </div>
        <div id="ilan" style={{display:"none"}}>
            <SearchPage/>
        </div>
        </Card>
    )
}
