import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Button,
  Col,
  Container, Row,
} from 'react-bootstrap';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import './Details.css';
import Navigation from '../components/Navigation';

function useVerseDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const { grandparent, parent } = location.state;

  const displayDetails = () => {
    const { transliteration, translation, ...others } = parent;
    let details = Object.keys(others);

    const items = [];
    let mykey = 'abcdh4';
    details.forEach((detail) => {
      mykey += 1;
      items.push(
        <Row key={mykey}>
          <Col>{detail}</Col>
          <Col>{parent[detail]}</Col>
        </Row>,
      );
    });

    details = Object.keys(translation);
    details.forEach((detail) => {
      mykey += 1;
      items.push(
        <Row key={mykey}>
          <Col>Translation</Col>
          <Col>{translation[detail]}</Col>
        </Row>,
      );
    });

    details = Object.keys(transliteration);
    details.forEach((detail) => {
      mykey += 1;
      items.push(
        <Row key={mykey}>
          <Col>Transliteration</Col>
          <Col>{transliteration[detail]}</Col>
        </Row>,
      );
    });
    return items;
  };

  return (
    <>
      <Navigation url={`Quran/${grandparent}/${parent.transliteration.text}/verseDetails}`} />
      <Container className="verse-detail-cotainer">
        {
          displayDetails(parent)
        }
      </Container>
      <Button type="button" onClick={() => navigate(-1)} id="per-btn">
        <MdOutlineArrowBackIosNew />
      </Button>
    </>
  );
}

export default useVerseDetails;
