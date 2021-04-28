var renderRecipe = document.getElementById("get-recipe");
var showRecipe = document.getElementById("recipe-info");

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

    fetch('http://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(function (response) {
            console.log(response);
            return response.json()
    
        .then(function (data) {
            console.log(data);
            displayCocktail(data);
        })
    })
});

var displayDinnerRecipe = function (data){
    // need to display this as an image
    document.getElementById("recipe-img").innerHTML = data.recipes[0].image
    document.getElementById("recipe-title").innerHTML = data.recipes[0].title
    document.getElementById("recipe-summary").innerHTML = data.recipes[0].summary
    document.getElementById("recipe-time").innerHTML = data.recipes[0].readyInMinutes
    document.getElementById("recipe-size").innerHTML = data.recipes[0].servings
    document.getElementById("recipe-ingredients").innerHTML = data.recipes[0].extendedIngredients
    document.getElementById("recipe-steps").innerHTML = data.recipes[0].instructions
};

var displayCocktail = function (data){
    document.getElementById("cocktail-img").innerHTML = data.drinks[0].strDrinkThumb
    document.getElementById("cocktail-title").innerHTML = data.drinks[0].strDrink
    document.getElementById("cocktail-ingredients").innerHTML = data.drinks.strIngredient1
    document.getElementById("cocktail-ingredients").innerHTML = data.drinks.strIngredient2
    document.getElementById("cocktail-ingredients").innerHTML = data.drinks.strIngredient3
    document.getElementById("cocktail-ingredients").innerHTML = data.drinks.strIngredient4
    document.getElementById("cocktail-ingredients").innerHTML = data.drinks.strIngredient5
    document.getElementById("cocktail-ingredients").innerHTML = data.drinks.strIngredient6
    document.getElementById("cocktail-ingredients").innerHTML = data.drinks.strIngredient7
    document.getElementById("cocktail-ingredients").innerHTML = data.drinks.strIngredient8
    document.getElementById("cocktail-ingredients").innerHTML = data.drinks.strIngredient9
    document.getElementById("cocktail-ingredients").innerHTML = data.drinks.strIngredient10
    document.getElementById("cocktail-ingredients").innerHTML = data.drinks.strIngredient11
    document.getElementById("cocktail-ingredients").innerHTML = data.drinks.strIngredient12
    document.getElementById("cocktail-ingredients").innerHTML = data.drinks.strIngredient13
    document.getElementById("cocktail-ingredients").innerHTML = data.drinks.strIngredient14
    document.getElementById("cocktail-ingredients").innerHTML = data.drinks.strIngredient15
    document.getElementById("cocktail-recipe").innerHTML = data.drinks[0].strInstructions
};

// add eventListener for the clicks on each button 
// localStorage function to save generated recipes 
$("save-recipe").on("click", function () {
    var renderRecipes = $(this)(".recipe-info").val();
    var renderCocktails = $(this)(".cocktail-info").val();


    localStorage.setItem(renderCocktails, renderRecipes)
    console.log(localStorage)
})