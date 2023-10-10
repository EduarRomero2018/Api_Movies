import { popularMovies } from "../utils/endPoints.js";
// importamos constante que contiene el id del html donde se va a insertar el grafico
import { graphic } from "../Components/nodos.js";

// Constantes de colores a utilizar en el grafico
const border_barra = '#032541';
const fondo_barra = '#9fc6db'


let page = 1;
async function grafico() {
  const complemens = '&page='; //EndPoints para la paginación
  try {
    const respuesta = await fetch(`${popularMovies}+${complemens}+${page}`);
    const datos = await respuesta.json();

    // Obtén los nombres de las películas y las calificaciones
    const nombresPeliculas = datos.results.map(pelicula => pelicula.title);
    const calificaciones = datos.results.map(pelicula => pelicula.vote_average);

    console.log(nombresPeliculas);
    console.log(calificaciones);

    const graficoConfig = {
      type: 'bar',
      data: {
        labels: nombresPeliculas, // Nombres de las películas como etiquetas
        datasets: [{
          label: 'Peliculas por Valoración',
          data: calificaciones, // Calificaciones como datos
          borderWidth: 1,
          // backgroundColor: 'rgba(75, 192, 192, 0.2)',
          backgroundColor: fondo_barra,
          borderColor: border_barra,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    };

      // Se crea el gráfico con la configuración existente
      new Chart(graphic, graficoConfig);

  } catch (error) {
    console.error('Error:', error);
  }

}

grafico();




