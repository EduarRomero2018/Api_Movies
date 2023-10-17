import { complementslanguaje } from "../utils/endPoints.js";
// import { movieListCategories, btncategories} from "../Components/nodos.js";

async function categoriesMovies() {

    try {
        // https://api.themoviedb.org/3/genre/movie/list
        const respuesta = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=285183e62c53d84f3d35c88747b0ab65' + complementslanguaje);
        // console.log(respuesta);


        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            // throw new Error("La ejecución se detiene aquí."); // Lanza una excepción

            const moviesByCategories = datos.genres;
            // console.log(moviesByCategories);

            moviesByCategories.forEach(moviecategorie => {
                const contenmovie = document.querySelector('.moviesByCategories');
                // console.log(moviecategorie.name);
                contenmovie.innerHTML = moviesByCategories.map((moviecategorie) =>
                    `
                <ul>
                    <li> * ${moviecategorie.name}</li>
                </ul>
              `
                ).join('');
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
categoriesMovies();


// const btncategories = document.getElementById("btncategories");
// const movieListCategories = document.getElementById("movieListCategories");

btncategories.addEventListener("click", function() {
    console.log('diste click');
    // Verifica si el contenedor está oculto
    if (movieListCategories.classList.contains("hidden_container")) {
        // Muestra el contenedor
        movieListCategories.classList.remove("hidden_container");
    } else {
        // Oculta el contenedor
        movieListCategories.classList.add("hidden_container");
    }
});



export {
    categoriesMovies,
}