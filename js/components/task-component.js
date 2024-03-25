import { Key, StateActions } from '../constants.js'
import { setElementVisibility } from '../utils.js'
import AbstractComponent from './abstract-component.js'

export default class TaskComponent extends AbstractComponent {
  constructor(taskService, task) {
    super()
    this._taskService = taskService
    this._task = task
  }

  _getTemplate() {
    return `<div class="taskboard__item task task--${this._task.status}" data-id="${this._task.id}">
        <div class="task__body">
          <p class="task--view">${this._task.title}</p>
          <input class="task--input" type="text" />
        </div>
        <button class="task__edit" type="button" aria-label="Ändern"></button>
      </div>`
  }

  _afterCreateElement() {
    this._makeTaskEditable()

    window.addEventListener(StateActions.ELEMENT_EDITED, (e) => {
      const isDisplayBlock = (e.detail.id === undefined) || (e.detail.id === this._task.id)
      setElementVisibility(this.getElement().querySelector('.task__edit'), isDisplayBlock)
    })
  }

  _makeTaskEditable() {
    const taskEditElement = this.getElement().querySelector('.task__edit')
    const taskTitleElement = this.getElement().querySelector('.task--view')
    const taskInputElement = this.getElement().querySelector('.task--input')

    taskEditElement.addEventListener('click', () => {
      if (this.getElement().classList.contains('task--active')) {
        this._setTaskViewMode(true)
        this._saveTask(taskInputElement.value)
      } else {
        this._setTaskViewMode(false)
        taskInputElement.value = this._task.title
      }
    })

    this.getElement().addEventListener('keydown', (e) => {
      if (e.keyCode === Key.ENTER && e.shiftKey === false && e.ctrlKey === false && e.altKey === false) {
        this._setTaskViewMode()
        this._saveTask(taskInputElement.value)
      } else if (e.keyCode === Key.ESCAPE) {
        this._setTaskViewMode()
        taskTitleElement.innerText = this._task.title
      }
    })
  }

  _setTaskViewMode(viewMode = true) {
    const taskInputElement = this.getElement().querySelector('.task--input')

    if (viewMode) {
      this.getElement().classList.remove('task--active')
      this._taskService.startTaskEditing()
      taskInputElement.blur()
    } else {
      this.getElement().classList.add('task--active')
      this._taskService.startTaskEditing(this._task)
      taskInputElement.focus()
    }
  }

  _saveTask(newTitle) {
    if (this._task.title !== newTitle) {
      this._task.title = newTitle
      this._taskService.updateTitle(this._task)
    }
  }
}
