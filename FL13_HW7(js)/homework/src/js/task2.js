// Your code goes here
let message=confirm('Do you want to play a game?');
let usernumber;
let repeadask;
let range=6,
    prize1=100,
    prize2=50,
    prize3=25;
if(message===false){
    alert('You did not become a billionaire, but can');
}else if(message===true){
    igra(range,prize1,prize2,prize3,0);
}
function igra(range,prize1,prize2,prize3,totalprize){
    parseInt(prize1);
    parseInt(prize2);
    parseInt(prize3);
    let randomNumber=Math.floor(Math.random()*range);
    let usernumber;
    let repeadask;
    let rangeSecond=11,
        prizeSecondlevel1=200,
        prizeSecondlevel2=100,
        prizeSecondlevel3=50;
    
    usernumber = prompt('Choose a roulette pocket number from 0 to '+ (range-1)
    +'\nAtemp left: 3'+'\nTotal prize: '+totalprize +'\nPosible prize on current attemp'+prize1+'$');
    if(parseInt( usernumber)===parseInt( randomNumber)){
        totalprize=totalprize+ prize1;
        alert('Congratulation, you won!   Your prize is: '+ prize1 +' $.');
        repeadask= confirm('do you want continue?');
        if(repeadask===false){
            alert(' Thank you for your participation. Your prize is:'+ totalprize +'$');
        }else{
            igra(rangeSecond,prizeSecondlevel1,prizeSecondlevel2,prizeSecondlevel3, totalprize);
        }


    }else{
        usernumber = prompt('Choose a roulette pocket number from 0 to '+ (range-1)
        +'\nAtemp left: 2'+'\nTotal prize: '+totalprize+'\nPosible prize on current attemp'+prize2+'$');
        if(parseInt( usernumber)===parseInt( randomNumber)){
            totalprize=totalprize+prize2;
            alert('Congratulation, you won!   Your prize is: '+ prize2 +' $. ');
            repeadask= confirm('do you want continue?');
            if(repeadask===false){
                alert('Thank you for your participation. Your prize is: '+ totalprize +' $');
            }else{
                igra(rangeSecond,prizeSecondlevel1,prizeSecondlevel2,prizeSecondlevel3, totalprize);
            }

        }else{


        usernumber = prompt('Choose a roulette pocket number from 0 to '+ (range-1)
        +'\nAtemp left: 1'+'\nTotal prize: '+totalprize+'\nPosible prize on current attemp'+prize3+'$');
        if(parseInt( usernumber)===parseInt( randomNumber)){
            totalprize=totalprize+prize3;
            alert('Congratulation, you won!   Your prize is: '+ prize3 +' $. ');
            repeadask= confirm('do you want continue?');
            if(repeadask===false){
                alert('Thank you for your participation. Your prize is: '+ totalprize +' $');
            }else{
                igra(rangeSecond,prizeSecondlevel1,prizeSecondlevel2,prizeSecondlevel3, totalprize);
            }
        }else{
            alert('Thank you for your participation. Your prize is: … $');
        }
    }


    }
}



