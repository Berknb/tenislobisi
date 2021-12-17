import React from 'react'
import NewFreeCourtForm from '../court_components/NewFreeCourtForm'
export default function Newcourt() {
    // --------------------------------ÜCRETSİZ KORTLAR FETCH---------------------
    function addFreeCourtHandler(freeCourtData){
fetch("https://tenislobisi-default-rtdb.europe-west1.firebasedatabase.app/FreeCourts.json",{
    method: "POST",
    body: JSON.stringify(freeCourtData)
})
    }
    // --------------------------------ÜCRETLİ KORTLAR FETCH---------------------
    function addPaidCourtHandler(paidCourtData){
        fetch("https://tenislobisi-default-rtdb.europe-west1.firebasedatabase.app/PaidCourts.json",{
            method: "POST",
            body: JSON.stringify(paidCourtData)
        })
            }
    return (
        <NewFreeCourtForm addFreeCourt={addFreeCourtHandler} addPaidCourt={addPaidCourtHandler}/>
    )
}
