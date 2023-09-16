/* 
OBSERVACIONES
    * Se utilizara unicamente para consumir un API
 */
export const getGifs = async( categoria ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=jraBZ0VL19BcYn1pr9bFibCrinusjqIV&q=${categoria}&limit=10`;
    const resp = await fetch(url);//el fecth sirve para hacer una peticion al API
    const { data } = await resp.json();

    const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        })
    );

    console.log(gifs);
    return gifs;
}