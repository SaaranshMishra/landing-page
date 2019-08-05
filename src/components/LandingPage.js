import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Card, 
  CardImg
} from 'reactstrap';
import { Link } from 'react-router-dom';

function LandingPage() {
	const [open, setOpen] = useState(false)
	
	const toggle = e => {
		setOpen(!open)
	}
	
	const btnStyle = {
		whiteSpace: 'normal',
		wordWrap: 'break-word',
	}

  return (
  	<div>
		    <Navbar color="dark" dark expand="md" className="mb-5">
	          <NavbarBrand href="/">ExpertEvidence.Org</NavbarBrand>
	          <NavbarToggler onClick={toggle} />
	          <Collapse isOpen={open} navbar>
	            <Nav className="ml-auto" navbar>
	              <NavItem className="p-2">
	                <Button outline color="info"><Link to='/help' className="text-white text-decoration-none">Help</Link></Button>
	              </NavItem>
	              <NavItem className="p-2">
	                <Button outline color="info"><Link to="/sign-in" className="text-white text-decoration-none">Login</Link></Button>
	              </NavItem>
	            </Nav>
	          </Collapse>
	        </Navbar>
  		
  		<Container className="bg-light mw-100 mh-100">
	        <Row>
		        <Col xs={6} className="p-10 m-10 d-flex flex-column">
			        <h3 className="font" className="mt-100 p-5 mb-2">Get Content from the internet in evidentiary quality</h3>
			        <Button outline color="primary" className="ml-5 p-2 float-left w-25" style={btnStyle}>Get Started</Button>
		        </Col>
		        <Col xs={6}>
		        	<Card>
		        		<CardImg src="https://media.giphy.com/media/3o6MbiX7DNPwga0zq8/giphy.gif" />
		        	</Card>
		        </Col>
	        </Row>
        </Container>
    </div>
  );
}

export default LandingPage;
