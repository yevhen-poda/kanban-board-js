export default class TaskService {
  constructor(tasks) {
    this._tasks = tasks
  }

  create(task) {

  }

  getByStatus(status) {
    return this._tasks.filter(task => task.status === status)
  }
}