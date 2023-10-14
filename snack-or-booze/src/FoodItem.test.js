import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import '@testing-library/jest-dom';
import Item from './FoodItem';  // adjust the import to your file structure

const items = [
  { id: '1', name: 'Item1', description: 'Description1', recipe: 'Recipe1', serve: 'Serve1' },
  { id: '2', name: 'Item2', description: 'Description2', recipe: 'Recipe2', serve: 'Serve2' }
];

test('displays the correct item information', () => {
    render(
      <MemoryRouter initialEntries={['/items/1']}>
        <Route path="/items/:id">
          <Item items={items} cantFind="/not-found" itemType="example" />
        </Route>
      </MemoryRouter>
    );
  
    expect(screen.getByText('Item1')).toBeInTheDocument();
    expect(screen.getByText('Description1')).toBeInTheDocument();
    expect(screen.getByText('Recipe:')).toBeInTheDocument();
    expect(screen.getByText('Recipe1')).toBeInTheDocument();
    expect(screen.getByText('Serve:')).toBeInTheDocument();
    expect(screen.getByText('Serve1')).toBeInTheDocument();
  });

test('redirects when item is not found', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/items/3']}>
      <Route path="/items/:id">
        <Item items={items} cantFind="/not-found" itemType="example" />
      </Route>
      <Route path="/not-found">
        <div>Not Found</div>
      </Route>
    </MemoryRouter>
  );

  expect(container.innerHTML).toMatch('Not Found');
});
