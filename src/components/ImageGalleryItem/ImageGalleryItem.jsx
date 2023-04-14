import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, tags, showModal }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        src={image}
        alt={tags}
        className={css.imageGalleryItemIMG}
        onClick={showModal}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};
