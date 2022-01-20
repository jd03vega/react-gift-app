// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ( {category} ) => {

    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs( category );

    // useEffect( () => {
    //     getGifs(category).then(gifs => {
    //         setImages(gifs);
    //     });
    // }, [category]);

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown ">{category}</h3>
            { loading && <p className="animate__animated animate__flash animate__slower">Cargando...</p> }
            <div className="card-grid">
                {
                    images.map( gif => 
                        <GifGridItem 
                            key={gif.id}
                            { ...gif } 
                        />
                    )
                }
            </div>
        </>
    )
}
