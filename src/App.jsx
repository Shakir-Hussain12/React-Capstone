import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import VerseDetails from './pages/verseDetails';

import { getChapters } from './redux/Quran/quranReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChapters());
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
