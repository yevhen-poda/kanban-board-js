import { InsertPosition } from './constants.js'

export function createElement(template) {
  const element = document.createElement('div')
  element.innerHTML = template

  return element.firstElementChild
}

export function renderElement(
  container,
  element,
  insertPosition = InsertPosition.BEFORE_END
) {
  switch (insertPosition) {
    case InsertPosition.BEFORE_END:
      container.append(element)
      break
    case InsertPosition.AFTER_BEGIN:
      container.prepend(element)
      break
    case InsertPosition.BEFORE_BEGIN:
      container.insertBefore(element)
      break
  }
}
