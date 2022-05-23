
function Book(name, author,type){
    this.name=name;
    this.author=author;
    this.type=type;
}
function Display(){

}
Display.prototype.add=function(book){
    let showTable=document.getElementById('myTable'); 
    let html=`
    <tr class="myRow">
    <td id="rowBook">${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    </tr>`;
    showTable.innerHTML= showTable.innerHTML+html; 
}

Display.prototype.clear=function(){
    let myForm=document.getElementById('formSubmit'); 
    myForm.reset();
}

Display.prototype.validate=function(book){
    if(book.name.length<2||book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}
Display.prototype.show=function(type,bold,mymsg){
    let msg=document.getElementById('message');
    msg.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>${bold}!</strong> ${mymsg}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
 setTimeout(() => {
      msg.innerHTML='';
 }, 4000);
}

let myForm=document.getElementById('formSubmit');
myForm.addEventListener('submit',runForm);

function runForm(e){
    e.preventDefault();
    let name=document.getElementById('name').value;
    let author=document.getElementById('author').value;
    let type;
    let fiction=document.getElementById('fiction');
    let programming=document.getElementById('programming');
    let cooking=document.getElementById('cooking');
    if(fiction.checked){
        type=fiction.value;
    }
    else if(programming.checked){
        type=programming.value;
    }
    else if(cooking.checked){
        type=cooking.value;
    }
    let book=new Book(name,author,type);
    let display=new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();  
        display.show('success','Success','Your book has been successfully added.'); 
    }
    else{
        display.clear();
        display.show('danger','Error','Sorry you cannot add this book.');

    }
}

let search =document.getElementById('searchTxt');
search.addEventListener('input',searchFun);
function searchFun(){
    let myInput=search.value.toLowerCase();
    let countRow=document.getElementsByClassName('myRow');
    Array.from(countRow).forEach(function(element){
        let searchName=element.getElementsByTagName('td')[2].innerHTML;
        if(searchName.toLowerCase().includes(myInput)){
            element.style.display='table-row';
        }
        else{
            element.style.display='none';
        }
    });
}
