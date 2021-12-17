import React,{useState,useEffect} from 'react'
import Classes from "./SearchList.module.css"

export default function SearchList(props) {
    const [Loading,setLoading] = useState(true);
  const [LoadedData,setLoadedData] = useState([]);

 useEffect(() => {
  fetch("https://tenislobisi-default-rtdb.europe-west1.firebasedatabase.app/SearchingPeople.json").then((response) => {return response.json()}).then(data => {
    const SearchingPeople = [];
  
    for (const key in data){
      const SearchingPeopleData = {
        id: key,
        ...data[key]
      }
      SearchingPeople.push(SearchingPeopleData);
    }
    setLoading(false)
    setLoadedData(SearchingPeople)
   })
 },[])

    
 
  
    if (Loading === true) {
      return <p>Loading...</p>
    }
    return (
        <ul className={Classes.list}>
        
        {LoadedData.map((data) => (
          <li> 
            <div className={Classes.card}>
              <div>
              <p><label>İl: </label> {data.Şehir}</p>
              <p><label>İlçe: </label> {data.İlçe}</p>
              <p><label>Yaş: </label>{data.yas}</p>
              </div>
              <p><label>Seviye: </label>{data.tecrube}</p>
              <p><label>Aradığı karşılaşma türü: </label>{data.tur}</p>
              <p><label>ek bilgi: </label>{data.ekbilgi}</p>
            </div> 
        </li>
        
        ))}
        
      </ul>
    )
}
