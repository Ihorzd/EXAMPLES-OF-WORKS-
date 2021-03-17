window.addEventListener('storage', function(){
    return;
})
//let c =localStorage.getItem('data');
//c=JSON.parse(c);
let data=[
    {
        id:1,
        aughtor:'Olga vasiliv',
        book:'Helou world'
    },
    {
        id:2,
        aughtor:'Taras Shevchenko',
        book:'Kobzar'
    },
    {
        id:3,
        aughtor:'Lesia Ukrainka',
        book:'Lisova Pisnja'
    }
];

(function bookList(data,node){
    const ul = document.createElement('ul');
    node.appendChild(ul);
for(let ob of data){

    const div=document.createElement('div');
    const span=document.createElement('span');
 
    
    ul.appendChild(div);
    div.className="List-book";
    div.appendChild(span);
    span.innerHTML=ob.book;
}
   

})