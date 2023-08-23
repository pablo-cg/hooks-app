import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/context-app/HomePage';
import { UserContext } from '../../src/context-app/context/UserContext';

describe('<HomePage /> Tests', () => {
  const userMock = {
    id: 1,
    name: 'test name',
    nick: 'test nick',
    email: 'email@test.dev',
  };

  test('Debe mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>,
    );

    const pre = screen.getByLabelText('pre');

    expect(pre.innerHTML).toBe('null');
  });

  test('Debe mostrar el componente con el usuario', () => {
    render(
      <UserContext.Provider value={{ user: userMock }}>
        <HomePage />
      </UserContext.Provider>,
    );

    const pre = screen.getByLabelText('pre');

    expect(pre.innerHTML).toContain(JSON.stringify(userMock, null, 2));
  });
});
