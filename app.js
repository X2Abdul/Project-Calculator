const buttons = document.querySelectorAll('.btn');
const screenText = document.querySelector('.screenText');

let output = '';




const multiply = function(numbers) {
  if(!Array.isArray(numbers) || numbers.length ===0){
    return 0;
  }
  let ans = 1;
  for(let i = 0; i < numbers.length;i++){
    if(typeof numbers[i] === 'number'){
      ans *= numbers[i];
    }
  }
  
  return ans;
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

const evaluate = function(output){
  
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
          
        }else{
          console.log(button.textContent);
          output += button.textContent;
          screenText.textContent = output;
        }
    }
    });
});

  