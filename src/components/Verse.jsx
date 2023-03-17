import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import '../pages/Details.css';
import { NavLink } from 'react-router-dom';

function Verse({ myVerse }) {
  return (
    <Container fluid style={{ textAlign: 'right' }} className="verse-container">
      <Row>
        <Col style={{ textAlign: 'left' }}>
          <h2>{myVerse}</h2>
        </Col>
        <Col>
          <h2>
            Details
            {' '}
            <NavLink
              to="/verseDetails"
              state={{ id: myVerse.id }}
            >
              <Button type="button" id="verse-btn">hi</Button>
            </NavLink>
            {' '}
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Verse;

Verse.defaultProps = {
  myVerse: '',
};

Verse.propTypes = {
  myVerse: PropTypes.string,
};
