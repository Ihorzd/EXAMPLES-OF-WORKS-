const task11_day=2;
const date = new Date(new Date().getFullYear(), 0, task11_day);
const maxHour=10;
const minSecDay=86400000;
function convert(){
    let arg =arguments;
    let array=[];

    for(let a of arg){
        if(typeof a==='string'){
        a=Number(a);
        array.push(a);
        }else if(typeof a==='number'){
            a=String(a);
            array.push(a);
        }
    }
    return array;
}
  

    
    function executeforEach(array,func) {
        for (let el of array) {
            func(el);
        }
    }
     



     function mapArray(){
        let a= arguments[0];
        let f=arguments[1];
        let ara=[];
        let secondar=[];
        for(let i=0;i<a.length;i++){
            if(typeof a[i]==='string'){
                ara.push(Number(a[i]));
            }else {
                ara.push(a[i]);
            }
        }
        for(let b of ara){
            secondar.push(f(b));
        }
        return secondar;
     }
        


     function filterArray(array,func){
        let q=[];
        executeforEach(array,function(el){

            if(func(el)===true){
                q.push(el);
            }
        });
        
        
        return q;
     }


     function containsValue(array,val){
        let sum=0;
        executeforEach(array,function(el){
            if(val===el){
                sum+=1;
            }
        });
        if(sum>0){
            return true;
        }else{
            return false;
        }
       
    }
    


function flipOver(str){
    let strNew='';
    for(let c of str){
        strNew=c+strNew;
    }
      return strNew;
}


function makeListFromRange(array){
    let arayNew =[];
    for(let i=array[0];i<=array[1];i++){
        arayNew.push(i);
    }
    return arayNew;
}

const fruits = [
    { name: 'apple', weight: 0.5 },
    { name: 'pineapple', weight: 2 }
  ];
  function getArrayOfKeys(frut,key){
      let array=[];
      executeforEach(frut, function(el){
          array.push(el[key]);
      });
      return array;
  }
 

  function substitute(array){
      let areyNew=[];
      let max=20;
      let min=10;
      mapArray(array,function(el){
        if(el<max && el>min){
            el='*';
            areyNew.push(el);
        }else{
            areyNew.push(el);
        }
      });
      return areyNew;
  }
 



function getPastDay(tday,lastday){
    return new Date(tday- new Date(lastday*minSecDay)).getDate();
    
}



function formatDate(date) {
    let zerro_pad = function(value) {
        return value < maxHour ? `0${value}` : value;
    }

    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ` +
            `${zerro_pad(date.getHours())}:${zerro_pad(date.getMinutes())}`;
}

