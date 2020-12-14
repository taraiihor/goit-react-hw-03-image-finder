import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

class App extends React.Component {
  state = {
    articles: [],
    images: '',
    currentPage: 1,
    loading: false,
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
  render() {
    const { articles } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ul className="ImageGallery">
          {articles.map(article => (
            <li key={article.id}>
              <img
                src={article.webformatURL}
                alt=""
                className="ImageGalleryItem-image"
              />
            </li>
          ))}
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
        {this.state.articles.length > 11 && !this.state.loading && (
          <button type="button" className="Button" onClick={this.fetchArticles}>
            <span>Загрузити наступні зображення</span>
          </button>
        )}
      </>
    );
  }
}

export default App;

// class App extends React.Component {
//   state = {
//     images: [],
//   };
//   handleFormSubmit = images => {
//     console.log(images);
//     this.setState({ images });
//   };

//   render() {
//     return (
//       <>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ImageGallery images={this.state.images} />
//         {/* <Button updatePage={this.updatePage} /> */}
//       </>
//     );
//   }
// }

// export default App;
