import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import store from '../Redux/store';
import Chapter from '../components/Chapter';

describe('App', () => {
  it('renders Chapters', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Chapter />
        </BrowserRouter>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
