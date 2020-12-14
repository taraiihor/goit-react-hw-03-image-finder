import { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import './ImageGallery.css';

class ImageGallery extends Component {
  state = {
    imageName: [],
    currentPage: 1,
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.images !== this.props.images) {
      this.setState({ loading: true, currentPage: 1, imageName: [] });
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    fetch(
      `https://pixabay.com/api/?q=${this.props.images}&page=${this.state.currentPage}&key=8052974-676f52671a56653f7826cdc16&image_type=photo&orientation=horizontal&per_page=12`,
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
      <>
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
        {this.state.loading && (
          <Loader
            className="Button"
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={5000} //3 secs
          />
        )}
        {this.state.imageName.length > 11 && !this.state.loading && (
          <button type="button" className="Button" onClick={this.fetchArticles}>
            <span>Загрузити наступні зображення</span>
          </button>
        )}
      </>
    );
  }
}

export default ImageGallery;
