/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/* eslint-disable no-use-before-define */\r\n// import css stylesheet\r\n/* import './style.css';\r\n// import icon images\r\nimport reload from './assets/reload.png';\r\nimport move from './assets/vertical-dots.png';\r\nimport add from './assets/plus.png';\r\n\r\n// import status updates methods\r\n// eslint-disable-next-line no-unused-vars\r\nimport { updateTaskStatus, clearCompletedTasks } from './modules/statusUpdate.js';\r\n\r\n// icons\r\nconst reloadIcon = new Image();\r\nreloadIcon.src = reload;\r\n\r\nconst moveIcon = new Image();\r\nmoveIcon.src = move;\r\n\r\nconst addIcon = new Image();\r\naddIcon.src = add; */\r\n\r\n// Create the to-do list HTML structure\r\nconst todoContainer = document.getElementById('todo-list');\r\nconst todoContent = document.createElement('div');\r\ntodoContent.classList.add('task-content');\r\nconst todoTitle = document.createElement('h2');\r\ntodoTitle.classList.add('task-title');\r\ntodoTitle.textContent = \"Today's To Do\";\r\nconst todoInput = document.createElement('div');\r\ntodoInput.classList.add('task-input');\r\ntodoInput.innerHTML = '<input type=\"text\" id=\"input-to-do\" placeholder=\"Add to your list...\" />';\r\nconst addButton = document.createElement('button');\r\naddButton.classList.add('add-button');\r\naddButton.innerHTML = '';\r\nconst clearAll = document.createElement('p');\r\nclearAll.classList.add('clear-all');\r\nclearAll.textContent = 'Clear All Completed';\r\naddButton.appendChild(addIcon);\r\ntodoInput.appendChild(addButton);\r\ntodoTitle.appendChild(reloadIcon);\r\ntodoContent.appendChild(todoTitle);\r\ntodoContent.appendChild(todoInput);\r\ntodoContent.innerHTML += '<ul id=\"list-container\"></ul>';\r\ntodoContent.appendChild(clearAll);\r\ntodoContainer.appendChild(todoContent);\r\n\r\n/* document.addEventListener('DOMContentLoaded', () => {\r\n  // save and get data to local storage\r\n  const saveData = () => {\r\n    localStorage.setItem('data', JSON.stringify(tasks));\r\n  };\r\n\r\n  const getData = () => {\r\n    const data = localStorage.getItem('data');\r\n    if (data) {\r\n      tasks = JSON.parse(data);\r\n      renderTasks();\r\n    }\r\n  };\r\n\r\n  // To-do list data\r\n  let tasks = [];\r\n\r\n  // Create the to-do list functionality\r\n  const todoContent = document.querySelector('.task-content');\r\n  const inputBox = document.getElementById('input-to-do');\r\n  const inputListContainer = document.getElementById('list-container');\r\n  const addButton = document.querySelector('.add-button');\r\n  const errorMessage = document.createElement('p');\r\n  errorMessage.classList.add('error-message');\r\n  errorMessage.style.display = 'none';\r\n  todoContent.appendChild(errorMessage);\r\n\r\n  // Function to render tasks on the list\r\n  const renderTasks = () => {\r\n    inputListContainer.innerHTML = '';\r\n    tasks.forEach((task, index) => {\r\n      const li = document.createElement('li');\r\n      li.textContent = task.description;\r\n      if (task.completed) {\r\n        li.classList.add('checked');\r\n      }\r\n      const deleteButton = document.createElement('span');\r\n      deleteButton.innerHTML = '\\u2716';\r\n      deleteButton.addEventListener('click', () => {\r\n        deleteTask(index);\r\n      });\r\n      li.appendChild(deleteButton);\r\n      const checkbox = document.createElement('input');\r\n      checkbox.type = 'checkbox';\r\n      checkbox.checked = task.completed;\r\n      checkbox.addEventListener('change', (e) => {\r\n        updateTaskStatus(index, e.target.checked);\r\n      });\r\n      inputListContainer.appendChild(li);\r\n    });\r\n    saveData();\r\n  };\r\n\r\n  // Function to add a new task\r\n  const addTask = () => {\r\n    if (inputBox.value === '') {\r\n      errorMessage.textContent = 'Please enter a task!';\r\n      errorMessage.style.display = 'block';\r\n    } else {\r\n      const newTask = {\r\n        description: inputBox.value,\r\n        completed: false,\r\n        index: tasks.length + 1,\r\n      };\r\n      tasks.push(newTask);\r\n      inputBox.value = '';\r\n      errorMessage.style.display = 'none';\r\n      renderTasks();\r\n    }\r\n  };\r\n\r\n  // Function to delete a task\r\n  const deleteTask = (index) => {\r\n    tasks.splice(index, 1);\r\n    tasks.forEach((task, i) => {\r\n      task.index = i + 1;\r\n    });\r\n    renderTasks();\r\n  };\r\n\r\n  // Function to edit a task description\r\n  // eslint-disable-next-line no-unused-vars\r\n  const editTaskDescription = (index, newDescription) => {\r\n    tasks[index].description = newDescription;\r\n    renderTasks();\r\n  };\r\n\r\n  addButton.addEventListener('click', addTask);\r\n  inputBox.addEventListener('keydown', (event) => {\r\n    if (event.key === 'Enter') {\r\n      addTask();\r\n    }\r\n  });\r\n\r\n  inputListContainer.addEventListener('click', (e) => {\r\n    if (e.target.tagName === 'LI') {\r\n      const index = Array.from(inputListContainer.children).indexOf(e.target);\r\n      tasks[index].completed = !tasks[index].completed;\r\n      renderTasks();\r\n    }\r\n  });\r\n\r\n  const clearAllTasks = () => {\r\n    tasks = tasks.filter((task) => !task.completed);\r\n    renderTasks();\r\n  };\r\n\r\n  clearAll.addEventListener('click', clearAllTasks);\r\n\r\n  getData();\r\n}); */\r\n\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;