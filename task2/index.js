
const grid = (num) => {
  if (num < 0){
    return null
  } else { 
    for (let i = 0; i < num; i++){  
      let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
      if ((num/2) < alphabet.length){
          alphabet += alphabet
      }
      console.log((alphabet.slice(i, i+num).split('').join(' ')))
  }
  }
}
grid(8)