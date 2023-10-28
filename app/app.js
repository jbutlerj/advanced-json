// function import from model
import { loadLists } from "../model/model.js";
import { changeRoute } from "../model/model.js";

// execute funtions on page load
$(document).ready(function(){
    changeRoute();
    loadLists();
});