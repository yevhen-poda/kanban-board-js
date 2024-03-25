export const InsertPosition = {
  BEFORE_BEGIN: 'beforebegin',
  AFTER_BEGIN: 'afterbegin',
  BEFORE_END: 'beforeend',
  AFTER_END: 'afterend',
}

export const Text = {
  NEW_TASK: 'Neue Aufgabe',
  EMPTY_TASK: 'Ziehen Sie die Karte',
  EMPTY_BASKET: 'Papierkorb ist leer',
}

export const MIN_TITLE_LENGTH = 2

export const Status = {
  BACKLOG: 'backlog',
  PROCESSING: 'processing',
  DONE: 'done',
  BASKET: 'basket',
}

export const StatusLabel = {
  [Status.BACKLOG]: 'Backlog',
  [Status.PROCESSING]: 'In Arbeit',
  [Status.DONE]: 'Fertig',
  [Status.BASKET]: 'Papierkorb',
}

export const StateActions = {
  TASK_CREATE: 'task-create',
  TASK_UPDATE_TITLE: 'task-update-title',
  TASK_UPDATE_POSITION: 'task-update-position',
  TASK_DELETE: 'task-delete',
  ELEMENT_DRAGOVER: 'elementDragover',
  ELEMENT_EDITED: 'elementEdited',
  BASKET_CLEANUP: 'basket-cleanup',
}

export const Key = {
  ENTER: 13,
  ESCAPE: 27,
}

export const HIDE_BLOCK_CLASS = 'hidden-block'
