/* 
OBSERVACIONES
    * Se desestructura para obtener las Props y asi usarlas en este functional component.
    * Para comunicar el functional component hijo con padre se comparte una props desde el padre al hijo
       y mediante desectructuracion se utiliza en hijo
    * Existen dos formas de compartir
       1) mediante funcion (esta es la mejor)
       2) mediante el hook
*/

import { useState } from "react"

export const AddCategory = ( { establecerCategorias, setCategories } ) => {//desestructuracion de "establecerCategorias" para traerlo del componente padre GifExpertApp

    const [inputValue, setInputValue] = useState('')//Recordar que se debe colocar espacioi vacio para que no truene

    const onInpChg = ({ target }) => {//aqui se desestructura para no tener que escribir siempre event.target.value
        setInputValue(target.value);
    }

    const onSubmit= (event) => {
        event.preventDefault();
        console.log(inputValue);

        if( inputValue.trim().length <= 1 ) return;//Para evitar insertar en el input espacios vacios, el "return" hace que se salga de metodo onSubmit()
        establecerCategorias(inputValue);//Primer forma de agregar elemento nuevo (Esta es la mejor)
        //setCategories( categories => [ ...categories,  inputValue ] );//Segunda forma de agregar elemento nuevo
        setInputValue('');//Para limpiar input en lugar de hacer un document.getElemenById('inputId').value = ''
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                id='categoria' 
                type="text"
                placeholder= 'Buscar gif'
                value= { inputValue }
                onChange={ onInpChg }
            />
        </form>
    )
}