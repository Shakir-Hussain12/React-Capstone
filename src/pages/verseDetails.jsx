import React from 'react';
import {
  Container, Form, Nav, Navbar,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function verseDetails({ id }) {
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
                placeholder="Quran/Chapters/Verses/VerseDetails"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default verseDetails;

verseDetails.defaultProps = {
  id: '',
};

verseDetails.propTypes = {
  id: PropTypes.number,
};
