/* Your code goes here */
const myFighter = new Fighter({name: 'Ross', damage: 100, hp: 1000, strength: 30, agility: 40});
const myFighter2 = new Fighter({name: 'Igor', damage: 40, hp: 100, strength: 50, agility: 35});

function Fighter(valu){
    let FighterValu=valu;
    FighterValu.wins=0;
    FighterValu.losses=0;
      
        
        return{ 
            getName: () => { 
                return FighterValu.name; 
            },
            getDamage:() => {
                return FighterValu.damage;
            },
            getStrength:() => {
                return FighterValu.strength;
            },
            getAgility:() => {
                return FighterValu.agility;
            },
            getHealth:() => {
                return FighterValu.hp
            },
            heal:(heal) => {
                const maxHp=100
                FighterValu.hp+=heal;
                FighterValu.hp <= 0 ? FighterValu.hp=0:FighterValu.hp;
                FighterValu.hp>=maxHp ? FighterValu.hp=maxHp:FighterValu;
                console.log(FighterValu.hp);
            },
            dealDamage:(valu) => {
                FighterValu.hp-=valu;
                FighterValu.hp<=0 ? FighterValu.hp=0:FighterValu.hp;
            },
            attack:(fighter) => {
                const max = 1;
                const del = 100;
                let success = max - (FighterValu.agility + FighterValu.strength) / del;
                if (Math.random() <= success) {
                    fighter.dealDamage(FighterValu.damage);
                    console.log(`${FighterValu.name} makes ${FighterValu.damage} damage to ${fighter.getName()}`);
                } else {
                    console.log(`${FighterValu.name} attack missed`);
                }
            },
            logCombatHistory:() => console.log( `Name: ${FighterValu.name},
             ${FighterValu.wins}, ${FighterValu.losses}`),
            addWin:() => { 
                FighterValu.wins++ 
            },
            addLosses:() => {
                 FighterValu.losses++ 
                }
        };
        
        
}
function battle(firstFighter,secondFighter){
    if (firstFighter.getHealth()===0){
        console.log(`${firstFighter.getName()} is dead and can't fight`);
        return;
    }else if(secondFighter.getHealth()===0){
        console.log(`${secondFighter.getName()} is dead and can't fight`);
        return;
    }else{
    while(firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
        firstFighter.attack(secondFighter);
        if (secondFighter.getHealth() > 0) {
            secondFighter.attack(firstFighter);
            if (firstFighter.getHealth() === 0) {
                secondFighter.addWin();
                firstFighter.addLosses();
                console.log(`${secondFighter.getName()} has won!`);
            }
        } else {
            firstFighter.addWin();
            secondFighter.addLosses();
            console.log(`${firstFighter.getName()} has won!`);
        }
    }
}
}
 

battle(myFighter,myFighter2);
battle(myFighter2,myFighter);
//myFighter.dealDamage(170);
//myFighter.heal(150);
//myFighter.logCombatHistory(); 
//myFighter.attack(myFighter2);
//console.log(myFighter.getStrength());

