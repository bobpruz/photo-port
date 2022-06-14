// __tests__/Gallery.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

afterEach(cleanup);

describe('Gallery component', () => {
  it('renders', () => {
    render(<Gallery />);
  });
  
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Gallery />);
    
    expect(asFragment()).toMatchSnapshot();
  });
})
