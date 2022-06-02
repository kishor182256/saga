import { MDBCollapse, MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

const Header = () => {
     const [show,setShow]= useState(false)
  return (
    <>
    <MDBNavbar expand='lg' bgColor='primary' light >
      <MDBContainer fluid >
        <MDBNavbarBrand className='text-white'>
           <span style={{marginRight:'10px'}}><MDBIcon fas icon="book-open"/></span>Contact
        </MDBNavbarBrand>
        <MDBNavbarToggler aria-expanded='false' onClick={()=>setShow(!show)}
         aria-controls='navbar'  className='text-white'
          aria-label='Toggle navigation'>
            <MDBIcon fas icon="bars"/>
        </MDBNavbarToggler>
        <MDBCollapse navbar show={show}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                <MDBNavbarLink className='nav-link'>
                   <NavLink to='/' className='text-white'>Home</NavLink>     
                </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                <MDBNavbarLink className='nav-link'>
                   <NavLink to='/about' className='text-white'>About</NavLink>     
                </MDBNavbarLink>
                </MDBNavbarItem>
                
                <MDBNavbarItem>
                <MDBNavbarLink className='nav-link'>
                   <NavLink to='/adduser' className='text-white'>AddEditUser</NavLink>     
                </MDBNavbarLink>
                </MDBNavbarItem>
                
            </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  )
}

export default Header