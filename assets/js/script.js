var renderRecipe = document.getElementById("get-recipe")
var showRecipe = document.getElementById("recipe-info")


// click listener for get-recipe 
renderRecipe.addEventListener("click", function () {
    // api for recipe
    fetch('https://api.spoonacular.com/recipes/random?number=1&apiKey=2edea6ac2b434b7ca50d4616af915f07')
        .then(function (response) {
            console.log(response);
            return response.json()

                .then(function () {
                    getRecipe()
                })
                
        })
  // i seem to be missing a function to pull it into the DOM, i cant figure that out
})




// api fetch for cocktail recipe 
var getCocktail = function () {
    fetch('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(function (response) {
        console.log(response);
        return response.json()
    })

        .then(function (data) {
            console.log(data);
        })
};

// api fetch for movie title - need to fix API link - currently just showing Fight Club
// i dont think we can use movie api to generate just one random movie, but we might be able to use other api to generate one netflix movie or show, might be easier
var getMovie = function () {
    fetch('https://api.themoviedb.org/3/discover/movie/random/?api_key=6e946e614057104bc3c7b504faf122c5&language=en-US&popularity.asc').then(function (response) {
        console.log(response);
        return response.json()
    })

        .then(function (data) {
            console.log(data);
        })
};


// renderRecipe();
// getCocktail();
// getMovie();

// add eventListener for the clicks on each button 

// display function for dinner recipe
//display photo of recipe 
// display title of recipe 
// display recipe ingredients and instructions

// display function for cocktail recipe 
//display photo of recipe 
// display title of recipe 
// display recipe ingredients and instructions

// localStorage function to save generated recipes 
$("save-recipe").on("click", function () {
    var renderRecipes = $(this)(".recipe-info").val();
    var renderCocktails = $(this)(".cocktail-info").val();


    localStorage.setItem(renderCocktails, renderRecipes)
    console.log(localStorage)
})