/* 
OBSERVACIONES
    * Se elimina el import porque a nivel de proyecto ya se sabe que es React y en configuracion del archivo vite lo dice
        import React from 'react';
    * Recordar que todo lo que sea .jsx se trata de un "Functional component"
    * La mejor forma de obtener el valor del functional component hijo es enviando una funcion (establecerCategorias) a traves de las
        props. Esta formam es mejor que enviar el hook (setCategories)
    * Aqui hay una importacion de un "archivo barril"
        React detecta el archivo barril el cual se llama index.js y gracias a esto
        no es necesario colocar el nombre del functional component y en lugar de ello
        solo se manda a llamar por desectructuracion. 
        
        En el ejemplo, "AddCategory, GifGrid" se desestructuran y el ./components no llama
         el resto y busca el index.js de ese directorio.
 */

/* 
forma normal de importar UNO a UNO
 
import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
*/

import {useState} from 'react'
import { AddCategory, GifGrid } from './components';//Importacion al archivo Barril

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const agregar = ( cat ) => {
        if(categories.includes(cat))return;
        setCategories( [cat,...categories]) ;
    }

    return (
        <>
            {/* === T I T U L O ===*/}
            <h1>GifExpertApp</h1>

            {/* === I N P U T === */}
            <AddCategory establecerCategorias= { agregar }  setCategories= { setCategories }/>

            {/* === L I S T A D O       G I F === */}
            {/* <button onClick={ agregar }>Agregar</button> */}
            {
                categories.map( categories => (//OJO, al tener parentesis,  decimos retorna objeto.
                    < GifGrid key={ categories } categoria={ categories } />
                ))
            }
        </>
    )
}