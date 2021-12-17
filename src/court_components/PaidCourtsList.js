import React from 'react'
import Classes from './PaidCourtList.module.css'

export default function PaidCourtsList(props) {
    return (
        
        <ul className={Classes.list}>
        
      {props.meetups.map((data) => (
        <li>
        <div>  
          <div className={Classes.card}>
            <div>
            <p><label>İl: </label> {data.Şehir}</p>
            <p><label>İlçe: </label> {data.İlçe}</p>
            <p><label>Adres: </label>{data.Adres}</p>
            </div>
            <p><label>Zemin: </label>{data.Zemin_tipi}</p>
            <p><label>Kort tipi: </label>{data.Kort_tipi}</p>
            <p><label>Ücretlendirme: </label>{data.Ücretlendirme}</p>
            <p placeholder="Saat bilgisi yok"><label>Saatler: </label>{data.Açılış_saati} / {data.Kapanış_saati}</p>
          </div>
          </div> 
      </li>
      
      ))}
      
    </ul>
    
    )
}
