/*
 Author: Dominic Bruno
 Class:  Software Engineering
 Project: Lab 2 / Dice Roller
 Description: This is the first version of my Dice Roller application and is being submitted as part of Lab 2.
 File: dice-roller-app.js
*/


let allDice = []; // Initialized for storing dice objects & referncing withing the document

/*
*  Class: Dice
*  Functionality: focus for this assignment.  
*  Functionality: dice objects are generated and stored in an array
*  Functionality: ability to roll() the dice from the array
*/

class Dice {
/* 
*  Function: constructor(positionIn)
*  Functionality: position, value, valueString
*  Other: When new dice is generated, they are assigned a positon in the array of dice on the HTML page
*/  
    constructor(position_in) {
        this.position = position_in;
        this.value = 1;
        this.valueString = "&#9856";
    }

/* 
*  Function: getPosition()
*  Functionality: returns dice position in array of dice class elements on page
*  Other: Standard
*/   
    getPosition() {
        return this.postion;
    }

/* 
*  Function: getValue()
*  Functionality: returns value of dice
*  Other: Standard
*/ 
 getValue() {
        return this.value;
    }

/* 
*  Function: getValueString()
*  Functionality: returns string value of dice
*  Other: Standard
*/ 
getValueString() {
    return this.valueString;
}

/* 
*  Function: convertValuetoUnicodeString()
*  Functionality: assigns string value to new variable based on value
*  Other: Unicode for Dice: &#9856 - &#9861
*/ 
    convertValueToUnicodeString() {
        if (this.value == 1) {
            this.valueString = "&#9856";
        } else if (this.value == 2) {
            this.valueString = "&#9857";
        } else if (this.value == 3) {
            this.valueString = "&#9858";
        } else if (this.value == 4) {
            this.valueString = "&#9859";
        } else if (this.value == 5) {
            this.valueString = "&#9860";
        } else if (this.value == 6) {
            this.valueString = "&#9861";
        } 
    }

/* 
*  Function: randomizeValue()
*  Functionality: assigns new random value to this.value
*  Other: Utilizes Math.floor() & Math.random() from 1 - 6
*/ 
    randomizeValue() {
        this.value = Math.floor(Math.random() * 6) + 1;
    }
    
/* 
*  Function: generateDiceTag()
*  Functionality: creates dice elements on HTML page
*  Other: Utilizes document & appendChild() & getElementsByClassName() & createElement()
*/ 
    generateDiceTag() {
        var allDiceColumns = document.getElementsByClassName("dice-column");
        var d = document.createElement("h1");
        d.className = "dice";
        d.innerHTML = this.valueString;
        allDiceColumns[this.position].appendChild(d);
        var v = document.createElement("h5");
        v.className = "actual-value";
        v.innerHTML = this.value;
        allDiceColumns[this.position].appendChild(v);
    }

/* 
*  Function: updateTags()
*  Functionality: updates innerHTML of value and valueString
*  Other: Indexes arrays of previously created dice and values by using this.positon
*/ 
    updateTags() {
        var di = document.getElementsByClassName("dice");
        var vals = document.getElementsByClassName("actual-value");
        di[this.position].innerHTML = this.valueString;
        vals[this.position].innerHTML = this.value;

    }

/* 
*  Function: roll()
*  Functionality: Randomizes dice and then updates the tags on the HTML page
*  Other: Uses randomizeValue(), convertValueToUnicodeString(), updateTags()
*/ 
    roll() {
        this.randomizeValue();
        this.convertValueToUnicodeString();
        this.updateTags();
    }
}

/* 
*  Function: generateAllDice(diceCountIn)
*  Functionality: generates a dice on the HTML page given the parameter amountdesred
*  Other: Uses dice.generateDiceTag()
*/ 
function generateAllDice(diceCountIn) {
    for(var i = 0; i < diceCountIn; i ++) {
        dice = new Dice(i);
        dice.generateDiceTag();
        allDice.push(dice);
    }
}

generateAllDice(5); // Basic call to generateAllDice() to simulate assignment preferences

/* 
*  Function: rollAllDice()
*  Functionality: rolls all the dice by indexing the array of dice class elements
*  Other: Uses dice.roll() on each dice & is called whenever index.html, #roll-botton is pushed
*/ 
function rollAllDice() {
    var runningSum = 0;
    for(var i = 0; i < allDice.length; i ++) {
        allDice[i].roll();
        runningSum += allDice[i].getValue();
    }
    document.getElementById("summary-text").innerHTML = "Congrats, you succesffuly rolled a " + runningSum + "!";
}
