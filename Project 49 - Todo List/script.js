const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todosUl = document.querySelector('#todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach(todo => {
    addTodo(todo);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement('li');
    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener('click', () => { 
      todoEl.classList.toggle('completed');
      updateLS();
    });

    // Desni klik listener
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      todoEl.remove();
      updateLS();
    });

    todosUl.appendChild(todoEl);

    input.value = '';

    updateLS();
  }
}

function updateLS() {
  let todosEl = document.querySelectorAll('li');

  const todos = [];

  todosEl.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    })
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}