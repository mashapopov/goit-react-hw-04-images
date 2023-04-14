import css from './Modal.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  state = { modalImg: this.props.largeImage };

  onPressESC = ({ code }) => {
    if (code === 'Escape') {
      this.props.closeModal(this.state);
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onPressESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onPressESC);
  }

  render() {
    const { closeModal, largeImage, tags } = this.props;

    return (
      <div className={css.overlay} onClick={closeModal}>
        <div className={css.modal}>
          <img src={largeImage} alt={tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};

export default Modal;
