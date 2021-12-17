import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Courts from './pages/Courts'
import Navbar from './layout/Navbar';
import Newcourt from './pages/Newcourt';
import Footer from './layout/Footer';
import FreeCourts from './pages/FreeCourts'
import PaidCourts from './pages/PaidCourts'
import Signup from './pages/Signup';
import MatchingMain from './matching_components/MatchingMain'
import Login from './pages/Login';



function App() {
  return (
    <div>
      <div style={{paddingBottom:'150px'}}>
      <Navbar/>
      <Routes>
      <Route path='/Kortlar' element={<Courts/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Kort_kayit' element={<Newcourt/>}></Route>
        <Route path='/FreeCourts' element={<FreeCourts/>}></Route>
        <Route path='/PaidCourts' element={<PaidCourts/>}></Route>
        <Route path='/Eslestirme' element={<MatchingMain/>}></Route>
        <Route path='/Kayit' element={<Signup/>}></Route> 
        <Route path='/Giris_yap' element={<Login/>}></Route>          
      </Routes>
      </div>
      <Footer/>
      </div>
  );
}

export default App;
