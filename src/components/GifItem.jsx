/* 
OBSERVACIONES
    * sasas
    * asas
 */

export const GifItem = (imagenes) => {
  
  
  
    return (
        <div className="card">
            <img src={imagenes.url} alt={ imagenes.title }></img>
            <p>{ imagenes.title }</p>
        </div>
    )

}

