import AbstractComponent from './abstract-component.js'

export default class TaskboardComponent extends AbstractComponent {
  constructor(taskService) {
    super()
    this._taskService = taskService
  }

  _getTemplate() {
    return (
      `<section class="taskboard">
        <h2 class="visually-hidden">Deine Aufgaben:</h2>
      </section>`
    )
  }

  _afterCreateElement() {

  }
}