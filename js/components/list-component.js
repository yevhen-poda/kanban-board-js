import { InsertPosition, StatusLabel } from '../constants.js'
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
    this._renderTasks()
  }

  _renderTasks() {
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
}
