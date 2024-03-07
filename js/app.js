import TaskService from './services/task-service.js'
import HeaderComponent from './components/header-component.js'
import { tasks } from './data.js'
import { renderElement } from './utils.js'
import { InsertPosition } from './constans.js'
import AddTaskComponent from './components/add-task-component.js'

export default class App {
  constructor() {
    this._taskService = new TaskService(tasks)
  }

  init(name) {
    const headerComponent = new HeaderComponent(name)
    const headerElement = headerComponent.getElement()
    console.log(headerComponent)
    console.log(headerElement)
    const bodyElement = document.querySelector('body.board-app')

    renderElement(bodyElement, headerElement, InsertPosition.AFTER_BEGIN)

    const addTaskComponent = new AddTaskComponent(this._taskService)
    const addTaskElement = addTaskComponent.getElement()
    console.log(addTaskElement)

    // const boardAppInnerElement = document.querySelector('main > div.board-app__inner')
    
  }
}
