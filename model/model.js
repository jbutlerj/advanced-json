// declaring variables
var LISTS = [
    {
        name: "Groceries",
        listItems: [
            {
                name: "milk",
                checked: false,
                category: "dairy",
            },
            {
                name: "cheese",
                checked: false,
                category: "dairy",
            },
            {
                name: "oranges",
                checked: false,
                category: "produce",
            },
            {
                name: "strawberries",
                checked: false,
                category: "produce",
            },
            {
                name: "cucumber",
                checked: false,
                category: "produce",
            },
            {
                name: "chicken",
                checked: false,
                category: "deli",
            },
            {
                name: "ice cream",
                checked: false,
                category: "frozen",
            },
            {
                name: "pizza",
                checked: false,
                category: "frozen",
            },
            {
                name: "water",
                checked: false,
                category: "drinks",
            },
            {
                name: "popcorn",
                checked: false,
                category: "snacks",
            },
        ]
    },
    {
        name: "To-Do",
        listItems: [
            {
                name: "paint",
                checked: false,
                category: "",
            },
            {
                name: "fix stairs",
                checked: false,
                category: "",
            },
            {
                name: "caulk window",
                checked: false,
                category: "",
            },
            {
                name: "replace light",
                checked: false,
                category: "",
            },
            {
                name: "take out trash",
                checked: false,
                category: "",
            },
            {
                name: "send mail",
                checked: false,
                category: "",
            },
            {
                name: "go grocery shopping",
                checked: false,
                category: "",
            },
            {
                name: "change oil",
                checked: false,
                category: "",
            },
            {
                name: "replace air filter",
                checked: false,
                category: "",
            },
            {
                name: "make dinner",
                checked: false,
                category: "",
            },
        ]
    },
    {
        name: "Work",
        listItems: [
            {
                name: "send emails",
                checked: false,
                category: "",
            },
            {
                name: "attend meeting",
                checked: false,
                category: "",
            },
            {
                name: "submit time off request",
                checked: false,
                category: "",
            },
            {
                name: "ask for raise",
                checked: false,
                category: "",
            },
            {
                name: "complete project",
                checked: false,
                category: "",
            },
            {
                name: "do training",
                checked: false,
                category: "",
            },
            {
                name: "work on presentation",
                checked: false,
                category: "",
            },
            {
                name: "update computer",
                checked: false,
                category: "",
            },
            {
                name: "call client",
                checked: false,
                category: "",
            },
            {
                name: "update resume",
                checked: false,
                category: "",
            },
        ]
    },
    {
        name: "Animals",
        listItems: [
            {
                name: "cow",
                checked: false,
                category: "farm",
            },
            {
                name: "chicken",
                checked: false,
                category: "farm",
            },
            {
                name: "pig",
                checked: false,
                category: "farm",
            },
            {
                name: "horse",
                checked: false,
                category: "farm",
            },
            {
                name: "snake",
                checked: false,
                category: "desert",
            },
            {
                name: "lizard",
                checked: false,
                category: "desert",
            },
            {
                name: "whale",
                checked: false,
                category: "ocean",
            },
            {
                name: "dolphin",
                checked: false,
                category: "ocean",
            },
            {
                name: "lion",
                checked: false,
                category: "plains",
            },
            {
                name: "bear",
                checked: false,
                category: "forrest",
            },
        ]
    },
    {
        name: "Cities",
        listItems: [
            {
                name: "Indianapolis",
                checked: false,
                category: "",
            },
            {
                name: "New York",
                checked: false,
                category: "",
            },
            {
                name: "Boston",
                checked: false,
                category: "",
            },
            {
                name: "Miami",
                checked: false,
                category: "",
            },
            {
                name: "Los Angeles",
                checked: false,
                category: "",
            },
            {
                name: "Austin",
                checked: false,
                category: "",
            },
            {
                name: "Chicago",
                checked: false,
                category: "",
            },
            {
                name: "San Diego",
                checked: false,
                category: "",
            },
            {
                name: "Las Vegas",
                checked: false,
                category: "",
            },
            {
                name: "Charleston",
                checked: false,
                category: "",
            },
        ]
    },
    {
        name: "Technology",
        listItems: [
            {
                name: "iPhone",
                checked: false,
                category: "phone",
            },
            {
                name: "Galaxy S20",
                checked: false,
                category: "phone",
            },
            {
                name: "iPad",
                checked: false,
                category: "tablet",
            },
            {
                name: "iPad Air",
                checked: false,
                category: "tablet",
            },
            {
                name: "Surface",
                checked: false,
                category: "tablet",
            },
            {
                name: "MacBook Pro",
                checked: false,
                category: "laptop",
            },
            {
                name: "MacBook Air",
                checked: false,
                category: "laptop",
            },
            {
                name: "Mac Mini",
                checked: false,
                category: "desktop",
            },
            {
                name: "iMac",
                checked: false,
                category: "desktop",
            },
            {
                name: "Mac Pro",
                checked: false,
                category: "workstation",
            },
        ]
    },
    {
        name: "Stores",
        listItems: [
            {
                name: "Kroger",
                checked: false,
                category: "grocery",
            },
            {
                name: "Meijer",
                checked: false,
                category: "superstore",
            },
            {
                name: "Target",
                checked: false,
                category: "superstore",
            },
            {
                name: "Menards",
                checked: false,
                category: "hardware",
            },
            {
                name: "Home Depot",
                checked: false,
                category: "hardware",
            },
            {
                name: "Lowes",
                checked: false,
                category: "hardware",
            },
            {
                name: "Best Buy",
                checked: false,
                category: "electronics",
            },
            {
                name: "Kohls",
                checked: false,
                category: "department store",
            },
            {
                name: "7-11",
                checked: false,
                category: "convenience store",
            },
            {
                name: "Microcenter",
                checked: false,
                category: "electronics",
            },
        ]
    },
    {
        name: "Cars",
        listItems: [
            {
                name: "Cmax",
                checked: false,
                category: "hybrid",
            },
            {
                name: "Prius",
                checked: false,
                category: "hybrid",
            },
            {
                name: "Pacifica",
                checked: false,
                category: "minivan",
            },
            {
                name: "F150",
                checked: false,
                category: "truck",
            },
            {
                name: "Sierra 1500",
                checked: false,
                category: "truck",
            },
            {
                name: "Outlander Sport",
                checked: false,
                category: "crossover",
            },
            {
                name: "Denali",
                checked: false,
                category: "SUV",
            },
            {
                name: "Carnival",
                checked: false,
                category: "minivan",
            },
            {
                name: "Malibu",
                checked: false,
                category: "sedan",
            },
            {
                name: "Model 3",
                checked: false,
                category: "electric",
            },
        ]
    },
    {
        name: "Holidays",
        listItems: [
            {
                name: "Christmas",
                checked: false,
                category: "",
            },
            {
                name: "Halloween",
                checked: false,
                category: "",
            },
            {
                name: "Thanksgiving",
                checked: false,
                category: "",
            },
            {
                name: "Easter",
                checked: false,
                category: "",
            },
            {
                name: "Independence Day",
                checked: false,
                category: "",
            },
            {
                name: "New Year's Day",
                checked: false,
                category: "",
            },
            {
                name: "Memorial Day",
                checked: false,
                category: "",
            },
            {
                name: "Labor Day",
                checked: false,
                category: "",
            },
            {
                name: "Valentine's Day",
                checked: false,
                category: "",
            },
            {
                name: "Flag Day",
                checked: false,
                category: "",
            },
        ]
    },
    {
        name: "Colors",
        listItems: [
            {
                name: "red",
                checked: false,
                category: "",
            },
            {
                name: "blue",
                checked: false,
                category: "",
            },
            {
                name: "green",
                checked: false,
                category: "",
            },
            {
                name: "yellow",
                checked: false,
                category: "",
            },
            {
                name: "orange",
                checked: false,
                category: "",
            },
            {
                name: "pink",
                checked: false,
                category: "",
            },
            {
                name: "purple",
                checked: false,
                category: "",
            },
            {
                name: "white",
                checked: false,
                category: "",
            },
            {
                name: "black",
                checked: false,
                category: "",
            },
            {
                name: "brown",
                checked: false,
                category: "",
            },
        ]
    },
];

// declaring variable
var listType = "#app ul li";

function initListeners() {
    $(listType).click(function (e) { 
        let listID = e.currentTarget.id; //click listener - captures element ID
        loadListItems(listID); // passes ID to loadListItems function in model.js
    });
}

function addBackListener (){
    $(".back").click(function () {  
        $("#app").html(""); // clears html within #app
        loadLists(); // runs loadList
    });
}

function loadListItems(listID) {
    let listIndex = listID.replace("listID-", ""); // converts captured ID to list index value
    let listSting = "<ul>";
    $.each(LISTS[listIndex].listItems, function(idx, listItem) {
        listSting += `<li id="${idx}">${listItem.name}</li>`;
    });
    listSting += "</ul> <div class=\"back\">BACK</div>";
    
    $("#app").html(listSting);

    addBackListener();
}

export function loadLists() {
    let listSting = "<ul>";
    $.each(LISTS, function(idx, list) {
        listSting += `<li id="listID-${idx}">${list.name}</li>`;
    });
    listSting += "</ul>";
    $("#app").html(listSting);

    initListeners();
}