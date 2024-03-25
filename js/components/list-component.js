import { InsertPosition, StateActions, StatusLabel } from '../constants.js'
import AbstractComponent from './abstract-component.js'
import TaskComponent from './task-component.js'
import { renderElement } from '../utils.js'

export default class ListComponent extends AbstractComponent {
  constructor(taskService, status) {
    super()
    this._taskService = taskService
    this._status = status
    this._title = StatusLabel[status]
    this._tasks = this._taskService.getByStatus(status)
  }

  _getTemplate() {
    return (
      `<article class="taskboard__group taskboard__group--${this._status}">
        <h3 class="taskboard__group-heading taskboard__group-heading--${this._status}">${this._title}</h3>
        <div class="taskboard__list" id="${this._status}"></div>
      </article>`
    )
  }

  _afterCreateElement() {
    this._addEventListeners()
    this._renderTasks()
  }

  _addEventListeners() {
    window.addEventListener(StateActions.TASK_CREATE, this._changeDataHandler.bind(this))
    window.addEventListener(StateActions.TASK_UPDATE_TITLE, this._changeDataHandler.bind(this))
    window.addEventListener(StateActions.TASK_UPDATE_POSITION, this._changeDataHandler.bind(this))
    window.addEventListener(StateActions.TASK_DELETE, this._changeDataHandler.bind(this))
    window.addEventListener(StateActions.BASKET_CLEANUP, this._changeDataHandler.bind(this))
  }

  _renderTasks() {
    this._removeTasks()

    this._tasks.forEach(task => {
      const taskItemComponent = new TaskComponent(this._taskService, task)
      const taskItemElement = taskItemComponent.getElement()

      renderElement(
        this.getElement().lastChild.previousElementSibling,
        taskItemElement,
        InsertPosition.BEFORE_END
      )
    })
  }

  _changeDataHandler() {
    this._tasks = this._taskService.getByStatus(this._status)
    this._renderTasks()
  }

  _removeTasks() {
    this.getElement().querySelector('.taskboard__list').innerHTML = ''
  }
}
