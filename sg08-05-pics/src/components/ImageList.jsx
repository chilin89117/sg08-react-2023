import ImageItem from './ImageItem.jsx'

const ImageList = ({images}) => (
  <div className='image-list'>
    {images.map(image => (
      <ImageItem
        key={image.id}
        image={image}
      />
    ))}
  </div>
)

export default ImageList
