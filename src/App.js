import React from 'react';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import ErrorView from './components/ErrorView';

class App extends React.Component {
  state = {
    articles: [],
    images: '',
    currentPage: 1,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.images !== this.state.images) {
      this.setState({ loading: true });
      this.fetchArticles();
    }
  }

  handleFormSubmit = query => {
    this.setState({ images: query, currentPage: 1, articles: [], error: null });
  };

  fetchArticles = () => {
    const { images, currentPage } = this.state;
    fetch(
      `https://pixabay.com/api/?q=${images}&page=${currentPage}&key=8052974-676f52671a56653f7826cdc16&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(new Error('нема зображення'));
      })
      .then(articles => {
        this.setState(prevState => ({
          articles: [...prevState.articles, ...articles.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  render() {
    const { articles, loading, error } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && <ErrorView message={error.message} />}
        <ImageGallery articles={articles} />

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
      </div>
    );
  }
}

export default App;
