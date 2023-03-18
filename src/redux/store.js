import { configureStore } from '@reduxjs/toolkit';
import quranReducer from './Quran/quranReducer';
import verseReducer from './Verse/verseReducer';

const store = configureStore({
  reducer: {
    Quran: quranReducer,
    Verse: verseReducer,
  },
});

export default store;
