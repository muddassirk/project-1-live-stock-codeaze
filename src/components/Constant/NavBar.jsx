import React from 'react'
import { Navbar, Nav, } from 'react-bootstrap'

const NavBar = () => {
    return (
        <div className='primaryColor'>
            <div className='container primaryColor'>
                <Navbar className='primaryColor text-white' expand="lg">
                    <Navbar.Brand className='text-white' href="#">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                        <Nav
                            className="ml-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='text-white' href="#action1">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#action2">About</Nav.Link>
                            <Nav.Link className='text-white' href="#action3">Help</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default NavBar
