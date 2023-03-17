import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import { GrFormNextLink } from 'react-icons/gr';
import '../pages/Details.css';

function Verse({ myVerse, mytitle }) {
  const { transliteration } = myVerse;
  return (
    <Container fluid style={{ textAlign: 'right' }} className="verse-container">
      <Row>
        <Col style={{ textAlign: 'left' }}>
          <h2>{transliteration.text}</h2>
        </Col>
        <Col>
          <h2>
            Details
            {' '}
            <NavLink
              to="/verseDetails"
              state={{ grandparent: mytitle, parent: myVerse }}
            >
              <Button type="button"><GrFormNextLink /></Button>
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
  mytitle: '',
};

Verse.propTypes = {
  myVerse: PropTypes.oneOfType([PropTypes.object]),
  mytitle: PropTypes.string,
};
