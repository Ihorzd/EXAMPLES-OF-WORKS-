
//let b =localStorage.setItem('data', JSON.stringify(data));
//let b = localStorage.getItem('data');
//b=JSON.parse(b);
//console.log(b);
const root = document.getElementById('root');



(function bookList(data, node){
  
    const ul = document.createElement('ul');
    node.appendChild(ul);
    for(let ob of data){
        const li = document.createElement('li');
        const span=document.createElement('span');
        const button=document.createElement('button');    
        ul.appendChild(li);
        li.appendChild(span);
        li.appendChild(button);
        button.innerHTML='edit';
        button.className='button-edit';
        span.innerHTML=ob.book;
        span.className='book-edit';
    }
    const div=document.createElement('div');
    const button = document.createElement('button');
    root.appendChild(div);
    div.append(button);
    button.innerHTML = 'Add new book';
    let id= data.length;
    console.log(id);
    button.addEventListener('click',function(){
        let form = document.createElement('form');
        let input = document.createElement('input');
        let span = document.createElement('span');
        ul.appendChild(span);
        span.appendChild(form);
        function creatInput(names){
        span.appendChild(document.createElement('span'));
        span.innerHTML=names;
        form.appendChild(input);
        }
        creatInput('aughtor');
        creatInput('book');
        creatInput('id');
        
        
       
        
        
   
        /*
        let addObjBook ={
            id:enterId,
            aughtor:enterAughtor,
            book:enterBookName
            
        }
        let w =[];
        for(let ob of data){
            w.push(ob);
        }
        w.push(addObjBook);
        data=w;
        console.log(w);*/
       //localStorage.setItem('dat',JSON.stringify(w));
        //localStorage.setItem('newdata', JSON.stringify(addObjBook));
        
    })

    })