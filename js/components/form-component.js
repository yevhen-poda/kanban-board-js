import { MIN_TITLE_LENGTH } from '../constans.js'
import AbstractComponent from './abstract-component.js'

export default class FormComponent extends AbstractComponent {
  constructor(taskService, label) {
    super()
    this._taskService = taskService
    this._label = label
  }

  _getTemplate() {
    return (
      `<form class="add-task__form" aria-label="Formular zum Hinzufügen einer Aufgabe">
        <div class="add-task__input-wrapper">
          <label for="add-task">${this._label}</label>
          <input id="add-task" type="text" name="task-name" placeholder="Name der Aufgabe..." required minlength="${MIN_TITLE_LENGTH}">
        </div>
        <button class="add-task__button button" type="submit">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10.0833" y="3.66663" width="1.83333" height="14.6667" fill="white" />
            <rect x="18.3333" y="10.0833" width="1.83333" height="14.6667" transform="rotate(90 18.3333 10.0833)" fill="white" />
          </svg>
          <span>Hinzufügen</span>
        </button>
      </form>`
    )
  }

  _afterCreateElement() {
    this._addEventListeners()
  }

  _addEventListeners() {
    this.getElement().addEventListener('submit', this.formSubmitHandler.bind(this))
  }

  formSubmitHandler(e) {
    e.preventDefault()

    const inputElement = this.getElement().querySelector('#add-task')
    const title = inputElement.value.trim()

    this._taskService.create({title})
    inputElement.value = ''
  }
}