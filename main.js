let screenOutput = document.querySelector('.screen');
let storeVal = 0;
let valueLength = 0;
let expression = 0;

function init(){
  document.querySelector('.calc-buttons').addEventListener('click', function(event) {
    buttonClick(event.target.innerText);
  });
}

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    
    switch (value) {
    case 'C':
      storeVal = 0;
      screenOutput.innerText = 0;
      break;
    case '←':
      if (screenOutput.innerText.length !== 1) {
        valueLength = screenOutput.innerText.length;
        screenOutput.innerText = screenOutput.innerText.substr(0, valueLength - 1);
        break;
      }
      screenOutput.innerText = 0;
      break;
    case '=':
      expression = new String(storeVal + screenOutput.innerText);
      console.log(expression);
      expression = eval(expression.substr(1));
      storeVal = 0;
      console.log(storeVal);
      screenOutput.innerText = (expression);
      break;

    case '+':
      storeVal += screenOutput.innerText;
      console.log(storeVal);
      storeVal += '+';
      console.log(storeVal);
      screenOutput.innerText = 0;
      console.log(storeVal);
      break;
    case '-':
      storeVal += screenOutput.innerText;
      storeVal += '-';
      screenOutput.innerText = 0;
      break;
    case '×':
      storeVal += screenOutput.innerText;
      console.log(storeVal);
      storeVal += '*';
      console.log(storeVal);
      screenOutput.innerText = 0;
      console.log(storeVal);
      break;
    case '÷':
      storeVal += screenOutput.innerText;
      storeVal += '/';
      screenOutput.innerText = 0;
      break;
    default:
      break;
    }
  } else {
    inputNumber(value);
  }
}

function inputNumber(number) {
  if ((screenOutput.innerText.substr(0,1) === '0')) {
    screenOutput.innerText = number;
  } else {
    screenOutput.innerText += number;
  }
}

init();
