import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Header.css'

const Header = () => {

  const { user, logOut } = useContext(AuthContext)
  
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => {
      console.error(error)
    })
  }

    return (
      <div className="mb-3 position-sticky top-0 header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to="/">News Portal </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">All Category</Nav.Link>
                <Nav.Link href="#pricing">Home</Nav.Link>
                <Nav.Link href="#pricing">News</Nav.Link>
                {/*   <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Nav className='d-flex justify-content-center align-items-center'>
                <Nav.Link href="#deets">
                  {user?.uid ? <><span>{user?.displayName}</span> <Button variant='light' className='ml-2' onClick={handleLogout}>Logout</Button></> : <><Link to='/login'>Login</Link><Link to='/register'>Register</Link></> }
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  {
                    user?.photoURL ? <Image roundedCircle src={user.photoURL} style={{height: '40px'}}></Image> : <FaUserAlt></FaUserAlt>
                  }
                </Nav.Link>
              </Nav>
              <div className=" d-block d-lg-none">
                <LeftSideNav></LeftSideNav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;