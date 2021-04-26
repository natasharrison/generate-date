// api fetch for dinner recipe
var getRecipe= function(){
    fetch('https://api.spoonacular.com/recipes/random?apiKey=2edea6ac2b434b7ca50d4616af915f07').then(function(response){
    console.log(response);
    return response.json()
})

    .then(function(data){
        console.log(data);
    })
};

// api fetch for cocktail recipe 
var getCocktail = function(){
    fetch('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(function(response){
    console.log(response);
    return response.json()
})

    .then(function(data){
        console.log(data);
    })
};

// api fetch for movie title - need to fix API link 
var getMovie = function(){
    fetch('https://api.themoviedb.org/3/discover/movie/random/?api_key=6e946e614057104bc3c7b504faf122c5&language=en-US&popularity.asc').then(function(response){
    console.log(response);
    return response.json()
})

    .then(function(data){
        console.log(data);
    })
};


getRecipe();
getCocktail();
getMovie();

