import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login } from '../Redux/Actions/AuthActions';


const Login=()=>{

   
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        dispatch(login({email,password},navigate))
    }

    return(
        <div className='posForm'> 
            <div className='sizeForm'>
                <Form>
                
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Adresse mail</Form.Label>
                    <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Entrer email" />        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Entrer mot de passe" />        
                    </Form.Group>        
                            
                    <Button onClick={(e)=> handleLogin(e)}  variant="outline-dark" type="submit">
                        Se connecter
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login