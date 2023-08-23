import { render, screen, fireEvent } from '@testing-library/react';
import { MultipleCustomHooksApp } from '../../src/components/MultipleCustomHooksApp';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('<MultipleCustomHooksApp /> Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    useCounter.mockReturnValue({
      counter: 1,
      increment: jest.fn(),
    });

    render(<MultipleCustomHooksApp />);

    expect(screen.getByText('Rick and Morty Characters')).toBeTruthy();
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  test('Debe mostrar un personaje', () => {
    useFetch.mockReturnValue({
      data: {
        image: 'http://image.png',
        name: 'el nombre',
        species: 'la especie',
      },
      isLoading: false,
      hasError: null,
    });

    useCounter.mockReturnValue({
      counter: 1,
      increment: jest.fn(),
    });

    render(<MultipleCustomHooksApp />);

    const btnNextChar = screen.getByRole('button', { name: 'Next Character' });

    expect(screen.getByText('el nombre')).toBeTruthy();
    expect(screen.getByText('la especie')).toBeTruthy();

    expect(btnNextChar.disabled).toBeFalsy();
  });

  test('Debe incrementar el id de la llamada?', () => {
    const mockCounter = {
      counter: 1,
      increment: jest.fn(),
    };

    useFetch.mockReturnValue({
      data: {
        image: 'http://image.png',
        name: 'el nombre',
        species: 'la especie',
      },
      isLoading: false,
      hasError: null,
    });

    useCounter.mockReturnValue(mockCounter);

    render(<MultipleCustomHooksApp />);

    const btnNextChar = screen.getByRole('button', { name: 'Next Character' });

    fireEvent.click(btnNextChar);

    expect(mockCounter.increment).toHaveBeenCalled();
  });
});
