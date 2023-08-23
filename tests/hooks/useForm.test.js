import { renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';
import { act } from '@testing-library/react';

describe('useForm Tests', () => {
  const initialForm = {
    name: 'dodoria',
    email: 'dodoria@dev.cl',
  };

  test('Debe de regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      formState: initialForm,
      onInputChange: expect.any(Function),
      resetForm: expect.any(Function),
    });
  });

  test('Debe de cambiar name del formulario', () => {
    const newName = 'fat_dodoria';

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newName,
        },
      });
    });

    expect(result.current.formState.name).toBe(newName);
  });

  test('Debe dejar el formulario en su estado inicial al hacer el reset', () => {
    const newName = 'fat_dodoria';

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, resetForm } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newName,
        },
      });

      resetForm();
    });

    expect(result.current.formState).toEqual(initialForm);
  });
});
