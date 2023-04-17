import css from './Modal.module.css';
import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ closeModal, largeImage }) => {
  const onPressESC = useCallback(
    ({ code, target, currentTarget }) => {
      if (code === 'Escape') {
        closeModal(target, currentTarget);
      }
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', onPressESC);
    return () => window.removeEventListener('keydown', onPressESC);
  }, [onPressESC]);

  return (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>
        <img src={largeImage} alt="large" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};

export default Modal;
