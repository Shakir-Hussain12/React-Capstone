import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const base = 'https://api.quran.com/api/v4/chapters';
const lang = '?language=en';

export const getChapters = createAsyncThunk('Quran/getChapters', async () => {
  const items = [];
  const res = await axios(`${base}${lang}`);
  const { data } = res;
  data.chapters.map((item) => {
    items.push({
      id: item.id,
      title: item.name_simple,
      verses: item.verses_count,
    });
    return items;
  });
  return items;
});

const initialState = {
  chapters: [],
  total: 0,
  isLoading: true,
};

const quranSlice = createSlice({
  name: 'Quran',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getChapters.pending, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      })
      .addCase(getChapters.fulfilled, (state, { payload }) => {
        const newState = { ...state };
        newState.chapters = payload;
        newState.total = newState.chapters.length;
        newState.isLoading = false;
        return newState;
      })
      .addCase(getChapters.rejected, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      });
  },
});

export default quranSlice.reducer;
