import { React, useState } from "react";
import PropTypes from 'prop-types';

const AddCategorias = ( { setCategorias } ) => {

    const [txtCategoria, setTxtCategoria] = useState('');  

    const handleChange = (e) => {
        setTxtCategoria(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (txtCategoria.trim().length > 2) {
            setCategorias( categorias => [ txtCategoria, ...categorias] );
            setTxtCategoria('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type = 'text'
                value = {txtCategoria}
                onChange = { handleChange }   
                placeholder='Ingrese una categoría'         
            />
        </form>
    );
}

AddCategorias.propTypes = {
    setCategorias: PropTypes.func.isRequired
}


export default AddCategorias;