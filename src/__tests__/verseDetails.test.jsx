import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import VerseDetails from '../pages/verseDetails';

describe('App', () => {
  it('renders verseDetails', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <VerseDetails />
        </BrowserRouter>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
