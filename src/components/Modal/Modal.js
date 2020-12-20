import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handeleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handeleBackdropClick}>
        <div className="Modal">
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
