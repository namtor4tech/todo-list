


document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');


     //   creating an array
     let arraytodo =[]
     //  add it to check
     console.log(arraytodo)

  todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const NewTodo = todoInput.value.trim();


      if (NewTodo !== '') {
          const listItem=document.createElement('li');
          listItem.textContent=NewTodo;

            // storing the listitems in the array 
            arraytodo.push(NewTodo)
             //  add it to check
            console.log(arraytodo)

          // add a delete button
          const deleteButton=document.createElement('button');
          deleteButton.textContent='Delete';
          listItem.appendChild(deleteButton);
          todoList.appendChild(listItem);
   
          
          // claering the input
          todoInput.value='';


          // handle delete Button
          deleteButton.addEventListener('click',()=>{
              todoList.removeChild(listItem);

             //  removing array on click button
             arraytodo=arraytodo.filter((arraytodo)=>arraytodo !== NewTodo )
               //  add it to check
            console.log(arraytodo);
            

          })
      }
  })
})