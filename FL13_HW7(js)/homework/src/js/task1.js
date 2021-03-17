// Your code goes here
let userlogin =prompt('enter login','');
let password='';
let hours = new Date().getHours();
let checkLogin=4;
let ours=20;
if (userlogin===null|| userlogin===''){
    alert('Canceled');
}else if(userlogin.length<checkLogin){
    alert('I don t know any users having name length less than 4 symbols');
}else if(userlogin==='User'){
    password=prompt('enter password','');
    if(password!=='UserPass'){
        alert('Wrong password');
    }else{
        if(hours<ours){
            alert('Good day, dear User!');
        }else{
            alert('Good evening, dear User!');
        }
    }
}else if(userlogin==='Admin'){
    password=prompt('enter password');
    if(password!=='RootPass'){
        alert('Wrong password');
    }else{
        if(hours<ours){
            alert('Good day, dear Admin!');
        }else{
            alert('Good evening, dear Admin!')
        }
    }
}else{
    alert('I don’t know you');
}


