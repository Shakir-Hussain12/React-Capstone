import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import VerseDetails from './pages/verseDetails';

import { getChapters } from './redux/Quran/quranReducer';
import { getVerses } from './redux/Verse/verseReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChapters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getVerses());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/verseDetails" element={<VerseDetails />} />
    </Routes>
  );
}

export default App;
