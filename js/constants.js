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
