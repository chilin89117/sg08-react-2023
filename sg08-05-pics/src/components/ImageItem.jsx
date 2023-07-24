const ImageItem = ({image}) => (
  <div>
    <img
      src={image.urls.small}
      alt={image.alt_description}
    />
  </div>
)

export default ImageItem
