import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { current, logout } from '../Redux/Actions/AuthActions';
import { useEffect } from 'react';

const NavAuth=()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(current())
  },[])
  const token = localStorage.getItem('token')
  const user = useSelector(state => state.AuthReducer.user)
  
  const navigate = useNavigate()
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <img src='/appartement.png' alt='logo' style={{margin:"10px",width:"139px"}}/>

          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Accueil</Nav.Link>

            {
              token && user ?

              <>
                <Nav.Link as={Link} to='/Profil'>Profil</Nav.Link>
                {
                  user.role == "admin" &&

                  <>
                     <Nav.Link as={Link} to='/ListUser'>Utilisateurs</Nav.Link>                      
                      <Nav.Link as={Link} to='/AddProduct'>Ajouter Immobilier</Nav.Link>
                  </>
                
                }
                
                <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}} >Se deconnecter</Nav.Link>
                <Nav.Link >{user.name}</Nav.Link>
              </>

              :

              <>
            
              <Nav.Link as={Link} to='/Register'>Créer un compte</Nav.Link>             
              <Nav.Link as={Link} to='/Login'>Se connecter</Nav.Link>
              </>
            
            
            
            
            
            }


<Nav.Link as={Link} to='/ProductList'>Immobilier</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
} 

export default NavAuth