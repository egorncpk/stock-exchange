import moment from 'moment'

moment.locale('ru')

export function trimmingNumbers(el) {
  return el.toString().length < 4 ? el : el.toString().substr(0, el.toString().indexOf('.') + 2)
}

export function formatDate(date, format) {
  return moment(date).format(format)
}

export function getDateTime(format = 'YYYY-MM-DD') {
  return moment().format(format)
}

export function addDateTime(type, value) {
  return moment().add(type, value)
}

export function subtractDateTime(type, value) {
  return moment().subtract(value, type)
}
