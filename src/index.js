/* module.exports = function check(str, bracketsConfig) {
  // your solution
}
 */

function check(str, bracketsConfig) {
 let count = 0;
 let arr = [];
 for(let i = 0; i < bracketsConfig.length; i++){
  arr = arr.concat(bracketsConfig[i])
 }

arr.forEach(el => {
  for(let i = 0; i < str.length; i++){
    if(el === str[i]){
      count++
    }
  }
})
 console.log(arr)
 console.log(count)
}

check('[]()(', [['(', ')'], ['[', ']']]);