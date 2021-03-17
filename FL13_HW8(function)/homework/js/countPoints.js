let isBigger= function (a,b){
    let c=a>b;
    if(a===b){
        c=0;
    }
    return c;
}
isBigger(3,5);

function countPoints(){
let val=arguments[0];
let sum=0;
for(let i=0;i<val.length;i++){
    val[i]=val[i].split(':');
    let b= isBigger(val[i][0],val[i][1]);
    if(b===true){
        sum+=3;
    }else if(b===false){
        sum+=0;
    }else if(b===0){
        sum+=1;
    }
}
return sum;
}
console.log(countPoints(['3:1','1:0','0:0','1:2','4:0','2:3','1:1','0:1','2:1','1:0']));