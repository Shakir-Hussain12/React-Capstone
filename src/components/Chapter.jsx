import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../pages/Home.css';

function Chapter({ chapter, mychapter }) {
  return (
    <>
      <NavLink
        to="/details"
        state={{ image: chapter, title: mychapter.title, verseCount: mychapter.verses }}
        className={(link) => (link.isActive ? 'link active' : 'link')}
      >
        <Button type="button">hi</Button>
        <img src={`./${chapter}`} alt="none" className="img-fluid" />
        <h2>{mychapter.title}</h2>
        <p>
          Verses:
          {' '}
          {mychapter.verses}
        </p>
      </NavLink>
    </>
  );
}

export default Chapter;

Chapter.defaultProps = {
  chapter: '',
  mychapter: {
    title: '',
    verses: '',
  },
};

Chapter.propTypes = {
  chapter: PropTypes.string,
  mychapter: PropTypes.shape({
    title: PropTypes.string,
    verses: PropTypes.number,
  }),
};
