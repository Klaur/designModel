class Subject {
  constructor(){
    this.state = 0
    this.observers = []
  }
  getState(){
    return this.state
  }
  setState(state){ 
    this.state =state
    this.notifyAllObservers()
  }
  notifyAllObservers(){
    this.observers.forEach(observer=>{
      observer.update()
    })
  }
  attach(observer){
    this.observers.push(observer)
  }
}
class Observer {
  constructor(name,subject){
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }
  update(){
    console.log(`${this.name} update, state: ${this.subject.getState()}`)
  }
}

let s = new Subject()
let o1 = new Observer('观察者1',s)
let o2 = new Observer('观察者2',s)
let o3 = new Observer('观察者3',s)
let o4 = new Observer('观察者4',s)
s.setState('666')