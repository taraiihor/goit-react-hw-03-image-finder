import React from 'react';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends React.Component {
  state = {
    articles: [],
    images: '',
    currentPage: 1,
    loading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.images !== this.state.images) {
      this.setState({ loading: true });
      this.fetchArticles();
    }
  }

  handleFormSubmit = quety => {
    this.setState({ images: quety, currentPage: 1, articles: [] });
  };

  fetchArticles = () => {
    fetch(
      `https://pixabay.com/api/?q=${this.state.images}&page=${this.state.currentPage}&key=8052974-676f52671a56653f7826cdc16&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(respons => respons.json())
      .then(articles => {
        this.setState(prevState => ({
          articles: [...prevState.articles, ...articles.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(() => this.setState({ loading: false }));
  };
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };
  render() {
    const { articles, showModal, loading } = this.state;
    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Відкрити модалку
        </button>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery articles={articles} />
        {showModal && <Modal />}

        {loading && (
          <Loader
            className="Button"
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={5000} //3 secs
          />
        )}
        {articles.length > 11 && <Button onClick={this.fetchArticles} />}
      </>
    );
  }
}

export default App;
