import React, {useRef} from 'react'
import CityList from '../components/CityList'
import Classes from './SearchPage.module.css'

export default function SearchPage() {
  
    const tecrubeRef = useRef();
    const dogumtarihRef = useRef();
    const karsılasmaTurRef = useRef();
    const ekbilgiRef = useRef();
               
    function submit(e) {
      e.preventDefault();

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
      if(value && town !== ""){
alert("Kayıt başarılı sayfayı yeniledikten sonra ilanlar kısmında görebilirsiniz !")
      }
      const enteredCity = value;
      const enteredTown = town;
          // --------------------------- TECRÜBE SEÇİMİ --------------------------
          if(document.getElementById('pro').checked === true) {   
              var tecrube = "profesyonel" 
            } else if(document.getElementById('mid').checked === true) {  
              tecrube = "orta seviye"   
            }
            else if(document.getElementById('beginner').checked === true) {  
              tecrube = "başlangıç"   
            }
            else if(document.getElementById('first').checked === true) {  
              tecrube = "ilk defa oynayacağım!"   
            } 
  // --------------------------- OYUN TÜRÜ SEÇİMİ --------------------------
      const checkboxes = document.getElementsByName('tur');
      var tur;
      
     for(var i=0; i < checkboxes.length; i++){
         if(checkboxes[i].checked){
             if(tur === undefined){
              tur = checkboxes[i].value;
             }else{tur = tur + " " + checkboxes[i].value;}
           
         }
     }
   
   var yas = new Date().getFullYear() - dogumtarihRef.current.value
   const enteredBilgi = ekbilgiRef.current.value
        const SearchingPeopleData = {
              Şehir: enteredCity,
              İlçe: enteredTown,
              tecrube: tecrube,
              tur: tur,
              yas: yas,
              ekbilgi: enteredBilgi,
            };
            console.log(SearchingPeopleData)

            fetch("https://tenislobisi-default-rtdb.europe-west1.firebasedatabase.app/SearchingPeople.json",{
              method:"POST",
              body:JSON.stringify(SearchingPeopleData)
            })
    }
    return (
        <>
            <CityList/>
            {/* TECRÜBE FORM EKRANI */}
        <div className={Classes.select}>
            <hr/>
      <p>Tecrübe seviyeniz nedir ? </p>
      <input type='radio' value='profesyonel' id="pro" name='seviye' ref={tecrubeRef}/>
      <label>profesyonel</label>
      <input type='radio' value='orta seviye' id="mid" name='seviye' ref={tecrubeRef}/>
      <label>orta seviye</label>
      <input type='radio' value='başlangıç' id="beginner" name='seviye' ref={tecrubeRef} defaultChecked/>
      <label>başlangıç</label>
      <input type='radio' value='ilk defa oynayacağım!' id="first" name='seviye' ref={tecrubeRef}/>
      <label>İlk defa oynayacağım!</label>
    </div>
    <hr/>
    {/* YAŞ FORM EKRANI */}
    <div className={Classes.select}>
      <p style={{display:"inline-block",marginRight:"1rem"}}>Doğum tarihiniz: </p>
      <input type="number" min="1900" max="2099" step="1" defaultValue="1990" id="age" ref={dogumtarihRef}/>
    </div>
    <hr/>
    {/* KARŞILAŞMA TÜRÜ FORM EKRANI */}
    <div className={Classes.select} id="formTur">  
      <p>Aradığınız karşılaşma türü nedir ? <small style={{fontWeight:"lighter"}}>(birden fazla seçenek belirtebilirsiniz)</small></p>
      <input type='checkbox' value='rekabetçi' id="rekabetçi" name='tur' ref={karsılasmaTurRef}/>
      <label>rekabetçi</label>
      <input type='checkbox' value='eğlence' id="eğlence" name='tur' ref={karsılasmaTurRef}/>
      <label>eğlence</label>
      <input type='checkbox' value='antrenman' id="antrenman" name='tur' defaultChecked={true} ref={karsılasmaTurRef}/>
      <label>antrenman</label>
    </div>
    <hr/>
    {/* EK BİLGİ FORM EKRANI */}
    <div className={Classes.select}>
    <p htmlFor='textarea'>Ek bilgi: </p>
  <textarea placeholder='Eklemek istediğiniz bir şey varsa belirtin...' rows='5' maxLength={140} ref={ekbilgiRef}></textarea>
  </div>
  {/* FORM SUBMIT BUTTON */}
  <div className={Classes.submit}>
  <button onClick={submit}>Ekle</button>
  </div>
        </>
    )
}
