import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home'; // adjust the import if necessary


describe('Home component', () => {
  it('renders without crashing', () => {
    render(<Home snacks={[]} drinks={[]} />);
  });

  it('displays the welcome message', () => {
    const { getByText } = render(<Home snacks={[]} drinks={[]} />);
    expect(getByText('Welcome to Snack or Booze')).toBeInTheDocument();
  });

  it('displays the correct number of snacks', () => {
    const snacks = [{}, {}, {}];
    const { getByText } = render(<Home snacks={snacks} drinks={[]} />);
    expect(getByText('3 Snacks Available')).toBeInTheDocument();
  });

  it('displays the correct number of drinks', () => {
    const drinks = [{}, {}, {}, {}];
    const { getByText } = render(<Home snacks={[]} drinks={drinks} />);
    expect(getByText('4 Drinks Available')).toBeInTheDocument(); // adjusted expectation
  });

  it('handles empty drinks array gracefully', () => {
    const { getByText } = render(<Home snacks={[]} drinks={[]} />);
    expect(getByText('0 Drinks Available')).toBeInTheDocument(); // You might want to fix the component to display 0 instead of false
  });
});
