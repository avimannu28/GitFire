import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import  UserContext  from '../context/UserContext'
// import "bootstrap/dist/css/bootstrap.min.css"
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText,Button} from "reactstrap"
// import { Button } from 'bootstrap'

function Header() {
    const context=useContext(UserContext)
    const [isOpen,setIsOpen]=useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    const remove=()=>{
        localStorage.removeItem("user")
        context.setUser(null)
        window.location.reload()
        
    }

    return (
       <Navbar color='black' light expand="md" >
       <NavbarBrand><Link to="/" className='text-white'>GithHub Firebase</Link></NavbarBrand>
       <NavbarText className='text-white'>{
        localStorage.getItem("user")?localStorage.getItem("user"):""
       }</NavbarText>
        <NavbarToggler onClick={toggle} style={{backgroundColor:"white"}} />
        <Collapse isOpen={isOpen} navbar>
            <Nav  className='ml-auto' navbar>
            {
                localStorage.getItem("user")?(<NavItem> 
                    <Button onClick={remove} className='text-white'>
                        Logout
                    </Button>
                </NavItem>):( 
                <>
                <NavItem> 
                    <NavLink tag={Link} to="/signup" className='text-white'>
                        Signup
                    </NavLink>
                </NavItem>
                 <NavItem> 
                    <NavLink tag={Link} to="/signin" className='text-white'>
                        Signin
                    </NavLink>
                </NavItem>
                </>
                )
            }
               
                 
            </Nav>
        </Collapse>
       </Navbar>
    )
}

export default Header
