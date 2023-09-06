import React from 'react';

const Images= ({images}) => {
    return(
        <>
            {images.map( (item) => {
                <img src={item} />
            })}
        </>

    )
}
export default Images;