import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
class App extends React.Component {
  state = {
    nameImage: [],
    page: 1,
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
        <Button />
      </>
    );
  }
}

export default App;
