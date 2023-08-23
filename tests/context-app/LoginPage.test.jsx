import { render, screen, fireEvent } from '@testing-library/react';

import { UserContext } from '../../src/context-app/context/UserContext';
import { LoginPage } from '../../src/context-app/LoginPage';

describe('<LoginPage /> Tests', () => {
  test('Debe mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>,
    );

    const pre = screen.getByLabelText('pre');

    expect(pre.innerHTML).toBe('null');
  });

  test('Debe llamar a la funcion setUser al hacer click en el botón', () => {
    const setUserMock = jest.fn();

    const userMock = {
      id: 1,
      name: 'Pablo',
      nick: 'dodoria',
      email: 'pablo@dodoria.dev',
    };

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>,
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith(userMock);
  });
});
