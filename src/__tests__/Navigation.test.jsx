import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import store from '../redux/store';
import Navigation from '../components/Navigation';

describe('App', () => {
  it('renders Navigation', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
