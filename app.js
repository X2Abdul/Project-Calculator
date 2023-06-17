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

const evaluate = function(output){
  if (output.includes('+') || output.includes('−') || output.includes('×') || output.includes('÷') || output.includes('%')) {
    let operatorIndex = 0;
    for (let i = 0; i < output.length; i++) {
      if (isNaN(parseInt(output[i]))) {
        operatorIndex = i;
        break;
      }
    }
    let num1 = parseInt(output.substring(0, operatorIndex));
    let num2 = parseInt(output.substring(operatorIndex + 1));
    let op = output[operatorIndex];
    console.log(op, num1, num2);

    return operate(op, num1, num2);
    
  }
  
};


buttons.forEach(button => {
    button.addEventListener('click', function(){
      if(output.length < 10 || button.classList.contains('remove') || button.id === '='){
        var audio = new Audio('./SoundEffects/clickSound.wav');
        audio.play();
        if(button.id === 'AC'){
          output = '';
          screenText.textContent = output;
        }else if(button.id === 'C'){
          output = output.slice(0, -1);
          screenText.textContent = output;
        }else if(button.id === '='){
          output = evaluate(output); 
          screenText.textContent = output;
        }else{
          output += button.textContent;
          screenText.textContent = output;
        }
    }
    });
});

  