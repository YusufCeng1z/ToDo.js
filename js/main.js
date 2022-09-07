
let ToDoInputDOM = document.querySelector("#ToDoInput");
let ToDoSubmit = document.querySelector("#ToDoSubmit");
ToDoSubmit.addEventListener('click',ToDoAdd);

let list = [];

let ToDoListDOM = document.querySelector("#ToDoList");
let toastDOM = document.querySelector(".toast");
let toastBodyDOM = document.querySelector(".toast-body")





listele();

function ToDoAdd() {    
   let veri = ToDoInputDOM.value;
   let VeriNot = veri.trim();
   if(VeriNot) {

    list.push({
        text:veri,
        isActive:true
    });
    toastDOM.classList.add("show");
    toastBodyDOM.innerHTML = "Successfully added :)";
    listele();
    

   }
   else {
    toastDOM.classList.add("show");
    toastBodyDOM.innerHTML = "Empty cannot be added to the list!";
   }
}






function listele() {
    if(list){
        ToDoListDOM.innerHTML ="";
        for(let i = 0; i <list.length;i++){
            let ToDoListLi = document.createElement("li");
            ToDoListLi.innerHTML = `${list[i].isActive == false ? '<i class="bi bi-check2-all"></i>' : ""}<p class="text">${list[i].text}</p><button class="delete ${i}" ><i class="bi bi-x"></i></button>`;
            ToDoListLi.classList.add("li");
            ToDoListLi.classList.add(i);
            if(list[i].isActive == false) {
                ToDoListLi.classList.add("done");
            }
            ToDoListDOM.append(ToDoListLi);
        }
    }
    TiklandiginiYakala();
}




TiklandiginiYakala();

function TiklandiginiYakala() {
    let toDoliDOM =  document.getElementsByClassName("li");
    for(let i = 0; i <toDoliDOM.length;i++){
        toDoliDOM[i].addEventListener('click',ToDoDone);
     }
        
     let deleteDOM =  document.getElementsByClassName("delete");
     for(let i = 0; i <deleteDOM.length;i++){
         deleteDOM[i].addEventListener('click',ToDoDelete);
      }
}


function ToDoDone() {
    
    if(this.classList.value == `li ${this.classList[1]}`) {
        this.innerHTML = '<i class="bi bi-check2-all"></i>' + this.innerHTML;
        this.classList.add("done");

        
       list[this.classList[1]].isActive = false;
        
    }
    else {
        let texts = this.innerHTML;
        texts =  texts.replace('<i class="bi bi-check2-all"></i>','')
        this.innerHTML = texts;
        this.classList.remove("done");
        
        list[this.classList[1]].isActive = true;
       
        
    }
    TiklandiginiYakala();
}
  




function ToDoDelete() {
    deleteclass = this.classList;
    console.log(deleteclass[1]);
    list.splice(deleteclass[1],1);
    listele();
    toastDOM.classList.add("show");
    toastBodyDOM.innerHTML = "Somehow Removed";
}


