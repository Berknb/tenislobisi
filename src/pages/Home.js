import React from 'react'
import Classes from '../css/Home.module.css'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <>
      <section className={Classes.container}>
    
<div className={Classes.first}>
    
<p>
tenislobisi tüm tenis 
sevdalılarının buluştuğu bir tenis topluluğu platformudur !
<br/>
bu platformda şehrinizde tenis oynayan insanlarla tanışabilir ve aranızda maç planlayıp rekabetin dibine vurabilirsiniz ! 
<br/>
size en yakın kortları görebilir ve  siz de semtinizde bulunan kortların bilgisini tenislobisiyle paylaşarak 
listemizi zenginleştirebilirsiniz.

</p>
</div>
<div className={Classes.second}>
<p>
    Antrenman yapmak için seviyenize göre arkadaş bulabilir
    <br/>
    Lisanslı antrenörseniz tenise başlamak isteyen üyelerimize destek sağlayabilir veya saatlik ders ücretinizi belirterek ilan bırakabilirsiniz.
    <br/>
    Kort işletmeniz,tenis kulubünüz varsa tüm bilgireyile kort kayıt sayfasından ücretsiz bir şekilde kayıt edebilir ve tenis lobisi üyelerine ulaşmasını sağlayabilirsiniz.
</p>
</div>
<a href='https://sportlobi-tv.vercel.app/' target="_blank" rel='noreferrer' className={Classes.third}><p>Bir diğer uygulamamız SportLobi.tv'de futboldan tenise, motor sporlarından bisiklete kadar 11 spor dalında
tüm müsabakaların haftalık ve günlük programına ulaşabilir,
izleme listene ekleyerek hiçbir müsabakadan habersiz kalmazsın! Hemen gidip incelemek için tıkla.</p></a>
</section>
<div className={Classes.haberler}>
    <label>Tenis dünyasından haberler</label>
<iframe title="Tenis haberleri" style={{border:"0",overflow:"hidden"}} scrolling="no" width="300" height="180" src="https://spormeydani.org/ekle?type=sliding1&c=16&n=30"></iframe>
</div>
<div className={Classes.welcome}>
        <li><Link to="/Kayit">Aramıza katılmak için kayıt ol !</Link></li>
        <li><Link to="/Kortlar">Semtindeki kortları görmek için tıkla!</Link></li>
        <li><Link to="/Kortlar">Paylaşmak istediğin kort adresi varsa tıkla!</Link></li>
        <li><Link to="/Kortlar">Kortta rakip mi lazım ? tıkla !</Link></li>
</div>
</>
    )
}
