import { Container, Row, Col, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

function Headers() {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand href="/">Family Pizza</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <LinkContainer to='/cart'>
                                <Nav.Link ><i className='fas fa-shopping-cart'></i>Cesta</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/login'>
                                <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
                            </LinkContainer>
                            
                        </Nav>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
        </header>
    )
}

export default Headers
