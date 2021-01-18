import React from 'react'
import './ImageList.css'
const ImageList = (props) =>{
    const images =  props.images.map( image => <img src={image.urls.regular} alt={image.description} key={image.id} className="gallery-img" />)
    return <div className="gallery">{images}</div>
}
export default ImageList