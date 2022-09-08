import './App.css';
import style from 'styled-components';

function App() {

  //TMDB

  const API_KEY = 'api_key=b3460b49e5af6fd54cc73c1136e6d56e';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_KEY;
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const searchURL = BASE_URL + '/search/movie?' + API_KEY;

  const main = document.getElementById('main');
  const form = document.getElementById('form');
  const search = document.getElementById('search');

  getMovies(API_URL);

  function getMovies(url) {
    
    fetch(url).then(res => res.json()).then(data => {
      console.log(data.results);
      showMovies(data.results);
    })
  }

  function showMovies(data) {
    main.innerHTML = '';    

    data.forEach(movie => {
      const{title, poster_path, vote_average, overview} = movie;
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie'); 
      movieEl.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="${title}" />

        <div class="movie-info">
          <h3>${title}</h3>
          <span class='${getColor(vote_average)}'>${vote_average}</span>
        </div>

        <div class="overview">

        <h3>Overview</h3>
          ${overview}
        </div>
      
       
      `     

      main.appendChild(movieEl);
    })
  }

  function getColor(vote) {
    if (vote >= 8 ) {
      return 'green'
    }else if (vote >= 5) {
      return 'orange'
    } else {
      return 'red'
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
      getMovies(searchURL + '&query='+ searchTerm);
    }

  })

  return (
    <>
      <Container>
        <header>
          <form id='form'>
            <input type='text' placeholder='Search' id='search' class='search' />
          </form>
        </header>

        <main id='main'>
          <div class="movie">
            <img src="https://image.tmdb.org/t/p/w1280/62HCnUTziyWcpDaBO2i1DX17ljH.jpg" alt="" />

            <div class="movie-info">
              <h3>Movie Title</h3>
              <span class='green'>9.8</span>
            </div>

            <div class="overview">

            <h3>Overview</h3>

              Quo maxime cupiditate possimus rerum repudiandae delectus accusamus saepe provident? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum temporibus rerum laborum libero iste sit asperiores nam dicta cum doloribus?
            </div>
          </div>

          <div class="movie">
            <img src="https://image.tmdb.org/t/p/w1280/62HCnUTziyWcpDaBO2i1DX17ljH.jpg" alt="" />

            <div class="movie-info">
              <h3>Movie Title</h3>
              <span class='green'>9.8</span>
            </div>

            <div class="overview">

              Quo maxime cupiditate possimus rerum repudiandae delectus accusamus saepe provident? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum temporibus rerum laborum libero iste sit asperiores nam dicta cum doloribus?
            </div>
          </div>

          <div class="movie">
            <img src="https://image.tmdb.org/t/p/w1280/62HCnUTziyWcpDaBO2i1DX17ljH.jpg" alt="" />

            <div class="movie-info">
              <h3>Movie Title</h3>
              <span class='green'>9.8</span>
            </div>

            <div class="overview">
              Quo maxime cupiditate possimus rerum repudiandae delectus accusamus saepe provident? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum temporibus rerum laborum libero iste sit asperiores nam dicta cum doloribus?
            </div>
          </div>
 
        </main>
      </Container>
    </>  
  );
} 

const Container = style.div `


`


export default App;
