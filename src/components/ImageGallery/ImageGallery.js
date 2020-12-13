import { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import './ImageGallery.css';

class ImageGallery extends Component {
  state = {
    imageName: '',
    currentPage: 1,
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.nameImage !== this.props.nameImage) {
      this.setState({ loading: true });
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    fetch(
      `https://pixabay.com/api/?q=${this.props.nameImage}&page=${this.state.currentPage}&key=8052974-676f52671a56653f7826cdc16&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(respons => respons.json())
      .then(imageName => {
        this.setState(prevProps => ({
          imageName: [...prevProps.imageName, ...imageName.hits],
          currentPage: prevProps.currentPage + 1,
        }));
      })
      .finally(() => this.setState({ loading: false }));
  };
  render() {
    return (
      <ul className="ImageGallery">
        {this.state.imageName &&
          this.state.imageName.map(item => {
            return (
              <li>
                <img
                  src={item.webformatURL}
                  alt=""
                  className="ImageGalleryItem-image"
                />
              </li>
            );
          })}
        {this.state.loading && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={5000} //3 secs
          />
        )}
        {/* <button type="button" className="Button" onClick={this.fetchArticles}>
          <span>Загрузити наступні зображення</span>
        </button> */}
      </ul>
    );
  }
}

export default ImageGallery;
