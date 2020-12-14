import { Component } from 'react';
import './Searchbar.css';
class Searchbar extends Component {
  state = {
    searchImage: '',
  };

  handleNameChangle = event => {
    const { value } = event.currentTarget;
    this.setState({ searchImage: value });
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchImage.trim() === '') {
      alert('ведіть щось');
      return;
    }
    this.props.onSubmit(this.state.searchImage);
    this.reset();
  };

  reset = () => {
    this.setState({ searchImage: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={this.state.searchImage}
            className="SearchForm-input"
            type="text"
            placeholder="Search images and photos"
            onChange={this.handleNameChangle}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
