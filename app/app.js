// function import from model
import { loadListItems } from "../model/model.js";
import { loadLists } from "../model/model.js";

// declaring variable
var listType = "#app ul li";
var backBTN = "#app #back";

function initListeners() {
    $(listType).click(function (e) { 
        let listID = e.currentTarget.id; //click listener - captures element ID
        loadListItems(listID); // passes ID to loadListItems function in model.js
    });

    $(backBTN).click(function () { 
        $("#app").html(""); // clears html within #app
        loadLists(); // runs loadList
    });
}

// execute funtions on page load
$(document).ready(function(){
    loadLists();
    initListeners();
});