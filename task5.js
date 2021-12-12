function camelize(str){
    return str.split('-')
              .map((word, i) => i ? (word = word.split(''), word.shift().toUpperCase() + word.join('')) : word)
              .join('')
  }
  
  console.log(camelize("my-short-string"))