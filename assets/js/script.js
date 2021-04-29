
var renderRecipe = document.getElementById("get-recipe");
var showRecipe = document.getElementById("recipe-info");
var addCocktail = document.getElementById("drink-checkbox");
// click listener for get-recipe 
renderRecipe.addEventListener("click", function (data) {
    clearCocktails()
    clearRecipe()

    // we should maybe think about making the API key just foods, i see alot of dessets comming up 
    fetch('https://api.spoonacular.com/recipes/random?number=1&apiKey=244f6569191c4800b0cd516ad81b710a')
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data.recipes[0].sourceUrl)
            displayDinnerRecipe(data);

            console.log(addCocktail.checked)
            if (addCocktail.checked === true) {
                console.log("is this true")
                fetch('http://www.thecocktaildb.com/api/json/v1/1/random.php')
                    .then(function (response) {
                        console.log(response, "cocktail");
                        return response.json()

                            .then(function (data) {
                                console.log(data);
                                displayCocktail(data);
                            })
                    });
            }
        })
});

var displayDinnerRecipe = function (data) {
    var recipes = data.recipes
    var ingredientsContainer = document.getElementById("recipe-ingredients")


    for (var i = 0; i < recipes[0].extendedIngredients.length; i++) {
        var currentIngredient = document.createElement("li")
        currentIngredient.textContent = recipes[0].extendedIngredients[i].originalString;
        ingredientsContainer.appendChild(currentIngredient)
    }

    // need to display this as an image
    document.getElementById("main-recipe-img").src = recipes[0].image;
    document.getElementById("recipe-title").innerHTML = recipes[0].title;
    document.getElementById("recipe-summary").innerHTML = recipes[0].summary;
    document.getElementById("recipe-steps").innerHTML = recipes[0].instructions;
};

var displayCocktail = function (data) {
    var drinks = data.drinks

    var drinkValues = Object.values(drinks[0])
    drinkValues = drinkValues.slice(17, 32)
    drinkValues = drinkValues.filter(function (drink) {
        if (drink !== null) {
            return drink
        }
    })
    console.log(drinkValues)

    var cocktailIngredients = document.getElementById("cocktail-ingredients")

    for (var i = 0; i < drinkValues.length; i++) {
        var currentIngredient = document.createElement("li")
        currentIngredient.textContent = drinkValues[i];
        cocktailIngredients.appendChild(currentIngredient)
    }

    document.getElementById("pull-cocktail-img").src = drinks[0].strDrinkThumb
    document.getElementById("cocktail-title").innerHTML = drinks[0].strDrink
    document.getElementById("cocktail-recipe").innerHTML = drinks[0].strInstructions
};

var clearRecipe = function () {
    document.getElementById("recipe-ingredients").innerHTML = ""
    document.getElementById("main-recipe-img").src = ""
    document.getElementById("recipe-title").innerHTML = ""
    document.getElementById("recipe-summary").innerHTML = ""
    document.getElementById("recipe-steps").innerHTML = ""
};

var clearCocktails = function () {

    document.getElementById("cocktail-ingredients").innerHTML = ""
    document.getElementById("pull-cocktail-img").src = ""
    document.getElementById("cocktail-title").innerHTML = ""
    document.getElementById("cocktail-recipe").innerHTML = ""
};

// localStorage function to save generated recipes 
$(".save-recipe").on("click", function () {
    console.log("click")
    var favoriteFood = []
    var currentLocalStorage = JSON.parse(localStorage.getItem("favoriteFood"))
    var food = { foodItem: document.getElementById("recipe-title").innerHTML }
    console.log(food)

    if (currentLocalStorage) {
        currentLocalStorage.push(food)
        localStorage.setItem("favoriteFood", JSON.stringify(currentLocalStorage))

    } else {
        favoriteFood.push(food)
        localStorage.setItem("favoriteFood", JSON.stringify(favoriteFood))
    }
})
var displayLocalStorage = JSON.parse(localStorage.getItem("favoriteFood"))

for (var i = 0; i < displayLocalStorage.length; i++) {
    var newSave = document.createElement("li")
    newSave.innerHTML = displayLocalStorage[i].foodItem
    var storeItem = document.getElementById("store-item")
    storeItem.appendChild(newSave)
}

// spotify playlist

// var request = require("request");
// var playlist_url = 



