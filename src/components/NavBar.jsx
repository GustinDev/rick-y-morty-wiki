import React from 'react';
import SearchBar from './SearchBar';
//NavBar - BT
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props) {
  return (
    <Navbar bg='dark' variant='dark' expand='md' className='w-100 p-3'>
      <Container>
        <Navbar.Brand href='#home'>Ricky Martin Wiki</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#'>Home</Nav.Link>
            <Nav.Link href='#'>Filter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <SearchBar onSearch={props.onSearch} />
      </Container>
    </Navbar>
  );
}

export default NavBar;
