import { render, screen } from '@testing-library/react';
import { ContextApp } from '../../src/context-app/ContextApp';
import { MemoryRouter } from 'react-router-dom';

describe('<ContextApp /> Tests', () => {
  test('Debe mostrar el HomePage', () => {
    render(
      <MemoryRouter>
        <ContextApp />
      </MemoryRouter>,
    );

    expect(screen.getAllByText('Home Page')).toBeTruthy();
  });

  test('Debe mostrar el LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <ContextApp />
      </MemoryRouter>,
    );

    expect(screen.getAllByText('Login Page')).toBeTruthy();
  });

  test('Debe mostrar el AboutPage', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <ContextApp />
      </MemoryRouter>,
    );

    expect(screen.getAllByText('About Page')).toBeTruthy();
  });
});
