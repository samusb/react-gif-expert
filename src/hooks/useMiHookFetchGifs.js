/* 
OBSERVACIONES
    * Aqui se define el custom hook useMiHookFetchGifs utilizado por "GifGrid.jsx"
    * sasasas
*/

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useMiHookFetchGifs = ( categoria ) => {
  
    const [imagenes, setimagenes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(categoria);
        setimagenes(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [ ])
  
    return {
        /* imagenes: imagenes,
        isLoading: false */
        imagenes, //es lo mismo que lo comentado de arriba
        isLoading //es lo mismo que lo comentado de arriba
    }

}
