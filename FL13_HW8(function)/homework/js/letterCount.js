function letterCount(){
    let str=arguments[0];
    let leter=arguments[1];
    str=str.toLowerCase();
    leter=leter.toLowerCase();
    let sum=0;
   for(let i=0;i<str.length;i++){
      if(str[i]===leter[0]){
          sum=sum+1;
      }
    }
    return sum;
}

console.log(letterCount('Maggy','G'));
console.log(letterCount('Barry','b'));
console.log(letterCount('','z'));