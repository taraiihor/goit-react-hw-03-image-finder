import { Component } from 'react';
import Modal from '../Modal/Modal';
import './ImageGalleryItem.css';

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
    return (
      <li>
        <img
          src={webformatURL}
          alt=""
          className="ImageGalleryItem-image"
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
