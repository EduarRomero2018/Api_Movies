const cards_container = document.querySelector("#cards_container");
// guardamos el id del buscador de películas
const search = document.querySelector("#search");
// const seeapponitment = document.querySelector("#generar_citas");
// boton siguiente de las peliculas populares
const siguiente = document.querySelector("#siguiente");

const anteriortrending = document.querySelector("#anteriortrending");
const siguientetrending = document.querySelector("#siguientetrending");

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
    siguientetrending
}