import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ articles }) => (
  <ul className="ImageGallery">
    {articles.map(item => {
      return <ImageGalleryItem item={item} key={item.id} />;
    })}
  </ul>
);

export default ImageGallery;
