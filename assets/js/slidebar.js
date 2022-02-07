// OUVERTURE DES SOUS CATEGORIES 


let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
//FILTRES > CATEGORIES 
// LORSQU'ON SELECTIONNE "FEMME" 
let femaleChoose = document.getElementById("femaleChoose")

femaleChoose.addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].gender != "Female") {
            console.log(notOK)
        } else {
            console.log(OK)
        }
    }
});

// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "HOMME"
let maleChoose = document.getElementById("maleChoose")

maleChoose.addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].gender != "Male") {
            console.log(notOK)
        } else {
            console.log(OK)
        }
    }
});


// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "HOMME"

// Il faut afficher tous les produits



/////////////////////////////////////////////////////////////////////////////////////////////////////////
//FILTRES > CATEGORIES 
// LORSQU'ON SELECTIONNE "ADIDAS"

let adidasChoose = document.getElementById("adidasChoose")

adidasChoose .addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].brand != "Adidas") {
            console.log(notOK)
        } else {
            console.log(OK)
        }
    }
});

// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "AMBUSH"


let ambushChoose = document.getElementById("ambushChoose")

ambushChoose .addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].brand != "Ambush") {
            console.log(notOK)
        } else {
            console.log(OK)
        }
    }
});


// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "Balengicia"

let balengiciaChoose = document.getElementById("balengiciaChoose")

balengiciaChoose.addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].brand != "Balengicia") {
            console.log(notOK)
        } else {
            console.log(OK)
        }
    }
});


// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "CONVERSE"



let converseChoose = document.getElementById("converseChoose")

converseChoose.addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].brand != "Converse") {
            console.log(notOK)
        } else {
            console.log(OK)
        }
    }
});


// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "DIOR"



let diorChoose = document.getElementById("diorChoose")

diorChoose.addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].brand != "Dior") {
            console.log(notOK)
        } else {
            console.log(OK)
        }
    }
});


// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "JORDAN"



let jordanChoose = document.getElementById("jordanChoose")

jordanChoose .addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].brand != "Jordan") {
            return 
        } else {
            console.log(OK)
        }
    }
});


// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "NIKE"



let nikeChoose = document.getElementById("nikeChoose")

nikeChoose .addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].brand != "Nike") {
            
        } else {
            console.log(OK)
        }
    }
});


// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "OFFWHITE"



let offwhiteChoose = document.getElementById("offwhiteChoose")

offwhiteChoose .addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].brand != "Off-White") {
            
        } else {
            console.log(OK)
        }
    }
});

// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "SUPREME"



let supremeChoose = document.getElementById("supremeChoose")

supremeChoose .addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].brand != "Supreme") {
            
        } else {
            console.log(OK)
        }
    }
});


// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "VERSACE"



let versaceChoose = document.getElementById("versaceChoose")

versaceChoose .addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].brand != "Versace") {
            
        } else {
            console.log(OK)
        }
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LORSQU'ON SELECTIONNE "BLANC"



let whiteChoose = document.getElementById("whiteChoose")

whiteChoose .addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].color != "White") {
            
        } else {
            console.log(OK)
        }
    }
});


// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "BLUE"

let blueChoose = document.getElementById("blueChoose")

blueChoose .addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].color != "Blue") {
            
        } else {
            console.log(OK)
        }
    }
});

// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "GRIS"

let grayChoose = document.getElementById("grayChoose")

grayChoose .addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].color != "Gray") {
            
        } else {
            console.log(OK)
        }
    }
});

// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "JAUNE"

let yellowChoose = document.getElementById("yellowChoose")

yellowChoose .addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].color != "Yellow") {
            
        } else {
            console.log(OK)
        }
    }
});


// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "MARRON"

let brownChoose = document.getElementById("brownChoose")

brownChoose .addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].color != "Brown") {
            
        } else {
            console.log(OK)
        }
    }
});




// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "NOIR"

let blackChoose = document.getElementById("blackChoose")

blackChoose .addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].color != "Black") {
            
        } else {
            console.log(OK)
        }
    }
});



// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "ORANGE"

let orangeChoose = document.getElementById("orangeChoose")

orangeChoose .addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].color != "Orange") {
            
        } else {
            console.log(OK)
        }
    }
});



// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "ROSE"

let pinkChoose = document.getElementById("pinkChoose")

pinkChoose .addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].color != "Pink") {
            
        } else {
            console.log(OK)
        }
    }
});


// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "ROUGE"

let redChoose = document.getElementById("redChoose")

redChoose.addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].color != "Red") {
            
        } else {
            console.log(OK)                }
    }
});



// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "VERT"

let greenChoose = document.getElementById("greenChoose")

greenChoose.addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].color != "Red") {
            
        } else {
            console.log(OK)
        }
    }
});



// _____________________________________________________________________________________________________
// LORSQU'ON SELECTIONNE "VIOLET"

let purpleChoose = document.getElementById("purpleChoose")

purpleChoose.addEventListener("click",()=> { 
    for (let count = 0; count < data.products.length; count++) {
        if (data.products[count].color != "Purple") {
            
        } else {
            console.log(OK)
        }
    }
});