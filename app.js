const container = document.getElementById("container");
const generateBtn = document.getElementById("generateBtn");
const rollBtn = document.getElementById("rollBtn");
const sumBtn = document.getElementById("sumBtn");
let diceArray = [];
// creating the initial "Die" object
class Die {
    constructor() {
        this.dice = document.createElement('div');
        this.dice.className = "dice";
        this.image = document.createElement('img');
        this.dice.appendChild(this.image);
        this.roll();
        container.appendChild(this.dice);
        // an event listener to re-roll each die when it's clicked once
        this.dice.addEventListener('click', () => {
            this.roll();
        });
        // an event listener to remove the dice if it's clicked twice
        this.dice.addEventListener('dblclick', () => {
            this.dice.remove();
            let index = diceArray.indexOf(this);
            diceArray.splice(index, 1);
        });
    };
    // a method to assign each 'dice' a random value between 1 and 6 - this is called when the dice is created and when the roll button is clicked
    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.image.src= `css/images/dice${this.value}.png`
    };
};
// an event listener that calls the 'addDie' function when the generator button is clicked
generateBtn.addEventListener('click', addDie);
// an event listener that calls the roll method for every dice object when the roll button is clicked
rollBtn.addEventListener('click', () => {
    for (i = 0; i < diceArray.length; i++) {
        diceArray[i].roll();
    }
});
// an event listener that calls the 'sumValues' function when the 'add die' button is clicked
sumBtn.addEventListener('click', sumValues);
// an event listener that reloads the page when the 'reset' button is clicked
resetBtn.addEventListener('click', () => location.reload());
// the 'addDie' function creates a new dice object and adds it to an array when it is called
function addDie() {
    let dice = new Die();
    diceArray.push(dice);
};
// when called, the 'sumValues' function adds up all the object values in the array in order to return the total of all the dice values added together
function sumValues() {
    let sum = 0;
    for (i = 0; i < diceArray.length; i++) {
        sum += diceArray[i].value;
    };
    alert(`If you add up the value of every dice, you get ${sum}!`);
};