import { HIDE_BLOCK_CLASS, InsertPosition } from './constants.js'

export function createElement(template) {
  const element = document.createElement('div')
  element.innerHTML = template

  return element.firstElementChild
}

export function renderElement(
  container,
  element,
  insertPosition = InsertPosition.BEFORE_END,
  referenceElement = undefined
) {
  switch (insertPosition) {
    case InsertPosition.BEFORE_END:
      container.append(element)
      break
    case InsertPosition.AFTER_BEGIN:
      container.prepend(element)
      break
    case InsertPosition.BEFORE_BEGIN:
      container.insertBefore(element, referenceElement)
      break
  }
}

export function generateId() {
  return Math.random().toString(36).slice(2, 9)
}

export function setElementVisibility(element, visibility) {
  element.classList.toggle(HIDE_BLOCK_CLASS, !visibility)
}
