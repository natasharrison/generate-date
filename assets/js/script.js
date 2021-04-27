var renderRecipe = document.getElementById("get-recipe");
var showRecipe = document.getElementById("recipe-info");
const cb = document.querySelector("#accept");


// click listener for get-recipe 
renderRecipe.addEventListener("click", function (data) {
    // api for recipe
    fetch('https://api.spoonacular.com/recipes/random?number=1&apiKey=2edea6ac2b434b7ca50d4616af915f07')
        .then(function (response) {
            console.log(response);
            return response.json()

                .then(function (data) {
                    console.log(data)
                    displayDinnerRecipe(data);
                })
                
        })
  // i seem to be missing a function to pull it into the DOM, i cant figure that out
}); 




// api fetch for cocktail recipe 
var getCocktail = function (data) {
    fetch('http://www.thecocktaildb.com/api/json/v1/1/random.php').then(function (response) {
        console.log(response);
        return response.json()
    })

        .then(function (data) {
            console.log(data);
            displayCocktail(data);
        })
};

var cocktailChecked = function (event){
    event.preventDefault();


};


var displayDinnerRecipe = function (data){
    // need to display this as an image
    document.getElementById("recipe-img").innerHTML = data.recipes[0].image
    document.getElementById("recipe-title").innerHTML = data.recipes[0].title
    document.getElementById("recipe-summary").innerHTML = data.recipes[0].summary
    document.getElementById("recipe-ingredients").innerHTML = data.recipes[0].extendedIngredients
    document.getElementById("recipe-steps").innerHTML = data.recipes[0].instructions
};

var displayCocktail = function (data){
    document.getElementById("cocktail-img").innerHTML = data
    document.getElementById("cocktail-title").innerHTML = data
    document.getElementById("cocktail-ingredients").innerHTML = data
    document.getElementById("cocktail-recipe").innerHTML = data
};

// api fetch for movie title - need to fix API link - currently just showing Fight Club
// i dont think we can use movie api to generate just one random movie, but we might be able to use other api to generate one netflix movie or show, might be easier
// var getMovie = function () {
//     fetch('https://api.themoviedb.org/3/discover/movie/random/?api_key=6e946e614057104bc3c7b504faf122c5&language=en-US&popularity.asc').then(function (response) {
//         console.log(response);
//         return response.json()
//     })

//         .then(function (data) {
//             console.log(data);
//         })
// };


// renderRecipe();
// getCocktail();


// add eventListener for the clicks on each button 
// localStorage function to save generated recipes 
$("save-recipe").on("click", function () {
    var renderRecipes = $(this)(".recipe-info").val();
    var renderCocktails = $(this)(".cocktail-info").val();


    localStorage.setItem(renderCocktails, renderRecipes)
    console.log(localStorage)
})