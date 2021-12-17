import React from 'react'
import { Signup, useAuth} from '../firebase'
import { useRef, useState } from 'react'
import {Form , Button , Card , Container } from 'react-bootstrap'



export default function SignUp() {    
const [loading, setLoading] = useState(false);
const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

   async function handleSignup(){
       setLoading(true);
       try{
await Signup(emailRef.current.value, passwordRef.current.value)
       } catch {
           alert("Email adresinizi doğru girdiğinizden emin olun ve en az 6 karakterlik bir şifre girin ! ");
           setLoading(false);
       }
    }
    
 
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
            <div className="w-100" style={{maxWidth: 400}}>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Kayıt ol</h2>
                    <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Şifre</Form.Label>
                        <Form.Control id="deneme" type="password" ref={passwordRef} onenter={handleSignup}/>
                    </Form.Group>
                    <Button className="w-100 mt-4" type="submit" disabled={loading || currentUser} onClick={handleSignup}>
                        Kayıt ol
                    </Button>
                    </Form>
                </Card.Body>
                <div className="w-100 text-center mt-2">
                Hesabınız var mı ? <a href='/Giris_yap'>Girip yap</a> 
            </div>
                </Card>
                </div>
            
            
        </Container>
        
    )
}
