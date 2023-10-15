// importamos el EndPoint a utilizar
import { popularMovies } from "./endPoints.js";
import { image } from "./endPoints.js";
import { cards_container, siguiente, anterior } from "../Components/nodos.js";

const complemens = '&page='; //EndPoints para la paginación

// por defecto siempre vamos a consultar la pagina 1
let page = 1;
let allList = 4098;

function nextBefore() {

    // le damos funcionalidad al boton siguiente para que nos pase a las siguiente 20 películas
    siguiente.addEventListener('click', () => {
        console.log('Diste Click siguiente');
        if (page < allList) {
            page += 1;
            fetch_API();
        }
    })

    // le damos funcionalidad al boton anterior limitando que solo se cumpla cuando sea mayor a 1
    anterior.addEventListener('click', () => {
        // console.log('Diste Click boton anterior');
        if (page > 1) {
            page -= 1;
            fetch_API();
        }
    })
}

nextBefore();

// Api
const fetch_API = async () => {

    try {
        const respuesta = await fetch(`${popularMovies}+${complemens}+${page}`);
        // console.log(respuesta);

        // Validamos los diferentes estado que puede tener la respuesta
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            console.log(datos);
            let peliculas = '';
            // console.log('Cantidad de peliculas por pagina -> ' + datos.results.length);
            let allListMovie = datos.total_pages;
            // console.log(allListMovie);

            datos.results.forEach(pelicula => {
                peliculas = peliculas + `
        <div class="card text-left">
                <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class = "card-img-top" alt="Image">
                <div class="card-body">
                <h5 class="card-title">${pelicula.title}</h5>
            </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item date"> <b>Fecha de Lanzamiento -> </b>${pelicula.release_date}</li>
                <li class="list-group-item"> <b>Nivel de Puntuación -> </b>${pelicula.vote_average}</li>
                <li class="list-group-item"> <b>lenguaje -> </b>${pelicula.original_language}</li>
            </ul>
        </div>
                `
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

        console.log('Error', error);
    }
}

// Exportación de funciones a utilizar
export {
    fetch_API,
    // allListMovie,
}
