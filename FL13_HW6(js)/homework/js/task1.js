// Your code goes here
let number= parseFloat( prompt('enter number','0'));
let percentage=parseFloat( prompt('enter percentage','0'));
let sum=0;
let tip=0;
let maxPercentahe=100;
if(isNaN(number)||number<=0||percentage<=0||percentage>=maxPercentahe){
    alert('Invalid input data');
}else{
    tip=number/maxPercentahe*percentage;
    sum=parseFloat(number)+parseFloat(tip);
    alert('Check number: '+ number*maxPercentahe/maxPercentahe + '\nTip: '
    +percentage*maxPercentahe/maxPercentahe + '\nTip amount: '+ tip*maxPercentahe/maxPercentahe
     + '\nTotal sum to pay: ' + sum*maxPercentahe/maxPercentahe);
 
}
