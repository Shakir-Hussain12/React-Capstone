import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Col, Container, Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getVerses } from '../redux/Verse/verseReducer';

import './Details.css';
import Verse from '../components/Verse';
import Navigation from '../components/Navigation';

function Details() {
  const location = useLocation() || {};

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVerses(location.state.id));
  }, [dispatch, location.state.id]);

  const { verses } = useSelector((store) => store.Verse);
  return (
    <>
      <Navigation url={`Quran/${location.state.title}`} />
      <Container fluid style={{ textAlign: 'center' }} className="verse-title">
        <Row className={location.state.title === "Al-Ma'idah" ? 'myImg' : ''}>
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
            /Verses
          </h1>
        </Row>
      </Container>
      {
        verses.map((verse) => {
          const { id, words } = verse;
          return (
            <Verse key={id} myVerse={words} mytitle={location.state.title} />
          );
        })
      }
    </>
  );
}

export default Details;
