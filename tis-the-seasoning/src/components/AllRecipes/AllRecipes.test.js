import React from 'react';
import { render } from '@testing-library/react';
import AllRecipes from './AllRecipes';

test('All receipes renders learn react link', () => {
  const { getByText } = render(<AllRecipes />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});