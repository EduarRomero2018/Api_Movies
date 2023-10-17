const cards_container = document.querySelector("#cards_container");
// guardamos el id del buscador de películas
const search = document.querySelector("#search");
const siguiente = document.querySelector("#siguiente");// boton siguiente de las peliculas populares
const anteriortrending = document.querySelector("#anteriortrending"); //btn anterior seccion trending
const siguientetrending = document.querySelector("#siguientetrending"); //btn siguiente seccion trending
const categories = document.querySelector("#categories"); //btn siguiente seccion categories
const movieListCategories = document.getElementById("movieListCategories"); //contenedor padre que dentro tiene el contenedor hijo donde se despliegan la lista de las cataegorias
const btncategories = document.getElementById("btncategories") //btn para mirar las categories


// boton anterior de las peliculas populares
const anterior = document.querySelector("#anterior");

// Chart.js
const graphic = document.querySelector("#myChart");

// Capturmos el boton buscar películas

const btn_search = document.querySelector("#search");

export{
    cards_container,
    search,
    btn_search,
    siguiente,
    anterior,
    graphic,
    anteriortrending,
    siguientetrending,
    categories,
    btncategories,
    movieListCategories
}