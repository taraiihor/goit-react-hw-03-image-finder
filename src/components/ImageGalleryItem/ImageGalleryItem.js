import './ImageGalleryItem.css';
function ImageGalleryItem({ item }) {
  return (
    <li>
      <img src={item.webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
}

export default ImageGalleryItem;
