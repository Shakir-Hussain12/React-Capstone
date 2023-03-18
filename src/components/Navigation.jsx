import React from 'react';
import {
  Container, Form, Nav, Navbar,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { BsMic } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

function Navigation({ url, back }) {
  return (
    <Navbar style={{ background: '#1f5ca3' }}>
      <Container fluid>
        <Navbar.Brand style={{ marginInlineStart: '2%', marginTop: '-2%' }}>
          <NavLink to={back}>
            <MdOutlineArrowBackIosNew style={{ color: 'white' }} />
          </NavLink>
        </Navbar.Brand>
        <Nav
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder={`${url}/`}
              className="me-5"
              aria-label="Search"
            />
          </Form>
          <Nav.Link href="/">
            <BsMic style={{ color: 'white' }} />
          </Nav.Link>
          <Nav.Link href="/">
            <FiSettings style={{ color: 'white' }} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;

Navigation.defaultProps = {
  url: '',
  back: '..',
};

Navigation.propTypes = {
  url: PropTypes.string,
  back: PropTypes.string,
};
