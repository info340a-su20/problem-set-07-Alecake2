'use strict';

/* your code goes here! */
class Task {
  constructor(description, complete) {
    this.description = description;
    this.complete = complete;
  }

  render() {
    let object = document.createElement('li');
    object.textContent = this.description;
    if (this.complete) {  
      object.classList.add('font-strike');
    }
    object.addEventListener('click', () => {
      this.toggleFinished();
      object.classList.toggle('font-strike');
    })
    return object;
  }

  toggleFinished() {
    this.complete = !this.complete;
  }
}

class TaskList {
  constructor(taskArr) {
    this.tasks = taskArr;
  }

  addTask(description) {
    let task = new Task(description, false);
    this.tasks.push(task);
  }

  render() {
    let object = document.createElement('ol');
    this.tasks.forEach((theTask) => {
      let element = theTask.render();
      object.appendChild(element);
    });
    return object;
  }
}

class NewTaskForm {
  constructor(submit) {
    this.submitCallback = submit;
  }

  render() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    input.classList.add('form-control', 'mb-3');
    input.setAttribute('placeholder', "What else do you have to do?");
    form.appendChild(input);
    
    let button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = "Add task to list";
    form.appendChild(button);

    button.addEventListener('click', (event) => {
      event.preventDefault();
      let inputValue = input.value;
      this.submitCallback(inputValue);
    })
    return form;
  }
}

class App {
  constructor(parent, taskList){
    this.parent = parent;
    this.taskList = taskList; 
  }

  render() {
    let form = new NewTaskForm(
      (a) => {
        this.addTaskToList(a);
      }
    );
    this.parent.appendChild(this.taskList.render());
    this.parent.appendChild(form.render());
  }

  addTaskToList(description){
    this.parent.innerHTML = "";
    this.taskList.addTask(description);
    this.render();
  }
}


let taskList = new TaskList(
  [
    new Task('Make some classes', true),
    new Task('Arrow some functions', false),
  ]
)

let element = document.querySelector('#app');
let app = new App(element, taskList);
app.render();


//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof Task !== 'undefined') 
    module.exports.Task = Task;
  if(typeof TaskList !== 'undefined') 
    module.exports.TaskList = TaskList;
  if(typeof NewTaskForm !== 'undefined') 
    module.exports.NewTaskForm = NewTaskForm;
  if(typeof App !== 'undefined') 
    module.exports.App = App;
}