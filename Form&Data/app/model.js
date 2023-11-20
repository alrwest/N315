/*import { addFormListener } from "./app.js";
var recipes = [];

export function changePage(pageName) {
    $("#app .formHolder div").off("click", "**");
    $("#app .formHolder .submit").off("click", "**");
    console.log("changePage", pageName);

    if (pageName == "addRecipe") {
        $.get(`pages/${pageName}.html`, (data) => {
            $("#app").html(data);
            addFormListener();
        }).fail((error) => {
            console.log("error:", error);
        });
    } else {
        $.get(`pages/${pageName}.html`, (data) => {
            $("#app").html(data);

         if (recipes.length == 0) {
                console.log("no recipes");
                $(".vr").append(`<p> You have no recipes.</p>`);
        } else {
            $.each(recipes, (idx, recipe) => {
                $(".recipe-wrapper").append(`<div class="recipe">
                <div class="image-holder">
                  <img src="${recipe.imagePath}" alt="flower1" />
                </div>
                <div class="titleDesc">
                  <h4>Name of Recipe ${recipe.itemName}</h4>
                  <h6>Description:</h6>
                 <p> This is a cool recipe. </p>
                </div>
                <div class="descriptions">
                  <ul>
                  ${(() => { let htmlString = ""; $.each(recipe.descriptions, (idx, description) => { let keyName = "description" + idx; htmlString += `
                  ${description[keyName]}`; }); 
                  return htmlString; })()}
                  </ul>
                </div>
                <div class="instructions">
                  <ol>
                    <li>instruction 1</li>
                    <li>instruction 2</li>
                  </ol>
                </div>
            </div>;`);
            })
        }
    }).fail((error) => {
        console.log("error:", error);
    });
    }
}

export function addRecipe(newRecipe) {
    recipes.push(newRecipe);
    console.log(recipes);
}*/

import { addFormListener } from "./app.js"; 
 
var recipes = []; 
 
export function changePage(pageName) { 
$("#app .formHolder div").off("click", "**"); 
$("#app .formHolder .submit").off("click", "**"); 
 
if (pageName == "addRecipe") { 
$.get(`pages/${pageName}.html`, (data) => { 
$("#app").html(data); 
addFormListener(); 
}).fail((error) => { 
console.log("error ", error); 
}); 
} else { 
$.get(`pages/${pageName}.html`, (data) => { 
$("#app").html(data); 
 
if (recipes.length == 0) { 
console.log("no recipes"); 
$(".vr").append(`<p>You have no recipes. </p>`); 
} else { 
$.each(recipes, (idx, recipe) => { 
$(".recipe-wrapper").append( 
`<div class="recipe"> 
<div class="imageHolder"> 
<img 
src="${recipe.imagePath}" 
alt="bride" 
/> 
</div> 
<div class="titleDesc"> 
<h4>Name of Recipe: ${recipe.itemName}</h4> 
<h4>Description:</h4> 
<p> 
This is a cool recipe. 
</p> 
</div> 
<div class="descriptions"> 
<ul> 
${(() => { 
let htmlString = ""; 
$.each(recipe.descriptions, (idx, description) => { 
let keyName = "description" + idx; 
htmlString += `<li>${description[keyName]}</li>`; 
}); 
return htmlString; 
})()} 
</ul> 
</div> 
<div class="instructions"> 
<ol> 
</ol> 
</div> 
</div>;` 
); 
}); 
} 
}).fail((error) => { 
console.log("error ", error); 
}); 
} 
} 
 
export function addRecipe(newRecipe) { 
recipes.push(newRecipe); 
console.log(recipes); 
} 
 