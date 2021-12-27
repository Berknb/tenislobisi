import React from 'react'
import Classes from './NewFreeCourtForm.module.css'
import { useRef } from 'react'
import CityList from '../components/CityList'



export default function CustomSelect(props) {    
    
    const adressinputref = useRef();
    const openHoursref = useRef();
    const closedHoursref = useRef();

      function Submit(event){
        // --------------------------- ŞEHİR İLÇE SEÇİMİ --------------------------
        var selectCity = document.getElementById('subject');
        var value = selectCity.options[selectCity.selectedIndex].value;
        var selectTown = document.getElementById('topic');
        var town = selectTown.options[selectTown.selectedIndex].value;
        if(value === ""){
          alert("Şehir alanı boş bırakılamaz")
        }
        if(town === ""){
          alert("İlçe alanı boş bırakılamaz")
        }
        // --------------------------- KORT TİPİ --------------------------
        if(document.getElementById('open').checked === true) {   
          var court = "Açık" 
 } else if(document.getElementById('close').checked === true) {  
           court = "Kapalı"   
 }  
 else
 alert("Lütfen kort tipini belirtin!")
// --------------------------- ZEMİN TİPİ KONTROL--------------------------
 if(document.getElementById('sert').checked === true) {   
  var zemin = "Sert zemin" 
} else if(document.getElementById('çim').checked === true) {  
   zemin = "Çim zemin"   
}
else if(document.getElementById('toprak').checked === true) {  
   zemin = "Toprak zemin"   
}
else if(document.getElementById('parke').checked === true) {  
   zemin = "Parke zemin"   
}     
else
alert("Lütfen zemin tipini belirtin!")
// --------------------------- ÜCRETLENDİRME KONTROL --------------------------
if(document.getElementById('ücretsiz').checked === true) {   
  var price = "ücretsiz" 
} else if(document.getElementById('ücretli').checked === true) {  
   price = "ücretli"   
}  
else
alert("Lütfen ücret tipini belirtin!")

        event.preventDefault();
        // --------------------------- COURT DATA --------------------------
        const enteredCity = value;
        const enteredTown = town;
        const enteredAdress = adressinputref.current.value;
        const enteredOpenTime = openHoursref.current.value;
        const entereClosedTime = closedHoursref.current.value;
        
        if(price === "ücretsiz" ){
          const freeCourtData = {
            Şehir: enteredCity,
            İlçe: enteredTown,
            Adres: enteredAdress,
            Kort_tipi: court,
            Zemin_tipi: zemin,
            Ücretlendirme: price,
            Açılış_saati: enteredOpenTime,
            Kapanış_saati: entereClosedTime
          };
          props.addFreeCourt(freeCourtData);
        }
        else if(price === "ücretli")
        {
          const paidCourtData = {
            Şehir: enteredCity,
            İlçe: enteredTown,
            Adres: enteredAdress,
            Kort_tipi: court,
            Zemin_tipi: zemin,
            Ücretlendirme: price,
            Açılış_saati: enteredOpenTime,
            Kapanış_saati: entereClosedTime
          };
          props.addPaidCourt(paidCourtData);
        }
        
      }

      
    return (
        <div className={Classes.card}>
            <form name="form1" id="form1" className={Classes.form} onSubmit={Submit}>
<CityList/>
  
  <p htmlFor='textarea'>Detaylı bilgi: </p>
  <textarea placeholder='sokak, mahalle, no: ... (ücretli ise ücretlendirme bilgisi)' rows='5' maxLength="100" ref={adressinputref}></textarea>

  
  <div id="kort_tipi">
      <p>Kort tipi :</p>
      <input type='radio' value='açık' id="open" name='kort_tipi'/>
      <label>Açık</label>
      <input type='radio' value='kapalı' id="close" name='kort_tipi' className=""/>
      <label>Kapalı</label>
    </div>

    
    <div>
      <p>Zemin tipi :</p>
      <input type='radio' value='sert' id="sert" name='zemin_tipi'/>
      <label>Sert zemin</label>
      <input type='radio' value='çim' id="çim" name='zemin_tipi'/>
      <label>Çim</label>
      <input type='radio' value='toprak' id="toprak" name='zemin_tipi'/>
      <label>Toprak</label>
      <input type='radio' value='parke' id="parke" name='zemin_tipi'/>
      <label>Parke</label>
    </div>

    
    <div>
      <p>Ücretlendirme :</p>
      <input type='radio' value='ücretsiz' id="ücretsiz" name='ücret_tipi'/>
      <label>Ücretsiz</label>
      <input type='radio' value='ücretli' id="ücretli" name='ücret_tipi'/>
      <label>Ücretli</label>
    </div>

    
    <div className={Classes.saat}>
      <p>Açılış ve kapanış saatleri hakkında bilginiz varsa lütfen giriniz:</p>
      <label>Açılış saati: </label>
      <input type='time'  id="hours" ref={openHoursref}/>
      <label>Kapanış saati: </label>
      <input type='time' id="minutes" ref={closedHoursref}/>
    </div>


    <div className={Classes.actions}>
<button >Ekle</button>
    </div>
</form>
        </div>
    )
}


