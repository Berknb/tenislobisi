import React from 'react'
import { useState, useEffect } from 'react'
import PaidCourtsList from '../court_components/PaidCourtsList';
export default function PaidCourts() {
  const [Loading,setLoading] = useState(true);
  const [LoadedData,setLoadedData] = useState([]);

 useEffect(() => {
  fetch("https://tenislobisi-default-rtdb.europe-west1.firebasedatabase.app/PaidCourts.json").then((response) => {return response.json()}).then(data => {
    const paidCourtsData = [];
  
    for (const key in data){
      const paidCourtData = {
        id: key,
        ...data[key]
      }
  paidCourtsData.push(paidCourtData);
    }
    setLoading(false)
    setLoadedData(paidCourtsData)
   })
 },[])

    
 
  
    if (Loading === true) {
      return <p>Loading...</p>
    }
    
    return (
        
        <section>
          <PaidCourtsList meetups={LoadedData}/>
        </section>
    )
}

