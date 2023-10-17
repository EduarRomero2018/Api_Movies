// importamos el EndPoint a utilizar
import { popularMovies, upcomingMoviesAll } from "./endPoints.js";
import { image } from "./endPoints.js";
import { cards_container, siguiente, anterior} from "../Components/nodos.js";


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
            // console.log(datos); ESTEEEEEEE
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

const upcomingMovies = async () => {
    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=285183e62c53d84f3d35c88747b0ab65');

        if (respuesta.status === 200) { //validamos el codigo de estado de la peticion
            const datos = await respuesta.json();
            const upcomingMoviesList = datos.results; //Guardamos el objeto en la variable

            const todayDate = new Date().toLocaleDateString().split('/').reverse().join('-'); // Formateamos la fecha actual a como viene en la API para poder hacer luego la comparación
            const filteredMovies = upcomingMoviesList.filter(element => element.release_date > todayDate);// Filtramos las películas que cumplan con la condicion

            if (filteredMovies.length > 0) {
                // console.log('Películas próximas lanzadas:', filteredMovies);
                const contenMoviereleases = document.querySelector('.movieReleases');
                contenMoviereleases.innerHTML = filteredMovies.map(element =>
                    `
                    <div class="movie-container card">
                        <img src="https://image.tmdb.org/t/p/w300/${element.poster_path}" class="img_size" alt="Image">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item date"> <b>Fecha de Lanzamiento -> </b>${element.release_date}</li>
                            <li class="list-group-item"> <b>Nivel de Puntuación -> </b>${element.vote_average}</li>
                            <!--<li class="list-group-item"> <b>Nivel de Puntuación -> </b>${element.overview}</li>-->
                        </ul>
                    </div>
                    `
                );


            } else {
                console.log('No hay películas próximas lanzadas.');
            }
        } else if (respuesta.status === 401) {
            console.log('Autenticación fallida, usted no cuenta con el permiso para acceder a este servicio');
        } else if (respuesta.status === 404) {
            console.log('Películas No Encontradas');
        } else {
            console.log('Hubo un error inesperado, favor validar');
        }
    } catch (error) {
        console.log('Error', error);
    }
}


upcomingMovies();



// Exportación de funciones a utilizar
export {
    fetch_API,

}
