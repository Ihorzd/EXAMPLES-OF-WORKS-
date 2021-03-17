// Your code goes here
let letter =prompt('Enter letter','');
let LenHalf=2;
let half =0.5;
if(letter===''){
    alert('Invalid value');
}
for(let i=0;i<letter.length;i++){
  if(letter[i]===' '){
        alert('Invalid value');
        break;
    
    
    }else{
        if (letter.length%LenHalf===0){
    
            alert(letter[letter.length/LenHalf-1]+letter[letter.length/LenHalf]);
            break;
    
        }else{
            let lent =letter.length/LenHalf-half;
            alert(letter[lent]);
            break;
        }
    }
}