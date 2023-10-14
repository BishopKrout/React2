import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from './FoodMenu';


test('renders menu comp without crashing', () => {
    render (
        <MemoryRouter>
            <Menu />
        </MemoryRouter>
    );
});

test('displays the correct title', () => {
    render(
        <MemoryRouter>
            <Menu title="Example Menu" />
        </MemoryRouter>
    );
    expect(screen.getByText('Example Menu')).toBeInTheDocument();
});

test('displays the correct num of items', () => {
    const items = [{id:1, name: 'Item1'}, {id:2, name: 'Item2'}];
    render(
        <MemoryRouter>
            <Menu items={items} />
        </MemoryRouter>
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
});