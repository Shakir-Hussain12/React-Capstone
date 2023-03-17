import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const base = 'https://api.quran.com/api/v4/verses/by_chapter/';
const end = '?language=en&words=true&page=1&per_page=10';

export const getVerses = createAsyncThunk('Verses/getVerses', async () => {
  const items = [];
  const res = await axios(`${base}/2${end}`);
  const { data } = res;
  data.verses.map((item) => {
    items.push({
      id: item.id,
      words: item.words[0],
    });
    return items;
  });
  return items;
});

const initialState = {
  verses: [],
  total: 0,
  isLoading: true,
};

const verseSlice = createSlice({
  name: 'Verse',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getVerses.pending, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      })
      .addCase(getVerses.fulfilled, (state, { payload }) => {
        const newState = { ...state };
        newState.verses = payload;
        newState.total = newState.verses.length;
        newState.isLoading = true;
        return newState;
      })
      .addCase(getVerses.rejected, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      });
  },
});

export default verseSlice.reducer;
