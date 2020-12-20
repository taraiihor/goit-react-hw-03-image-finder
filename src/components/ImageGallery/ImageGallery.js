import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

function ImageGallery({ articles }) {
  return (
    <ul className="ImageGallery">
      {articles.map(({ id, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object.isRequired),
  id: PropTypes.number.isRequired,
};
export default ImageGallery;
