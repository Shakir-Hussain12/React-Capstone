import React from 'react';
import {
  Col,
  Container, Form, Nav, Navbar, Row,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Chapter from '../components/Chapter';
import './Home.css';

function Home() {
  const { chapters, total } = useSelector((store) => store.Quran);
  const imgChapters = ['Fatiha.jpg', 'Baqara.png', 'Imran.png', 'Nisa.png', 'Maidah.jpg', 'Anam.png'];
  const getItems = () => {
    const items = [];
    if (chapters.length > 1) {
      for (let i = 0; i < imgChapters.length; i += 2) {
        items.push(
          <Row gx="5" key={chapters[i].id}>
            <Col className={i === 4 ? 'fix' : 'myCol'}>
              <Chapter chapter={imgChapters[i]} mychapter={chapters[i]} />
            </Col>
            <Col>
              <Chapter chapter={imgChapters[i + 1]} mychapter={chapters[i + 1]} />
            </Col>
          </Row>,
        );
      }
    }
    return items;
  };
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
                placeholder="Quran"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container fluid style={{ textAlign: 'center' }}>
        <Row gx="3">
          <Col>
            <img src="./Quran.png" alt="none" className="img-fluid" />
          </Col>
          <Col className="quran-details">
            <h1> Holy Quran </h1>
            <h3>
              Total Chapters :
              {' '}
              {total}
            </h3>
          </Col>
        </Row>
        <Row style={{ textAlign: 'left' }}>
          <h1 className="heading">Chapter Details</h1>
        </Row>
      </Container>
      <Container fluid style={{ textAlign: 'right' }} id="myDiv">
        { getItems() }
      </Container>
    </>
  );
}
export default Home;
