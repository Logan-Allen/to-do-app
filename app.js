let id = 0;
function onReady(){
  const toDos = [];
  const addToDoForm = document.getElementByID('addToDoForm');
  function createNewToDo(){
    const newToDoText = document.getElementByID('newToDoText');
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
    });
    newToDoText.value = '';
    renderTheUI();
  }
  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const deleteButton = document.createElement('button');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
      
    deleteButton.addEventListener('onclick' , event =>{
      toDos.filter(toDos => toDos.id != id);
  });
    renderTheUI();
      
    });
  }
  addToDoForm.addEventListener('submit' , event => {
    event.preventDefault();
    createNewToDo();
  });
  
  renderTheUI();
}
window.onload = function() {
    onReady();
};