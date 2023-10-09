// importamos el EndPoint a utilizar
import { popularMovies } from "./endPoints.js";
import { image } from "./endPoints.js";
import { cards_container } from "../Components/nodos.js";

const fetch_API = async () => {

    try {
        const respuesta = await fetch(`${popularMovies}`);
        console.log(respuesta);

        // Validamos los diferentes estado que puede tener la respuesta
        if (respuesta.status === 200) {
            const datos = await respuesta.json();

            let peliculas = '';
            console.log(datos.results);
            datos.results.forEach(pelicula => {
                peliculas = peliculas + `
        <div class="card text-center">
                <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class = "card-img-top" alt="Image">
                <div class="card-body">
                <h5 class="card-title">${pelicula.title}</h5>

            </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"> <b>Fecha de Lanzamiento -> </b>${pelicula.release_date}</li>
                <li class="list-group-item"> <b>Nivel de Puntuación -> </b>${pelicula.vote_average}</li>
                <li class="list-group-item"> <b>lenguaje -> </b>${pelicula.original_language}</li>
            </ul>
        </div>
                `
                // console.log(pelicula.title);
            });

            cards_container.innerHTML = peliculas;

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
