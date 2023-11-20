/*import { addRecipe, changePage } from "./model.js";

//counter for placeholders
let intialDescCount = 3;
let intialInstrCount = 3;

let recipes = [];

function initListeners() {
  $("nav a").on("click", (e) => {
    e.preventDefault();
    let btnID = e.currentTarget.id;
    changePage(btnID);
  });
}

export function addFormListener() {
  $(".desc-add-button").on("click", (e) => {
    intialDescCount++;
    $(".formDesc").append(`<input id="desc${intialDescCount - 1}" type="text" placeholder="Description ${intialDescCount}" />`);
  });

  $(".instr-add-button").on("click", (e) => {
    intialInstrCount++;
    $(".formInstr").append(`<input id="desc${intialInstrCount - 1}" type="text" placeholder="Description ${intialInstrCount}" />`);
  });

  $(".submit").on("click", (e) => {
  
   let imagePath = $("#imagePath").val();
   let itemName = $("#itemName").val();
   //console.log("path:" + imagePath);
   //console.log("itemName: " + itemName);
   let newRecipeObj = {};
   newRecipeObj.imagePath = imagePath;
   console.log(newRecipeObj);

    //making an array to go into a bigger object
    //desc -> recipe
   newRecipeObj.descriptions = [];
  $(".formDesc input").each(function (index, data) {
    var value = $(this).val();
    console.log($(this));
    //check if there's data 
    if (value != "") {
        //console.log("desc: " + value);
        let keyName = "description" + value;
        let descObj = {};
        descObj[keyName] = value;

        newRecipeObj.descriptions.push(descObj);
    } else {
        console.log("Oops! No data.")
    }

     });

     newRecipeObj.instructions = [];
     $(".formInstr input").each(function (index, data) {
        var value = $(this).val();
        console.log("instructions" + value);
        if (value != ""){
            let keyName = "instructions" + value;
            let instrObj = {};
            instrObj[keyName] = value;

            newRecipeObj.instructions.push(instrObj);
            console.log(newRecipeObj);
        } else {
            console.log("Oops! No data.")
        }
      
    });

    addRecipe(newRecipeObj);
    console.log("submitted");
  });
}

$(document).ready(function() {
  changePage("viewRecipe");
  initListeners();
});*/

import { addRecipe, changePage } from "./model.js"; 
 
var initialDescCount = 3; 
var initialInstrCount = 3; 
 
function initListeners() { 
$("nav a").on("click", (e) => { 
e.preventDefault(); 
let btnID = e.currentTarget.id; 
changePage(btnID); 
}); 
} 
 
export function addFormListener() { 
$(".descAddBtn").on("click", (e) => { 
initialDescCount++; 
$(".formDesc").append( 
`<input type="text" placeholder="Description ${initialDescCount}" id="desc${ 
initialDescCount - 1 
}" />` 
); 
}); 
 
$(".instrAddBtn").on("click", (e) => { 
initialInstrCount++; 
$(".formInstr").append( 
`<input type="text" placeholder="Instruction ${initialInstrCount}" id="desc${ 
initialInstrCount - 1 
}" />` 
); 
}); 
 
$(".submit").on("click", (e) => { 
let newItemObj = {}; 
 
let imagePath = $("#imagePath").val(); 
let itemName = $("#itemName").val(); 
newItemObj.imagePath = imagePath; 
newItemObj.itemName = itemName; 
 
newItemObj.descriptions = []; 
 
console.log("newItemObj ", newItemObj); 
$(".formDesc input").each(function (index, data) { 
var value = $(this).val(); 
if (value != "") { 
let keyName = "description" + index; 
let descObj = {}; 
descObj[keyName] = value; 
 
newItemObj.descriptions.push(descObj); 
} 
}); 
 
newItemObj.instructions = []; 
 
$(".formInstr input").each(function (index, data) { 
var value = $(this).val(); 
 
if (value != "") { 
let keyName = "instruction" + index; 
let instrucObj = {}; 
instrucObj[keyName] = value; 
 
newItemObj.instructions.push(instrucObj); 
} 
}); 
 
addRecipe(newItemObj); 
}); 
} 
 
$(document).ready(function () { 
// changePage("addRecipe"); 
changePage("addRecipe"); 
initListeners(); 
}); 
 