import { Component } from 'react';

class ImageGallery extends Component {
  state = {
    imageName: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.nameImage !== this.props.nameImage) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.nameImage}&page=1&key=8052974-676f52671a56653f7826cdc16&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(respons => respons.json())
        .then(imageName => {
          this.setState({ imageName: imageName.hits });
        });
    }
  }
  render() {
    return (
      <ul className="ImageGallery">
        {this.state.imageName &&
          this.state.imageName.map(item => {
            return (
              <li key={item.id}>
                <img
                  src={item.webformatURL}
                  alt=""
                  className="ImageGalleryItem-image"
                />
              </li>
            );
          })}
      </ul>
    );
  }
}

export default ImageGallery;
