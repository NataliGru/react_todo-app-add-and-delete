import { useEffect } from 'react';
import { TodoError } from '../types/TodoError';

type Props = {
  errorMessage: TodoError;
  onChangeError: (errorMessage: TodoError) => void;
};

export const TodoErrors: React.FC<Props> = ({
  errorMessage,
  onChangeError,
}) => {
  const handleCloseError = () => {
    onChangeError(TodoError.none);
  };

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => handleCloseError, 3000);
    }
  }, [errorMessage]);

  return (
    <div className="notification is-danger is-light has-text-weight-normal">
      {/* eslint-disable-next-line */}
      <button type="button" className="delete" onClick={handleCloseError} />

      {errorMessage}
    </div>
  );
};
