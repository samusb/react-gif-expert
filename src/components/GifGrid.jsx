/* 
OBSERVACIONES
    * CUIDADO!!!,  hay que evitar poner metodos que llamen un FETCH dentro de un fucntional component
        esto es porque el consumo al API se realizara cada vez que se renderice el functional component.
    * HOOK useEffect
        permite ejecutar un efecto secundario cuando algo se ejecuta.
    * Al fondo hay una nueva forma de enviar props
    * Aqui se crea un custom Hook para simplificar y reutilizar codigo.
 */

import { GifItem } from "./GifItem";
import { useMiHookFetchGifs } from "../hooks/useMiHookFetchGifs";

export const GifGrid = ( {  categoria } ) => {

    const {imagenes, isLoading} = useMiHookFetchGifs(categoria);//Este es un Custom Hook
    
    return (
    <>
        <h3>{ categoria }</h3>
        {
            isLoading && ( <h2>Cargando...</h2> ) //Primer forma de mostrar cargando
            //isLoading ? ( <h2>Cargando...</h2> ) : null //Segunda forma de mostrar cargando
        }
        <div className="card-grid">
            {
                imagenes.map( (imagenes) => (
                        < GifItem 
                            key={ imagenes.id } 
                            /* id={ imagenes.id } title={ imagenes.title } url={ imagenes.url } //Primer forma de enviar props*/
                            {...imagenes}//Segunda forma de enviar props
                        />
                    )
                )
            }
        </div>
    </>
    )
}
