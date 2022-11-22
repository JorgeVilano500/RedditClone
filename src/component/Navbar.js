import React from 'react'
import { Nav, Navbar as NavbarBs } from 'react-bootstrap'
import {NavLink} from 'react-bootstrap'

function Navbar() {
  return (
    <NavbarBs>

    <Nav>
        <Nav.Link to='/' as={NavLink} >Home</Nav.Link>
    </Nav>
    </NavbarBs>
  )
}

export default Navbar