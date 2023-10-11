// Se recibe la API completa con los Query parameters


// * EndoPoint -> Get a list of movies ordered by popularity.
const popularMovies = 'https://api.themoviedb.org/3/movie/popular?api_key=285183e62c53d84f3d35c88747b0ab65&language=es-ES'

// * EndoPoint -> Get the newest movie ID.
const newestMovies = 'https://api.themoviedb.org/3/movie/latest?api_key=285183e62c53d84f3d35c88747b0ab65&language=es-ES'


// * EndoPoint -> Get the top level details of a movie by ID.
const BASE_URL = 'https://api.themoviedb.org/3/movie/550?api_key=285183e62c53d84f3d35c88747b0ab65&language=es-ES'


// * EndPoint -> Get a list of movies ordered by rating.
const General_Movies = 'https:api.themoviedb.org/3/movie/550?api_key=285183e62c53d84f3d35c88747b0ab65&language=es-ES'

// EndPoint Ruta para cargar las images
const image = 'https://image.tmdb.org/t/p/w500/'



const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODUxODNlNjJjNTNkODRmM2QzNWM4ODc0N2IwYWI2NSIsInN1YiI6IjY1MjE2ZTNkZWE4NGM3MDBhZWVkY2Y3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.goau0xcGa6JmQMWV16nqSuVBXwyG-NB1Ulz1gjs87yY';

const APIKEY = '285183e62c53d84f3d35c88747b0ab65';

export {
    popularMovies,
    image
}