
const newTaskForm=document.querySelector('#new_task_form')
const newTaskInput=document.querySelector('#new_task_input')
const taskContainer=document.querySelector('.tasks')

newTaskForm.addEventListener(('submit'),(evt)=>{
    evt.preventDefault()
    const newTaskText=newTaskInput.value.trim()
    if(newTaskText){
        addTask(newTaskText);
        newTaskInput.value=''
    }
})
const addTask=(testText)=>{
    const taskElement=document.createElement('div')
    const textInput=document.createElement('input')
    const actionContainer=document.createElement('div')
    const editBtn=document.createElement('button')
    const deleteBtn=document.createElement('button')
    const doneBtn=document.createElement('button')

    textInput.type='text';
    textInput.value=testText;
    textInput.classList.add('task-text')

    editBtn.innerHTML='<span class="material-symbols-outlined">edit</span>';
    editBtn.classList.add('edit-button')

    deleteBtn.innerHTML='<span class="material-symbols-outlined">delete</span>'
    deleteBtn.classList.add('delete-btn')

    doneBtn.innerHTML=' <span class="material-symbols-outlined"> done</span>'
    doneBtn.classList.add('done-btn')

    actionContainer.classList.add('task-actions')
    actionContainer.appendChild(editBtn)
    actionContainer.appendChild(deleteBtn)
    actionContainer.appendChild(doneBtn)

    taskElement.classList.add('task')
    taskElement.appendChild(textInput)
    taskElement.appendChild(actionContainer)

    taskContainer.appendChild(taskElement)
    
    editBtn.addEventListener('click',()=>{
        textInput.readOnly=false;
        textInput.focus()
    })
    deleteBtn.addEventListener('click',()=>{
        taskContainer.removeChild(taskElement)
    })
    doneBtn.addEventListener('click',()=>{
        taskElement.classList.toggle('done')
        if( taskElement.classList.contains('done')){
            textInput.style.textDecoration='line-through'
        }else{
            textInput.style.textDecoration='none'

        }
    })


}