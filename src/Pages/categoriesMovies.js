import { complementslanguaje } from "../utils/endPoints.js";
import { categories} from "../Components/nodos.js";

categories.addEventListener('click', (e) =>{
    function presionaste(params) {
        console.log('diste click');
    }
})

// presionaste();



async function categoriesMovies() {

    try {

        const respuesta = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=285183e62c53d84f3d35c88747b0ab65' + complementslanguaje + complemens + page);
        // console.log(respuesta);

        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            console.log(datos);

            const trendingMovies = datos.results;

            trendingMovies.forEach(movie => {
                const contenmovie = document.querySelector('.movieTitle');
                contenmovie.innerHTML = trendingMovies.map((movie) =>
                    `
              <div class="movie-container card">
              <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class = "img_size" alt="Image">
              <ul class="list-group list-group-flush">
              <li class="list-group-item date"> <b>Fecha de Lanzamiento -> </b>${movie.release_date}</li>
              <li class="list-group-item"> <b>Nivel de Puntuación -> </b>${movie.vote_average}</li>
              <li class="list-group-item"> <b>lenguaje -> </b>${movie.original_language}</li>
          </ul>
          </div>
              `
                );
            });

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

export {
    presionaste,
}