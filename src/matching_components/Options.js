import React from 'react'
import CityList from '../components/CityList'
import {Card} from "react-bootstrap"
import Classes from './Options.module.css'
import { useState } from 'react'

export default function Options() { 
 const [yas,setYas] = useState(50);
const updateYas = (e,data) => {
    data = document.getElementById("myRange").value
setYas(data)
}
    function onClickKt(){
        document.getElementById("ktp").innerHTML ="<strong>Karşılaşma türünü seçiniz:</strong> " + document.querySelector('input[name="kt"]:checked').value;
    }
    function onClickDerece(){
        document.getElementById("rank").innerHTML ="<strong>Aranan oyuncu seviyesi: </strong> " + document.querySelector('input[name="derece"]:checked').value;
    }
    return (
        <>
        <Card style={{padding:"1rem"}}>
            {/* Şehir seçim */}
            <CityList/>
            <hr/>
        {/* Karşılaşma türü */}
        <p id="ktp"><strong>Karşılaşma türünü seçiniz:</strong> Hepsi</p>
        <div className={Classes.karsilasma}>
            <input type="radio" className={Classes.hidden} name="kt" id="rk" value="Rekabetçi" onChange={onClickKt}/>
            <label for="rk">Rekabetçi</label>
            <input type="radio" className={Classes.hidden} name="kt" id="fun" value="Eğlence" onChange={onClickKt}/>
            <label for="fun">Eğlence</label>
            <input type="radio" className={Classes.hidden} name="kt" id="tr" value="Antrenman" onChange={onClickKt}/>
            <label for="tr">Antrenman</label>
            <input type="radio" className={Classes.hidden} name="kt" id="ALL" value="Hepsi" onChange={onClickKt}/>
            <label for="ALL">Hepsi</label>
        </div>
        <hr/>
        {/* Yaş aralığı seçim */}
        <p><strong>Gösterilecek maksimum yaşı seçiniz:</strong> {yas} yaş</p>
        <input type="range" value={yas} onChange={updateYas} className={Classes.slider} id="myRange"></input>
        <hr/>
        {/* Oyuncu seviyesi seçme */}
        <div className={Classes.derecePage}>
            <div className={Classes.derece}>
            <p id="rank"><strong>Aranan oyuncu seviyesi: Hepsi</strong></p>
            <input type="radio" className={Classes.hidden}  name='derece' id='profesyonel' value="Profesyonel" onClick={onClickDerece}></input>
            <label for="profesyonel" style={{backgroundColor:"#ff4d4d"}}>Pro</label>
            <input type="radio" className={Classes.hidden}  name="derece" id="orta" value="Orta seviye" onClick={onClickDerece}/>
            <label for="orta" style={{backgroundColor:"#cccc00"}}>Orta seviye</label>
            <input type="radio" className={Classes.hidden} name="derece" id="baslangic" value="Başlangıç" onClick={onClickDerece}/>
            <label for="baslangic" style={{backgroundColor:"#009043"}}>Başlangıç</label>
            <input type="radio" className={Classes.hidden} name="derece" id="firstTime" value="İlk defa oynayan" onClick={onClickDerece}/>
            <label for="firstTime" style={{backgroundColor:"#89C63C"}}>İlk defa oynayan</label>
            <input type="radio" className={Classes.hidden} name="derece" id="hepsi" value="Hepsi" onClick={onClickDerece}/>
            <label for="hepsi" style={{backgroundImage:"linear-gradient(to right, #FF5F5F, #009043, #1A9B56, #1600DB)"}}>Hepsi</label>
            </div>
            <div className={Classes.description}>
<strong>seviyeler;</strong><br/>
<strong>*Pro: </strong> profesyonel, tecrübeli tenis oyuncusu. Yüksek tempolu rekabetçi maçlar için uygundur.<br/>
<strong>*Orta seviye: </strong> profesyonel olmaya yakın kendini geliştirmeye devam eden. Daha hafif tempoda rekabetçi eşleşmeler için uygun<br/>
<strong>*Başlangıç: </strong>tempolu bir rekabetçi maç yapmak için deneyime ihtiyacı olan. Eğlence ve antrenman eşleşmeleri için daha uygundur. <br/>
<strong>*İlk defa oynayan: </strong>kortların ve tenislobisinin yeni üyesi ! tenisin temellerini paylaşabileceğiniz, öğretici bir antrenman eşleşmesi için uygundur.<br/>
            </div>
        </div>
        </Card>
        </>

    )
}
