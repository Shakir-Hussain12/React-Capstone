import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Verse from '../components/Verse';

describe('App', () => {
  it('renders Verses', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Verse />
        </BrowserRouter>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
