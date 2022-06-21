import React from 'react'
import {Navbar,Container,Button,NavDropdown,Nav,Form,FormControl }from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {faBullseye} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <div >
      <Navbar bg="dark"  expand="lg" variant="dark">
  <Container fluid>
    <Navbar.Brand  href="/">
      <div className="row">
        <div className="col-4">
        <FontAwesomeIcon size='3x' icon={faBullseye} className=' text-center'/>
          </div>
          <div className="col-8">
          <p className='mt-3' >CONCENTRIA</p>
          </div>
          
           </div>
            </Navbar.Brand>
   
    <Navbar.Toggle  aria-controls="navbarScroll" />
    <Navbar.Collapse  id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Link className='nav-link ' to="/">HOME</Link>
        <Link className='nav-link ' to="todo">TODO-LIST</Link>
        <Link className='nav-link ' to="meditation">MEDITATION</Link>
        <Link className='nav-link ' to="games">GAMES</Link>
        <NavDropdown    variant="dark" title="JOIN US" id="navbarScrollingDropdown">
          <NavDropdown.Item   href="register">REGISTER</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item   href="login">LOGIN</NavDropdown.Item>
        </NavDropdown>
        <Link className='nav-link  ' to="contactus" >
          CONTACT US
        </Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<hr className='text-white'/>
    </div>
  )
}

export default Header