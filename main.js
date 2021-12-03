

const UI = {
    loadSelector(){
        const getMealBtn = document.querySelector(".randomMeal");
        const getMealImg = document.querySelector(".mealImage");
        const getMealCategory = document.querySelector(".categoryItem");
        const getMealArea = document.querySelector(".areaItem");
        const getMealIngredients = document.querySelector(".ingredientsList");
        const getMealTitle = document.querySelector(".mealTitle");
        const getMealDescription = document.querySelector(".description");
        const getRecipeVideos = document.querySelector(".recipeVideos");

        return {
            getMealBtn,
            getMealImg,
            getMealCategory,
            getMealArea,
            getMealIngredients,
            getMealTitle,
            getMealDescription,
            getRecipeVideos
        }
    },
    mealList(){
        const meal = [
            {
                title: "Kung Pao Chicken",
                description: `Combine the sake or rice wine, soy sauce, sesame oil and cornflour dissolved in water. Divide mixture in half. In a glass dish or bowl, combine half of the sake mixture with the chicken pieces and toss to coat. Cover dish and place in refrigerator for about 30 minutes. In a medium frying pan, combine remaining sake mixture, chillies, vinegar and sugar. Mix together and add spring onion, garlic, water chestnuts and peanuts. Heat sauce slowly over medium heat until aromatic. Meanwhile, remove chicken from marinade and sauté in a large frying pan until juices run clear. When sauce is aromatic, add sautéed chicken and let simmer together until sauce thickens.`,
                image: "image/1.jpg",
                category: "Chicken",
                area: "Chinese",
                ingredients: [
                    "Sake - 2 tbs",
                    "Soy Sauce - 2 tbs",
                    "Sesame Seed Oil - 2 tbs",
                    "Corn Flour - 2 tbs",
                    "Water - 2 tbs",
                    "Chicken - 500g",
                   " Chilli Powder - 1 tbs",
                    "Rice Vinegar - 1 tsp",
                    "Brown Sugar - 1 tbs",
                    "Spring Onions - 4 Chopped",
                    "Garlic Clove - 6 cloves",
                    "Water Chestnut - 220g",
                    "Peanuts - 100g"
                ],
                video: "https://www.youtube.com/embed/QqdcCHQlOe0"
            },
            {
                title: "Spicy Arrabiata Penne",
                description: `Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes. In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil. Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.`,
                image: "image/2.jpg",
                category: "Vegetarian",
                area: "Italian",
                ingredients: [
                    "penne rigate - 1 pound",
                   "olive oil - 1/4 cup",
                    "garlic - 3 cloves",
                    "chopped tomatoes - 1 tin",
                    "red chile flakes - 1/2 teaspoon",
                    "italian seasoning - 1/2 teaspoon",
                    "basil - 6 leaves",
                    "Parmigiano-Reggiano - spinkling",
                ],
                video: "https://www.youtube.com/embed/1IszT_guI08"
            },
            {
                title: "Teriyaki Chicken Casserole",
                description: `Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray. Combine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling. Meanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat. Place the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks. *Meanwhile, steam or cook the vegetables according to package directions. Add the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!`,
                image: "image/3.jpg",
                category: "Chicken",
                area: "Japanese",
                ingredients: [
                    "soy sauce - 3/4 cup",
                    "water - 1/2 cup",
                    "brown sugar - 1/4 cup",
                    "ground ginger - 1/2 teaspoon",
                    "minced garlic - 1/2 teaspoon",
                    "cornstarch - 4 Tablespoons",
                    "chicken breasts - 2",
                    "stir-fry vegetables - 1 (12 oz.)",
                    "brown rice - 3 cups"
                ],
                video: "https://www.youtube.com/embed/4aZr5hZXP_s"
            },
            {
                title: "Honey Teriyaki Salmon",
                description: `Mix all the ingredients in the Honey Teriyaki Glaze together. Whisk to blend well. Combine the salmon and the Glaze together. Heat up a skillet on medium-low heat. Add the oil, Pan-fry the salmon on both sides until it’s completely cooked inside and the glaze thickens. Garnish with sesame and serve immediately.`,
                image: "image/4.jpg",
                category: "Seafood",
                area: "Japanese",
                ingredients: [
                    "Salmon - 1 lb",
                    "Olive oil - 1 tablespoon",
                    "Soy Sauce - 2 tablespoons",
                    "Sake - 2 tablespoons",
                   " Sesame Seed - 4 tablespoons"
                ],
                video: "https://www.youtube.com/embed/4MpYuaJsvRw"
            },
            {
                title: "Tonkatsu pork",
                description: `STEP 1 Remove the large piece of fat on the edge of each pork loin, then bash each of the loins between two pieces of baking parchment until around 1cm in thickness – you can do this using a meat tenderiser or a rolling pin. Once bashed, use your hands to reshape the meat to its original shape and thickness – this step will ensure the meat is as succulent as possible. STEP 2 Put the flour, eggs and panko breadcrumbs into three separate wide-rimmed bowls. Season the meat, then dip first in the flour, followed by the eggs, then the breadcrumbs. STEP 3 In a large frying or sauté pan, add enough oil to come 2cm up the side of the pan. Heat the oil to 180C – if you don’t have a thermometer, drop a bit of panko into the oil and if it sinks a little then starts to fry, the oil is ready. Add two pork chops and cook for 1 min 30 secs on each side, then remove and leave to rest on a wire rack for 5 mins. Repeat with the remaining pork chops. STEP 4 While the pork is resting, make the sauce by whisking the ingredients together, adding a splash of water if it’s particularly thick. Slice the tonkatsu and serve drizzled with the sauce.`,
                image: "image/5.jpg",
                category: "Pork",
                area: "Japanese",
                ingredients: [
                    "Pork Chops - 4",
                    "Flour - 100g",
                    "Eggs - 2 Beaten",
                   "Breadcrumbs - 100g",
                    "Vegetable Oil - Fry",
                    "Tomato Ketchup - 2 tbs",
                    "Worcestershire Sauce - 2 tbs",
                    "Oyster Sauce - 1 tbs",
                    "Caster Sugar - 2 tblsp"
                ],
                video: "https://www.youtube.com/embed/QqdcCHQlOe0"
            },
            {
                title: "Steak Diane",
                description: `Heat oil in a 12" skillet over medium-high heat. Season steaks with salt and pepper, and add to skillet; cook, turning once, until browned on both sides and cooked to desired doneness, about 4 to 5 minutes for medium-rare. Transfer steaks to a plate, and set aside. Return skillet to high heat, and add stock; cook until reduced until to 1⁄2 cup, about 10 minutes. Pour into a bowl, and set aside. Return skillet to heat, and add butter; add garlic and shallots, and cook, stirring, until soft, about 2 minutes. Add mushrooms, and cook, stirring, until they release any liquid and it evaporates and mushrooms begin to brown, about 2 minutes. Add cognac, and light with a match to flambée; cook until flame dies down. Stir in reserved stock, cream, Dijon, Worcestershire, and hot sauce, and then return steaks to skillet; cook, turning in sauce, until warmed through and sauce is thickened, about 4 minutes. Transfer steak to serving plates and stir parsley and chives into sauce; pour sauce over steaks to serve.`,
                image: "image/6.jpg",
                category: "Beef",
                area: "French",
                ingredients: [
                    "Canola Oil - 2 tbs",
                    "Beef Fillet - 4",
                    "Beef Stock - 1 1/2 cup",
                    "Butter - 2 tbs",
                    "Garlic - 2 cloves minced",
                    "Challots - 1 medium finely diced",
                    "Mushrooms - 4 oz",
                    "Brandy - ¼ cup",
                    "Heavy Cream - ¼ cup",
                    "Dijon Mustard - 1 tbs",
                    "Worcestershire Sauce - 1 tbs",
                    "Tabasco Sauce - Dash",
                    "Parsley - 1 tbs minced",
                    "Chives - 1 tbs minced",
                    "Salt - to taste",
                    "Pepper - to taste"
                ],
                video: "https://www.youtube.com/embed/9rWZNHkrsNg"
            }
        ]
        return meal;
    },
    displayInUi(){
        const {getMealImg, getMealCategory, getMealArea, getMealIngredients, getMealTitle, getMealDescription, getRecipeVideos} = this.loadSelector();
        const mil = this.getTheMeal();
        getMealImg.src = mil.image;
        getMealCategory.textContent = mil.category;
        getMealArea.textContent = mil.area;
        const ingred = mil.ingredients;
        getMealIngredients.innerHTML = '';
        ingred.forEach(item=>{
            const li = document.createElement("li");
            li.textContent = item;
            getMealIngredients.appendChild(li)
        })
        getMealTitle.textContent = mil.title;
        getMealDescription.textContent = mil.description;
        getRecipeVideos.src = mil.video;
    },
    getTheMeal(){
        const num = this.getRandomNumber()
        const list = this.mealList()
        return list[num];
    },
    getRandomNumber(){
        const num = this.mealList().length;
        const randomNum = Math.floor(Math.random() * num)
       return randomNum;
    },
    init(){
        const {getMealBtn} = this.loadSelector()
        getMealBtn.addEventListener("click", ()=>{
            this.displayInUi()
        });
    }
}
UI.init()

window.addEventListener("DOMContentLoaded", ()=>{
    UI.displayInUi()
})






