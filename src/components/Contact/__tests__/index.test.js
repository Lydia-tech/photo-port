import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
  it('renders', () => {
    render(<ContactForm></ContactForm>);
  });
  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm></ContactForm>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('has the heading Contact me', () => {
    const { getByTestId } = render(<ContactForm></ContactForm>);
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
  });
});

describe('Submit button is visible', () => {
  it('says Submit', () => {
    const { getByTestId } = render(<ContactForm></ContactForm>);
    expect(getByTestId('sub-button')).toHaveTextContent('Submit')
  });
});