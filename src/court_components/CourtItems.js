import React from 'react'
import Classes from './CourtItems.module.css'
import { useNavigate} from 'react-router-dom'
export default function CourtItems() {
    let Navigate = useNavigate();
    function Free() {
        Navigate('/FreeCourts')
    }
    function Paid() {
        Navigate('/PaidCourts')
    }
    return (
        <div>
            <button className={Classes.left} onClick={Free}><p>Ücretsiz kortlar</p></button>
            <button className={Classes.right} onClick={Paid}><p>Ücretli kortlar</p></button>
        </div>
    )
}
