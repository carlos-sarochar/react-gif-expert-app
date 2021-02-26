import { React, useState } from "react";
import AddCategorias from "./components/AddCategorias";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    //const categorias = ['Fútbol','Tenis','Basketball'];
    
    const [categorias, setCategorias] = useState( [] );
    // const handleAdd = () => {
    //     let xRand =  Math.trunc(100000*Math.random())
    //     console.log(xRand)
    //     // ...categorias (crea un nuevo arreglo igual a categorias)
    //     setCategorias( [...categorias, `Deporte ${xRand}`]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategorias setCategorias={setCategorias}  />
            <hr />

            <ol>
                {
                    categorias.map( ( categoria ) => (
                        <GifGrid 
                            key={ categoria }
                            categoria={ categoria }
                        />
                    ))
                }

            </ol>
        </>
    )
}

export default GifExpertApp;