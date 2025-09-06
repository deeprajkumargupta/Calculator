const expression = document.querySelector('.expression');
const result = document.querySelector('.result');

const AllClear = document.querySelector('.All-Clear');
const Open_Bracket = document.querySelector('.Open-Bracket');
const Close_Bracket = document.querySelector('.Close-Bracket');
const Divide = document.querySelector('.Divide');

const Seven = document.querySelector('.Seven');
const Eight = document.querySelector('.Eight');
const Nine = document.querySelector('.Nine');
const Multiply = document.querySelector('.Multiply');

const Four = document.querySelector('.Four');
const Five = document.querySelector('.Five');
const Six = document.querySelector('.Six');
const Subtract = document.querySelector('.Subtract');

const One = document.querySelector('.One');
const Two = document.querySelector('.Two');
const Three = document.querySelector('.Three');
const Add = document.querySelector('.Add');

const Backspace = document.querySelector('.Backspace');
const Zero = document.querySelector('.Zero');
const Decimal = document.querySelector('.Decimal');
const Equate = document.querySelector('.Equate');

function appendtoExp(value) {
    expression.textContent += value;
}

One.addEventListener('click', () => {
    appendtoExp("1");
})

Two.addEventListener('click', () => {
    appendtoExp("2");
})

Three.addEventListener('click', () => {
    appendtoExp("3");
})

Four.addEventListener('click', () => {
    appendtoExp("4");
})

Five.addEventListener('click', () => {
    appendtoExp("5");
})

Six.addEventListener('click', () => {
    appendtoExp("6");
})

Seven.addEventListener('click', () => {
    appendtoExp("7");
})

Eight.addEventListener('click', () => {
    appendtoExp("8");
})

Nine.addEventListener('click', () => {
    appendtoExp("9");
})

Zero.addEventListener('click', () => {
    appendtoExp("0");
})

Open_Bracket.addEventListener('click', () => {
    appendtoExp("(");
})

Close_Bracket.addEventListener('click', () => {
    appendtoExp(")");
})

Divide.addEventListener('click', () => {
    appendtoExp("/");
})

Multiply.addEventListener('click', () => {
    appendtoExp("*");
})

Subtract.addEventListener('click', () => {
    appendtoExp("-");
})

Add.addEventListener('click', () => {
    appendtoExp("+");
})

Decimal.addEventListener('click', () => {
    appendtoExp(".");
})

AllClear.addEventListener('click', () => {
        expression.textContent = "";
        result.textContent = "";    
})
Backspace.addEventListener('click', () => {
    expression.textContent = expression.textContent.slice(0, expression.textContent.length - 1);
})
Equate.addEventListener('click', () => {
    let value = eval(expression.textContent);
    result.textContent = parseFloat(value.toFixed(8));
})



