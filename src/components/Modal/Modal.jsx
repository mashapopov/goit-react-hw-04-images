import css from './Modal.module.css';
// import { Component } from 'react';
import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ closeModal, largeImage }) => {
  // state = { modalImg: this.props.largeImage };

  // onPressESC = ({ code }) => {
  //   if (code === 'Escape') {
  //     this.props.closeModal(this.state);
  //   }
  // };
  const onPressESC = useCallback(
    ({ code, target, currentTarget }) => {
      if (code === 'Escape') {
        closeModal(target, currentTarget);
      }
    },
    [closeModal]
  );

  // componentDidMount() {
  //   window.addEventListener('keydown', this.onPressESC);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.onPressESC);
  // }

  // render() {
  //   const { closeModal, largeImage, tags } = this.props;
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
