import {Link} from 'react-router-dom';
import Classes from './mainnav.module.css';
import Image from '../images/logo.png';
import  {useAuth} from '../firebase';
import {useState,useEffect} from "react";
import { BiUserCircle } from "react-icons/bi";
import { ImExit } from "react-icons/im";
import {logout} from "../firebase"

function Navbar(){
    const currentUser = useAuth();
    const[user,setUser] = useState("");
    useEffect(() => {
        if(currentUser?.email != null){
            setUser(currentUser?.email)
                }
                else{
                    setUser("")
                }
    },[currentUser])
 
    async function handleLogout(){
        try{
            await logout();
        }catch{
        }
    }
    if(user === ""){
        return (
            <div>
            <div className={Classes.userpanel}>
            <a href='/Giris_yap' style={{color:"white"}}>Giriş yap</a>
                </div>
            <header className={Classes.header}>
            <div className={Classes.logo}>
                <img src={Image} alt="logo"/>
            </div>
            <nav className={Classes.standart}>
                <ul>
                <li><Link to='/'>Ana sayfa</Link></li>
                <li><Link to='/Kortlar'>Kortlar</Link></li>
                <li><Link to='/Kort_kayit'>Kort kayıt</Link></li>
                <li><Link to='/Eslestirme'>Eşleştirme</Link></li>
                <li><Link to='/Kayit'>Kayıt ol</Link></li>
                </ul>
            </nav>
                <div className={Classes.drpOptions}>
                <ul>
                <li><Link to='/'>Ana sayfa</Link></li>
                <li><Link to='/Kortlar'>Kortlar</Link></li>
                <li><Link to='/Kort_kayit'>Kort kayıt</Link></li>
                <li><Link to='/Eslestirme'>Eşleştirme</Link></li>
                <li><Link to='/Kayit'>Kayıt ol</Link></li>
                </ul>
                </div>
            
        </header>
        </div>
        )
    }else{
        return (
            <div>
            <div className={Classes.userpanel}>
            <BiUserCircle/> <ImExit onClick={handleLogout}/> {user}
                </div>
            <header className={Classes.header}>
            <div className={Classes.logo}>
                <img src={Image} alt="logo"/>
            </div>
            <nav className={Classes.standart}>
                <ul>
                <li><Link to='/'>Ana sayfa</Link></li>
                <li><Link to='/Kortlar'>Kortlar</Link></li>
                <li><Link to='/Kort_kayit'>Kort kayıt</Link></li>
                <li><Link to='/Eslestirme'>Eşleştirme</Link></li>
                <li><Link to='/Kayit'>Kayıt ol</Link></li>
                </ul>
            </nav>
                <div className={Classes.drpOptions}>
                <ul>
                <li><Link to='/'>Ana sayfa</Link></li>
                <li><Link to='/Kortlar'>Kortlar</Link></li>
                <li><Link to='/Kort_kayit'>Kort kayıt</Link></li>
                <li><Link to='/Eslestirme'>Eşleştirme</Link></li>
                <li><Link to='/Kayit'>Kayıt ol</Link></li>
                </ul>
                </div>
            
        </header>
        </div>
        )
    }

}
export default Navbar;