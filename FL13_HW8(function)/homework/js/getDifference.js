 function isBigger(a,b){
    let c=a>b;
    return c;
}

function getDifference(a,b){
    if (isBigger(a,b)===true){
        return a-b;
    }else{
        return b-a;
    }
}
console.log(getDifference(-3,-5));

