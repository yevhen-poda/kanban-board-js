import { StateActions, Status } from '../constants.js'
import { generateId } from '../utils.js'

export default class TaskService {
  constructor(tasks) {
    this._tasks = tasks
  }

  create(task) {
    task.id = generateId()
    task.status = Status.BACKLOG
    this._tasks.push(task)

    this._emitEvent(StateActions.TASK_CREATE, task);
  }

  getByStatus(status) {
    return this._tasks.filter(task => task.status === status)
  }

  startTaskEditing(task = {}) {
    this._emitEvent(StateActions.ELEMENT_EDITED, task)
  }

  updateTitle(task) {
    const taskIndex = this._getTaskIndexByID(task.id)

    if (taskIndex !== -1) {
      this._tasks.splice(taskIndex, 1, task)
      this._emitEvent(StateActions.TASK_UPDATE_TITLE, task)
    }
  }

  _emitEvent(type, detail) {
    window.dispatchEvent(new CustomEvent(type, {detail}))
  }

  _getTaskIndexByID(id) {
    return this._tasks.findIndex(el => el.id === id)
  }
}
