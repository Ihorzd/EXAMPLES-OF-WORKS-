// TODO: Your code goes here
let upSpedometr=20;
let downSpedomtr=20;
let count=0;
let timepauseDrive=2000;
let timepauseStop=1500;
let maxSpedometrLimit = 30;
function Vehicle(color,engine){
    let maxSpeed=70;
    let speed=0;
    let message='Vehicle is stopped. Maximum speed during the drive was';
    this.message=message;
    this.count=count;
    this.speed=speed;
    this.maxSpeed=maxSpeed;
    this.color=color;
    this.engine=engine;

    this.getInfo= function () {
        console.log({
            'engine':this.engine,
            'color':this.color,
            'maxSpeed':this.maxSpeed
            });
        
        
    }
    this.upgradeEngine=function (newEngine, maxSpeed) {
        this.engine=newEngine;
        this.maxSpeed=maxSpeed;
    }

    this.drive=function() {
        
        let speedUP= setInterval(() => {
            this.speed+=upSpedometr;
            console.log(this.speed)
            if(this.speed>=maxSpeed){
                //clearInterval(speedUP);
                console.log('speed is too high, SLOW DOWN!');
            }
           if(count>0){
               clearInterval(speedUP);
               count--;
           }
        } ,timepauseDrive);
       
    }
   
    this.stop= function () { 
        count++;
        let maxSpeedNow=this.speed;
        let speedUP =setInterval(() => {
        while(this.speed>0){
        this.speed-=downSpedomtr;
        console.log(this.speed);
        if(this.speed<=0){
            clearInterval(speedUP);
            console.log(`${this.message} ${maxSpeedNow+upSpedometr}`);
        }
      
    }

    },timepauseStop)   
}


}

function Car(color, engine, model){
    Vehicle.call(this,color,engine);
    let maxSpeed=80;
    this.maxSpeed=maxSpeed;
    this.model=model;
    this.getInfo= function () {
        console.log({
            'engine':this.engine,
            'color':this.color,
            'maxSpeed':this.maxSpeed,
            'model':this.model
            });
    }
    this.changeColor= function (NewColor) {
        if(NewColor!==this.color){
            this.color=NewColor;
        }
    },
    this.stop= function () { 
        count++;
        let maxSpeedNow=this.speed;
        let speedUP =setInterval(() => {
        while(this.speed>0){
        this.speed-=downSpedomtr;
        console.log(this.speed);
        if(this.speed<=0){
            clearInterval(speedUP);
            console.log(`Car ${this.model} is stopped. Maximum speed during the drive ${maxSpeedNow+upSpedometr} `);
        }
      
    }

    },timepauseStop)   
}
   
 
}
Car.prototype = Object.create(Vehicle.prototype);

function Motorcycle(color,engine,model){
    Vehicle.call(this,color,engine);
    let maxSpeed=80;
    this.maxSpeed=maxSpeed;
    this.model=model;
    this.getInfo= function () {
        console.log({
            'engine':this.engine,
            'color':this.color,
            'maxSpeed':this.maxSpeed,
            'model':this.model
            });
    };
    let drives= this.drive;
    this.drive= function(){
        console.log('Let’s drive');
        drives.call(this);
        setInterval(() => {
        if(this.speed>=maxSpeed+maxSpedometrLimit){
            console.log('Engine overheating');
            
        }
    },timepauseDrive);
    }

    this.stop= function () { 
        count++;
        let speedUP =setInterval(() => {
        while(this.speed>0){
        this.speed-=downSpedomtr;
        console.log(this.speed);
        if(this.speed<=0){
            clearInterval(speedUP);
            console.log(`Motorcycle ${this.model} is stopped. Good drive `);
        }
        if(count>0){
            clearInterval();
            
        }
      
    }

    },timepauseStop)   
}
    
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
