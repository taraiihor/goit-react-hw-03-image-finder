import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
class App extends React.Component {
  state = {
    nameImage: '',
  };
  handleFormSubmit = nameImage => {
    console.log(nameImage);
    this.setState({ nameImage });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery nameImage={this.state.nameImage} />
      </>
    );
  }
}

export default App;
