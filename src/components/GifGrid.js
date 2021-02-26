//import React, { useState, useEffect } from 'react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from '../components/GifGridItem';
//import { getGifs } from '../helpers/getGifs';

const GifGrid = ( { categoria } ) => {

    //const [imagenes, setImagenes] = useState([]);

    const {data:imagenes, loading} = useFetchGifs( categoria );

    // // Al agregar un arreglo vacio como segundo argumento del useEffect,
    // // me aseguro que el useEffect se ejecute una sola vez
    // useEffect( () => {
    //     getGifs( categoria )
    //         .then( img => setImagenes(img)); 
    // }, [ categoria ]);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> { categoria } </h3>

            { loading && <p className='animate__animated animate__flash'>Cargando ....</p> }

            { <div className='card-grid'>
                { 
                    imagenes.map( img => (
                        <GifGridItem 
                            key={ img.id}
                            { ...img } 
                        />
                    ))
                }
            </div> }
        </>
    )

}


export default GifGrid;