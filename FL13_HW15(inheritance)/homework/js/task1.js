// TODO: Your code goes here
let asign = function(){
    arguments[0]=[];
    for (let i=1;i<arguments.length;i++){
        arguments[0].push(arguments[i]);
    }
    return arguments[0];
}
//console.log(asign({},{a:0},{b:2}));