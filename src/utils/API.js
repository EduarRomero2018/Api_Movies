// importamos el EndPoint a utilizar
import {popularMovies} from "./endPoints.js";

const fetch_API = async () => {

    try {
        const respuesta = await fetch(`${popularMovies}`);
        console.log(respuesta);

        // Validamos los diferentes estado que puede tener la respuesta
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            datos.results.forEach(pelicula => {
                console.log(pelicula.title);
            });

        } else if (respuesta.status === 401) {
            console.log('Atenticacion fallida, usted no cuenta con el permiso para acceder a este servicio');

        } else if (respuesta.status === 404) {
            console.log('Peliculas No Encontradas');

        } else {
            console.log('Hubo un error inesperado, favor validar');
        }

    } catch (error) {
        console.log('Error');
    }
}

export {
    fetch_API
}
