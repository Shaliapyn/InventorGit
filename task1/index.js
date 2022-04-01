function calculate(str) {
  str = str.split(' ')
  let [left, act, right] = str;
  if (act == "+"){
      str = left + right
  } else if (act == "-") {
      let lengthDif = left.length - right.length
      if (left.length <= right.length){
          str = ""
      } else {
          str = '';
          for (let i = 0; i < lengthDif; i++){
              str += "."
          }
      } 
  } else if (act == '*'){
      str = left.repeat(right.length)
  } else if (act == '//') {
      if (left.length <= right.length){
          str = ""
      }  else {
          let lengthDevide = Math.floor(left.length / right.length)
          str = ""
          for (let i = 0; i < lengthDevide; i++){
              str += "."
          }
      }       
  }
  return str
}

console.log(calculate("... - .."))