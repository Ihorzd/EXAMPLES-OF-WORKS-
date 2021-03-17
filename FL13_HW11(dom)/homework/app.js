var data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];



// TODO: your code goes here
let rootElement= document.getElementById('root');

(function filetree(data,element){
  const NewElemen =document.createElement('ul');
for(let el of data){
  const list=document.createElement('li');

  const block=document.createElement('div');
  const span=document.createElement('span');
  const image=document.createElement('i');
  image.classList.add('material-icons');

  block.appendChild(image);
  block.appendChild(span);
  span.innerHTML=el.title;

  list.appendChild(block);
  NewElemen.appendChild(list);
  if(el.folder){
    
    block.classList.toggle('folder');
    image.innerText='folder';


    block.addEventListener('click',function(){
      image.innerText==='folder' ? image.innerText='folder_open': image.innerText='folder';
      list.querySelector('.closed').classList.toggle('open');
    });

    if(el.children){
      filetree(el.children,list);
    }else{
      let empty_folder =document.createElement('div');
      empty_folder.classList.add('empty_folder','closed');
      empty_folder.innerText='Folder is empty';
      list.appendChild(empty_folder);
    }
  }else{
    block.classList.toggle('file');
    image.innerText='insert_drive_file';

    image.classList.add('file_image');
  }
}
element.appendChild(NewElemen);
  if(NewElemen.parentNode!==rootElement){
    NewElemen.classList.toggle('closed');
  }
})(data,rootElement);
/*
let rootElement = document.getElementById('root');

(function filetree(data,element){

  const newELEMENT = document.createElement('ul');
  
  
  for(let el of data){
    const Child= document.createElement('li');

    const block=document.createElement('div');
    const span = document.createElement('span');
    const image =document.createElement('i');
    image.classList.add('material-icons');

    block.appendChild(image);
    block.appendChild(span);
    span.innerHTML=el.title;

    Child.appendChild(block);
    newELEMENT.appendChild(Child);
    

    if(el.folder){
      block.classList.toggle('folder');
      image.innerText='folder';

      block.addEventListener('click', function(){
        image.innerText==='folder' ? image.innerText='folder_open' : image.innerText='folder';
        Child.querySelector('.closed').classList.toggle('open');
   
      });
      if(el.children){
        filetree(el.children,Child);
      }else{
        let empty_folder = document.createElement('div');
        empty_folder.classList.add('empty_folder','closed');
        empty_folder.innerText='Folder is empty';
        Child.appendChild(empty_folder);
      }
      
    }else{
      block.classList.toggle('file');
      image.innerText='insert_drive_file';
      image.classList.add('file_image');
    }
  }
  
  element.appendChild(newELEMENT);
  if(newELEMENT.parentNode!==rootElement){
    newELEMENT.classList.toggle('closed');
  }

})(data,rootElement);*/

