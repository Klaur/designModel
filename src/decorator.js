import { readonly, deprecate } from 'core-decorators'

class MyClass {
  @log
  add (a, b) {
    return a + b
  }
  @readonly
  remove(a,b){
    return a-b
  }
  @deprecate
  say(){
    console.log('halo')
  }
}

function log (target, name, descriptor) {
  let oldValue = descriptor.value
  descriptor.value = function () {
    console.log(`Calling ${name} with`, arguments)
    return oldValue.apply(this, arguments)
  }
  return descriptor
}
let demo = new MyClass()
demo.add(1, 2)
demo.say()