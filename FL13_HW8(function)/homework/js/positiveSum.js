function positiveSum(){
    let araay=Array.from(arguments);
    let sum=0;
    for(let i=0;i<araay.length;i++){
        if(araay[i]>=0){
            sum+=araay[i];
        }
   }
    return sum;
}
console.log(positiveSum(1,2,1,70));