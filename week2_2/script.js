function printArrow(length, direction) {
    let line = '-'.repeat(length);
    if (direction) {
      console.log(line + '>');
    } else {
      console.log('<' + line);
    }
  }
  
  printArrow(5, true);
  printArrow(3, false);

  //function userArr()

function printLowToHigh(length) {
  for (let i = 1; i <= length; i++){
    console.log('*'.repeat(i));
  }
} 

printLowToHigh(5)

function printHighToLow(length) {
  for (let i = length; i > 0; i--){
    console.log('*'.repeat(i));
  }
} 

printHighToLow(5)

function multiplicationTable(num){
  for (let i = 1; i <= num; i++){
    for (let j = 1; j <= num; j++){
        console.log(i*j);
    }
  }
}


function printReturnNum(num) {
  let result = '';
  while (num > 0) {
    result += (num % 10).toString();
    num = Math.floor(num / 10);
  }
  console.log(result);
}

printReturnNum(25384); 

function checkString(str) {
  if (str === "") {
    return "";
  }
  if (str.trim() === "") {
    return " ";
  }
  return str.trim();
}

console.log(checkString("hello world  "))