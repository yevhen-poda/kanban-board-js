import TaskService from './services/task-service.js'
import HeaderComponent from './components/header-component.js'
import { tasks } from './data.js'
import { renderElement } from './utils.js'
import { InsertPosition } from './constants.js'
import AddTaskComponent from './components/add-task-component.js'
import BoardComponent from './components/board-component.js'

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

    const boardAppInnerElement = document.querySelector('main > div.board-app__inner')

    const addTaskComponent = new AddTaskComponent(this._taskService)
    const addTaskElement = addTaskComponent.getElement()
    
    renderElement(boardAppInnerElement, addTaskElement, InsertPosition.AFTER_BEGIN)

    const boardComponent = new BoardComponent(this._taskService);
    const boardElement = boardComponent.getElement();

    renderElement(boardAppInnerElement, boardElement, InsertPosition.BEFORE_END)
  }
}
