module.exports = function check(str, bracketsConfig) {

  let newStr = str;
  for(let i = 0; i<str.length; i++){
    if(i % 2 === 0){
      newStr = newStr.replace('|', '{')
    }else {
      newStr = newStr.replace('|', '}')
    }
  }

  let newStr2 = newStr;
  for(let i = 0; i<str.length; i++){
    if(i % 2 === 0){
      newStr2 = newStr2.replace('7', '(')
    }else {
      newStr2 = newStr2.replace('7', ')')
    }
  }

  let newStr3 = newStr2;
  for(let i = 0; i<str.length; i++){
    if(i % 2 === 0){
      newStr3 = newStr3.replace('8', '{')
    }else {
      newStr3 = newStr3.replace('8', '}')
    }
  }

  console.log(newStr3)
    
  const open = ['(', '[', '{', '1', '3', '5']
  let stack = [];

  let obj ={
    [')'] : '(',
    [']'] : '[',
    ['}'] : '{',
    '2' : '1',
    '4' : '3',
    '6' : '5'
  }

  for(let i = 0; i < newStr3.length; i++){
    let symbol = newStr3[i];

    if (open.includes(symbol)){
      stack.push(symbol)
    } else {
      if(stack.length === 0){
        return false;
      }
    }

    let topEl = stack[stack.length - 1]

    if( obj[symbol] === topEl){
      stack.pop();
    }    
  }

  if(stack.length === 0){
    return true;
  } else {
    return false;
  }
}