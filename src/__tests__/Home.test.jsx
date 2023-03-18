import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import store from '../redux/store';

describe('App', () => {
  it('renders Home', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  it('check for input', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    expect(getByText('Holy Quran')).toBeInTheDocument();
    expect(getByText('Total Chapters : 0')).toBeInTheDocument();
  });

  it('checks inital store values for Chapters', () => {
    const inital = {
      chapters: [],
      total: 0,
      isLoading: true,
    };

    expect(store.getState().Quran).toEqual(inital);
  });

  it('checks inital store values for Verses', () => {
    const inital = {
      verses: [],
      total: 0,
      isLoading: true,
    };

    expect(store.getState().Verse).toEqual(inital);
  });
});
