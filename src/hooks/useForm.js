import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  function onInputChange({ target }) {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  }

  function resetForm() {
    setFormState(initialForm);
  }

  return {
    formState,
    onInputChange,
    resetForm,
  };
};
