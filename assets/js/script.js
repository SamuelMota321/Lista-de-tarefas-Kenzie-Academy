const sendBtn = document.querySelector('.form__button--add-task')
const taskList = document.querySelector('.tasks__list')
const txtInput = document.querySelector('.form__input--text')
const selectInput = document.querySelector('.form__input--priority')

const createElement = (tag, className, callback) => {
  const element = document.createElement(tag)
  element.className = (className)
  return element
}

const checkTaskTipe = (tipe) => {
  let element = ''

  if (tipe == 'normal') {
    return element = createElement('span', 'task-type span-normal')
  }

  if (tipe == 'importante') {
    return element = createElement('span', 'task-type span-important')
  }

  if (tipe == 'urgente') {
    return element = createElement('span', 'task-type span-urgent')
  }

}

const createTask = (name, tipe) => {

  const taskItem = createElement('li', 'task__item')
  const taskInfo = createElement('div', 'task-info__container')
  const taskTipe = checkTaskTipe(tipe)
  const taskName = document.createElement('p')
  taskName.innerHTML = name

  const removeTaskBtn = createElement('button', 'task__button--remove-task', )

  removeTaskBtn.addEventListener('click', (e)=> {
    e.preventDefault
    taskItem.remove()
  } )

  taskItem.appendChild(taskInfo)
  taskItem.appendChild(removeTaskBtn)
  taskInfo.appendChild(taskTipe)
  taskInfo.appendChild(taskName)


  return taskItem

}

sendBtn.addEventListener('click', (e) => {
  e.preventDefault()

  const name = txtInput.value
  const tipe = selectInput.value
  createTask(name, tipe)

  taskList.appendChild(createTask(name, tipe))
})
