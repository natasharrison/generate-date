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
    var recipes = data.recipes
    var ingredientsContainer = document.getElementById("recipe-ingredients")

    for (var i = 0; i<recipes[0].extendedIngredients.length; i++){
        var currentIngredient = document.createElement("li")
        currentIngredient.textContent = recipes[0].extendedIngredients[i].originalString;
        ingredientsContainer.appendChild(currentIngredient)
    }

    // need to display this as an image
    document.getElementById("recipe-img").innerHTML = recipes[0].image
    document.getElementById("recipe-title").innerHTML = recipes[0].title
    document.getElementById("recipe-summary").innerHTML = recipes[0].summary
    document.getElementById("recipe-steps").innerHTML = recipes[0].instructions
};

var displayCocktail = function (data){
    var drinks = data.drinks 
    
    var drinkValues = Object.values(drinks[0])
        drinkValues = drinkValues.slice(17,32)
        drinkValues = drinkValues.filter(function(drink){
        if (drink !== null){
            return drink
        }
    })
    console.log(drinkValues)

    var cocktailIngredients = document.getElementById("cocktail-ingredients")

    for (var i = 0; i<drinkValues.length; i++){
        var currentIngredient = document.createElement("li")
        currentIngredient.textContent = drinkValues[i];
        cocktailIngredients.appendChild(currentIngredient)
    }

    document.getElementById("cocktail-img").innerHTML = drinks[0].strDrinkThumb
    document.getElementById("cocktail-title").innerHTML = drinks[0].strDrink
    document.getElementById("cocktail-recipe").innerHTML = drinks[0].strInstructions
};

// add eventListener for the clicks on each button 
// localStorage function to save generated recipes 
$("save-recipe").on("click", function () {
    var renderRecipes = $(this)(".recipe-info").val();
    var renderCocktails = $(this)(".cocktail-info").val();


    localStorage.setItem(renderCocktails, renderRecipes)
    console.log(localStorage)
})