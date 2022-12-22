import GalleryItem from './GalleryItem'
import React from 'react'

const Gallery = (props) => {

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem key={index} item={item} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery