import React from 'react'
import {logout, login ,useAuth} from '../firebase'
import { useRef, useState } from 'react'
import {Form , Button , Card , Container } from 'react-bootstrap'



export default function Login() {    
const [loading, setLoading] = useState(false);
const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    
    async function handleLogin(){
        setLoading(true);
        try{
 await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            alert("Şifrenizi doğru girdiğinizden emin olun (capslock açık mı kapalı mı kontrol edin) ve Emailinizi doğru girdiğinizden emin olun!")
            setLoading(false);
        }
     }
    async function handleLogout(){
        setLoading(true)
        try{
            await logout();
        }catch{
        }
setLoading(false)
    }
 
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
            <div className="w-100" style={{maxWidth: 400}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Giriş yap</h2>
                    <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Şifre</Form.Label>
                        <Form.Control id="deneme" type="password" ref={passwordRef} onenter={handleLogin}/>
                    </Form.Group>
                    <Button className="w-100 mt-4" type="submit" disabled={loading || currentUser} onClick={handleLogin}>
                        Giriş yap
                    </Button>
                    <Button className="w-100 mt-4" type="submit" disabled={!currentUser} onClick={handleLogout}>
                        Çıkış yap
                    </Button>
                    </Form>
                </Card.Body>
                <div className="w-100 text-center mt-2">
                Henüz üye değil misiniz ? <a href='/Kayit'>Kayıt ol</a> 
            </div>
                </Card>
                </div>
            
            
        </Container>
        
    )
}
