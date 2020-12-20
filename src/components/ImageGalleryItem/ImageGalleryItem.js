import { Component } from 'react';
import Modal from '../Modal/Modal';
import './ImageGalleryItem.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { webformatURL, largeImageURL } = this.props;
    const { showModal } = this.state;
    return (
      <li>
        <img
          src={webformatURL}
          alt=""
          className="ImageGalleryItem-image"
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
        )}
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
