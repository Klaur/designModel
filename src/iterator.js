class Iterator {
  constructor(container) {
    this.list = container.list
    this.index = 0
  }
  next() {
    return this.hasNext() ? this.list[this.index++] : null
  }
  hasNext() {
    return this.index < this.list.length
  }
}

class Container {
  constructor(list) {
    this.list = list
  }
  getIterator() {
    return new Iterator(this)
  }
}
let container = new Container([1, 2, 3, 4])
let iterator = container.getIterator()
while (iterator.hasNext()) {
  console.log(iterator.next())
}

function each(data) {
  let iterator = data[Symbol.iterator]()
  let item = { done: false }
  while (!item.done) {
    item = iterator.next()
    if (!item.done) {
      console.log(item.value)
    }
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7]
let nodeList = document.getElementsByTagName('p')
let m = new Map()
m.set('a', 100)
m.set('b', 200)
each(arr)
each(nodeList)
each(m)
