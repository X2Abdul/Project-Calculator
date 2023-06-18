const buttons = document.querySelectorAll('.btn');
const screenText = document.querySelector('.screenText');

let output = '';


const multiply = function(num1, num2) {
  return num1 * num2;
};

const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const divide = function(num1, num2){
  return num1 / num2;
}

const modulus = function(num1, num2){
  return num1 % num2;
}


const operate = function(operator, num1, num2){
  switch(operator){
    case '−':
      return subtract(num1, num2);

    case '+':
      return add(num1, num2);

    case '×':
      return multiply(num1, num2);

    case '÷':
      return divide(num1, num2);

    case '%':
      return modulus(num1, num2);

  }
}

let Answer = 0;

const evaluate = function(output){
  if (output.includes('+') || output.includes('−') || output.includes('×') || output.includes('÷') || output.includes('%')) {
    const operatorStack = [];
    const operandStack = [];

    const numList = ['0','1','2','3','4','5','6','7','8','9'];
    const operatorList = ['+','−', '×', '÷', '%'];
    let number = '';
    for(let i = 0; i < output.length; i++){
      if(numList.includes(output[i])){
        number += output[i];
      } else if(operatorList.includes(output[i])){
        operandStack.push(number);
        operatorStack.push(output[i]);
        number = '';
      }else if(i < output.length){
        operandStack.push(number);
      }

      if (i === output.length - 1 && number !== '') {
        operandStack.push(number);
      }
    }
    operandStack.reverse();
    operatorStack.reverse();
    
    let operand1 = '';
    let operand2 = '';
    let operator = '';
    let finalAns = 0;
    while(operandStack.length !== 0){
      if(finalAns === 0){
        operand1 = operandStack.pop();
        operand2 = operandStack.pop();
        operator = operatorStack.pop();
      }else{
        operand1 = finalAns.toString();
        operand2 = operandStack.pop();
        operator = operatorStack.pop();
      }
      
      finalAns = operate(operator, parseInt(operand1), parseInt(operand2));
      
      console.log(operand1 + operator + operand2 + " = " + operate(operator, parseInt(operand1), parseInt(operand2)));
    }
    Answer = finalAns;
    return finalAns;
  }
};


let evaluated = false;

buttons.forEach(button => {
  button.addEventListener('click', function(){
    if (output.length < 10 || button.classList.contains('remove') || button.id === '=') {
      var audio = new Audio('./SoundEffects/clickSound.wav');
      audio.play();
      if (button.id === 'AC') {
        output = '';
        screenText.textContent = output;
        evaluated = false;
      } else if (button.id === 'C') {
        output = output.slice(0, -1);
        screenText.textContent = output;
        evaluated = false;
      } else if (button.id === '=') {
        let result = evaluate(output);
        output = result.toString();
        screenText.textContent = output;
        evaluated = true;
      } else {
        if (evaluated) {
          output = Answer;
          output += button.textContent;
          evaluated = false;
        } else {
          output += button.textContent;
        }
        screenText.textContent = output;
      }
    }
  });
});

  