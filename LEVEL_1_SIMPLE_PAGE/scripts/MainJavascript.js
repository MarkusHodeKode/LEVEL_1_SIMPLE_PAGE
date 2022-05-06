// Made by the owner of discord-tag: MarkusM#8517 
//E-mail: MarkusMj.Hodekode@gmail.com
// For questions or suggestions to better the code, please contact me.




// ============== var and values Start here ============== 


var caterpillar = 1; //Value for switching between images in oystein() function
var MilkInStock = 0; //Value for how much milk is left in stock in purchase() function
var Fed = 0; //Value for how much milk the beast has consumed in purchase() function


// ============== var and values end here ==============




// ============== Functions Start here ==============


function RNG(){ //Random Number Generator for number 0-5 
    MilkInStock = Math.floor(Math.random() * 6);
} 

function oystein() { //Function for altering between images of "Products"
    if (caterpillar == 1){
        var elements = document.getElementsByClassName("stretchy");
        for (var i = 0; i < elements.length; i+= 1) {
            elements[i].src = "images/oystein.png";
            elements[i].alt = "The almighty teacher showing his presence";
        }
        caterpillar -= 1;
        alert("Are you sure you wanted to do that?");
        alert("You can undo your action by clicking the button once more");
        alert(":)");

    } else {
        var elements = document.getElementsByClassName("stretchy");
        for (var i = 0; i < elements.length; i+= 1) {
            elements[i].src = "images/hungryboy.png";
            elements[i].alt = "The almighty Caterpillar is still hungry!";
        }
        caterpillar += 1;
        alert("Action undone! Welcome to the 'safe side' :)");
        
    }
}

function purchase(){ //Function for feeding the beast, and if not in stock, resupply.
    if (MilkInStock == 0){
        var elements = document.getElementsByClassName("purchaseProduct");
        for (var i = 0; i < elements.length; i+= 1) {
            elements[i].innerHTML = 'Buy Milk: <span class="red">$-.--</span>';
        }
        MilkInStock -= 1;
        alert("Out of Stock! Try again later!");

    } else if (MilkInStock >= 1) {
        Fed += 1;
        if (Fed >= 100){
            alert("He is full!");
            stop();
        } else {
            MilkInStock -= 1;
            alert("You successfully fed the beast!");
            alert("BUT IT IS STILL HUNGRY!");
        }

    } else {
        MilkInStock == -1;
        var elements = document.getElementsByClassName("purchaseProduct");
        for (var i = 0; i < elements.length; i+= 1) {
            elements[i].innerHTML = 'Buy Milk: <span class="green">$1.99</span>'; //Cheeky price increase
        }

        RNG();
        alert("Store has been restocked!");
    }

}


// ============== Functions end here ==============




// ============== Run Functions start here ==============


RNG(); //Run this function right away to set a "random" number for MilkInStock variation


// ============== Run Functions end here ==============