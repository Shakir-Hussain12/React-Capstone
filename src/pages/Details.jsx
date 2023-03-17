import React from 'react';
import { useLocation } from 'react-router-dom';
import './Details.css';

import {
  Col, Container, Form, Nav, Navbar, Row,
} from 'react-bootstrap';
import Verse from '../components/Verse';

function Details() {
  const location = useLocation();
  return (
    <>
      <Navbar bg="light">
        <Container fluid>
          <Navbar.Brand href="#">Back</Navbar.Brand>
          <Nav
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Quran/Chapters"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container fluid style={{ textAlign: 'center' }} className="verse-title">
        <Row className={location.state.title === 'Maidah' ? 'myImg' : ''}>
          <Col>
            <img src={location.state.image} alt="none" />
          </Col>
          <Col>
            <h1>{location.state.title}</h1>
            <h3>
              Verses:
              {' '}
              {location.state.verseCount}
            </h3>
          </Col>
        </Row>
        <Row style={{ textAlign: 'left' }}>
          <h1 className="heading">
            {location.state.title}
            /Verse Details
          </h1>
        </Row>
      </Container>
      <Verse myVerse="Verse 1" />
    </>
  );
}

export default Details;
