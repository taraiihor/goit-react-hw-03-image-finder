import React from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';

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

export default ImageGallery;
