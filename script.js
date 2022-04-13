// Create a namespace
const app = {};

// tmdb hardcoded info
app.tmdbKey = `38b0e45d0b64be4a62d1e5fec3840ced`;
app.tmdbBasesUrl = `https://api.themoviedb.org/3/movie/popular`;

app.$titleElement = $(".movieTitle"); 
app.$releaselement = $(".release");

// Init function
app.init = () => {
    app.getMovieInfo();
}

// Get tmdb info
app.getMovieInfo = () => {
    $.ajax({
        url: app.tmdbBasesUrl, 
        method: `GET`,
        dataType: `JSON`,
        data: {
            api_key: app.tmdbKey
        }
    }).then((response) => {
        app.displayResults(response.results)
        console.log(response);
    });
}

// Display results on the page! aka Put the shit on the page!
app.displayResults = (arrayOfInfo) => {
    const results = $('.results');

    arrayOfInfo.forEach((movieData) => {
        const newHtml = `
                <img src="${`https://image.tmdb.org/t/p/original/` + movieData.backdrop_path}" alt="${`The Poster for ${movieData.title}`}">
                <div class="movieInfo">
                    <h3 class=${app.$titleElement}>${movieData.title}</h3>
                    <p class=${app.$releaselement}>${movieData.release_date}</p>
                </div>
        `;

        // Append results so it adds them all to page
        results.append(newHtml);
    });
}

// Document Ready Function

$(function() {
    app.init();
})