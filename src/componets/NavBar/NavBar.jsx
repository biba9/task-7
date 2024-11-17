import './NavBar.css'
import imgLogo from './../../assets/images/logo.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
      
        
  //     <nav className='SH-Navbar'>
  //           <img src={imgLogo} alt="" />
  //             <button className="navbar-toggler mt-3 ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  //   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //   <span className="navbar-toggler-icon"></span>
  //   <span>menu</span>
  // </button>

  //         <div>
  //             <ul className='menu' >
  //                 <li>
  //                     Home
  //                 <CiHome/>

  //                 </li>
  //                 <li>About</li>
  //                 <li>Services</li>
  //                 <li>Pages</li>
  //                 <li>Blog</li>
  //                 <li>Contact</li>
                  
  //             </ul>
  //         </div>
      //   </nav>
   <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
          <img src={imgLogo} alt="" />
          <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll SH-Navbar">
          <Nav
            className="me-auto my-2 my-lg-0 NAV-ME"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={'/'} >Home</Link>
            <Link  to={'/about'}>about</Link>
                    <Link  to={'/contact'}>contact</Link>

     
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar