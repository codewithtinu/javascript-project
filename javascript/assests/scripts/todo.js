// variables
let input = document.querySelector('#myTodo'),
    button = document.querySelector('#addTask');
    taskList = document.querySelector('#todo-list');

// functions
const addTask = () => {
    let value = input.value;
    console.log('value = ', value);
    getTask(value);
    input.value = '';
}

const getTask = (inputValue) => {
    console.log('inputValue: ', inputValue);
    // create parent div
    let parent = document.createElement('div');
        parent.classList.add('items');
    // create child [title, action]
    let title = document.createElement('div');
        title.setAttribute("id", "title");
        // title.textContent = inputValue;
    // create input for view & edit
    let taskInput = document.createElement('input');
        taskInput.classList.add('task-input');
        taskInput.setAttribute('id', 'inputTask');
        taskInput.setAttribute('type', 'text');
        taskInput.setAttribute('name', 'inputTask');
        taskInput.setAttribute('readonly', true);
        taskInput.value = inputValue;
    title.appendChild(taskInput);
    // create actions
    let actions = document.createElement('div');
        actions.setAttribute('id', 'actions');
        // actions.textContent = 'Edit | Delete | Save';
    // buttons [edit | delete | save]
    let editButton = document.createElement('button');
        editButton.setAttribute('id', `edit`);
        editButton.setAttribute('type', 'button');
        editButton.innerHTML = `<i class='fa-solid fa-pen'></i>`;
    actions.appendChild(editButton);
    
    let saveButton = document.createElement('button');
        saveButton.setAttribute('id', 'save');
        saveButton.setAttribute('type', 'button');
        saveButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
        actions.appendChild(saveButton);
        saveButton.classList.add('hide');

    let deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', 'delete');
        deleteButton.setAttribute('type', 'button');
        deleteButton.innerHTML = `<i class="fa-solid fa-trash">`;
    actions.appendChild(deleteButton);

    
    
    // insert parent, title & actions into the taskList
    parent.appendChild(title);
    parent.appendChild(actions);
    taskList.appendChild(parent);

    console.log('parent: ', parent);

    // edit function
    editButton.addEventListener('click', () => {
        alert('edit button clicked');
        taskInput.removeAttribute('readonly');
        taskInput.classList.add('active-input');
        saveButton.classList.remove('hide');
        editButton.classList.add('hide');

    })
    // save function
    saveButton.addEventListener('click', () => {
        alert('save button clicked');
        taskInput.setAttribute('readonly', true);
        taskInput.classList.remove('active-input');
        saveButton.classList.add('hide');
        editButton.classList.remove('hide');
    })
    // delete function
    deleteButton.addEventListener('click', () => {
        alert('delete button clicked');
        console.log('current task:', parent);
        parent.remove();
    })
}

let userName = document.getElementById('userName');

const saveData = () => {
    let name = input.value;
    userName.textContent = name;
    userName.style.color = 'white';
    // console.log('userName = ', userName);
    const data = localStorage.setItem('neeta', name);
    // console.log('data: ', data);
}
const onLoad = () => {
    let girlName =  localStorage.getItem('neeta');
    userName.textContent = girlName;
    userName.style.color = '#fff';
}

// window.onload(onLoad())

// const getName = localStorage.getItem('users');
// userName.textContent = getName;
userName.style.color = 'white';
const getSettings = () => {
    // const data = localStorage.getItem('employee');
    // console.log('data', data);
}

// Events
button.addEventListener('click', addTask);
// button.addEventListener('click', saveData);



