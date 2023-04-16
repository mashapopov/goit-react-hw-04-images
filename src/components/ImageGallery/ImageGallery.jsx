// import { Component } from 'react';
import { useState } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
// import { fetchData } from 'helpers/fetchAPI';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import PropTypes from 'prop-types';
import Error from 'components/Error';



const ImageGallery = ({ status, images, onLoadMore }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [modalIMG, setModalIMG] = useState('');

  const showModal = image => {
    setisModalOpen(true);
    setModalIMG(image);
  };

  const closeModal = ({ target, currentTarget }) => {
    if (target === currentTarget) setisModalOpen(false);
  };

  return (
    <>
      <ul className={css.imageGallery}>
        {images.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              image={webformatURL}
              largeImage={largeImageURL}
              tags={tags}
              showModal={showModal}
            />
          );
        })}
      </ul>
      {status === 'pending' && <Loader />}
      {status !== 'idle' && status !== 'pending' && images.length !== 0 && (
        <Button onLoadMore={onLoadMore} />
      )}
      {status === 'rejected' && <Error />}
      {isModalOpen && <Modal largeImage={modalIMG} closeModal={closeModal} />}
    </>
  );
};

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};

export default ImageGallery;



// const ImageGallery = ({ status, images, onLoadMore }) => {
//   // state = {
//   //   images: [],
//   //   page: 1,
//   //   status: 'idle',
//   //   isModalOpen: false,
//   //   modalImg: '',
//   // };
//   const [isModalOpen, setisModalOpen] = useState(false);
//   const [modalIMG, setModalIMG] = useState('');

//   const showModal = image => {
//     setisModalOpen(true);
//     setModalIMG(image);
//   };

//   const closeModal = ({ target, currentTarget }) => {
//     if (target === currentTarget) setisModalOpen(false);
//   };

//   // componentDidUpdate(prevProps, prevState) {
//   //   const { page, images } = this.state;
//   //   try {
//   //     if (page !== prevState.page && page !== 1) {
//   //       fetchData(this.props.query, page).then(response => {
//   //         this.setState({
//   //           images: [...images, ...response.hits],
//   //           status: 'resolved',
//   //         });
//   //       });
//   //     }

//   //     if (prevProps.query !== this.props.query) {
//   //       fetchData(this.props.query, 1).then(response => {
//   //         if (!response.hits.length) {
//   //           this.setState({ status: 'rejected' });
//   //           return;
//   //         }

//   //         this.setState({
//   //           images: response.hits,
//   //           status: 'resolved',
//   //           page: 1,
//   //         });

//   //         if (response.totalHits === images.length + response.hits.length) {
//   //           this.setState({ status: 'idle' });
//   //         }
//   //       });
//   //     }
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // }

//   // onLoadMore = () => {
//   //   this.setState({ status: 'pending', page: this.state.page + 1 });
//   // };

//   // showModal = e => {
//   //   this.setState({ isModalOpen: true });
//   //   this.largeItemFinder(e);
//   // };

//   // closeModal = e => {
//   //   if (e.target === e.currentTarget) this.setState({ isModalOpen: false });
//   // };

//   // largeItemFinder = e => {
//   //   const seachItem = this.state.images.find(
//   //     el => el.webformatURL === e.target.src
//   //   );
//   //   const largeImage = seachItem.largeImageURL;
//   //   this.setState({ modalImg: largeImage });
//   // };

//   // const { status, images, modalImg, isModalOpen } = this.state;
//   return (
//     <>
//       <ul className={css.imageGallery}>
//         {images.map(({ id, webformatURL, tags, largeImageURL }) => {
//           return (
//             <ImageGalleryItem
//               key={id}
//               image={webformatURL}
//               tags={tags}
//               showModal={showModal}
//             />
//           );
//         })}
//       </ul>
//       {status === 'pending' && <Loader />}
//       {status !== 'idle' && status !== 'pending' && images.length !== 0 && (
//         <Button onLoadMore={onLoadMore} />
//       )}
//       {status === 'rejected' && <Error />}
//       {isModalOpen && <Modal largeImage={modalIMG} closeModal={closeModal} />}
//     </>
//   );
// };
