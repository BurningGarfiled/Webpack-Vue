<template>
  <div class="sys-page">
    <el-button @click="setVuex">重置</el-button>
    <el-button @click="addVuex">+1</el-button>
    <el-button @click="cutVuex">-1</el-button>
    <div>
      {{ num }}
      {{ text }}
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
// import { resolve } from 'dns'
export default {
  name: 'Vuex',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      text: state => state.demo.num
    }),
    num() {
      return this.$store.state.demo.num
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      /*
      // 变量提升
      var temp = new Date() // temp1
      function f() {
        console.log(temp) // con1
        if (false) {
          var temp = '重新定义变量' // temp2
          console.log(temp)
        }
      }
      f() // undefined temp2处变量提升覆盖了temp1变量，导致con1处输出时temp未定义，因为temp2是在con1后面
      */

      /*
      // 立即执行函数--可以隔离出来一个单独的作用域，里面的变量和方法不会污染全局变量，相当于let
      +function fn(test) {
        console.log(test) // 123，单独作用域
      }(123) // 立即执行函数
      const test = '你好'
      console.log(test) // '你好' 全局变量
      */

      /*
      // 解构赋值
      //  let [a, b, c, d] = [1, 2, 3, 4, 5]
      //  console.log(a, b, c, d)
      //  let {name, sex} = {name: '王京', sex: '26'}
      //  console.log(name, sex)
      //  let x
      //  ({x} = {x: '王京'})
      //  console.log(x)
      // let {toString: s} = 123
      // console.log(s)
      // function move({x = 0, y = 0} = {}) {
      //   console.log([x, y])
      //   return [x, y]
      // }
      // move({x:3, y:8})
      // move([3,8])
      // let map = new Map()
      // map.set('name', '王京')
      // map.set('sex', '26')
      // for (let [key, value] of map) {
      //   console.log(key, value)
      // }
      */

      /*
      // Integer(12345)
      //  console.log(typeof (Integer(2)))
      // const this_ = this
      // function text() {
      //   this_.$message.info('没有参数')
      // }
      // function test(p = text()) {
      //   return p
      // }
      // test()
      // function fac(n) {
      //   if (n === 1)  return 1
      //   return n * fac(n - 1)
      // }
      // function fac(n, total = 1) {
      //   if (n === 1) return total
      //   return fac (n - 1, n * total)
      // }
      // console.log(fac(5))
      */
      /*
      //  let a = {
      //    name: '王京',
      //    detail: {
      //      height: '175'
      //    }
      //  }
      //  let b = {
      //    sex: '男'
      //  }
      //  let c = Object.assign({}, a, b) // 如果源对象的某个属性(detail)是对象，拷贝的是对象的引用(目标对象的值(detail.height)会跟着变化)
      //  a.age = '26'
      //  a.detail.height = '190'
      //  console.log(a)
      //  console.log(c)
      */
      // let map = new Map()
      // map.set('name', '王京')
      // map.set('sex', '26')
      // console.log(map)
      // for (let [key, value] of map) {
      //   console.log(key, value)
      // }
      // let obj = {
      //   one: undefined,
      //   two: null,
      //   three: true,
      //   four: 'string',
      //   five: 1,
      //   six: {
      //     name: 6
      //   },
      //   seven: Symbol()
      // }
      // for (let key in obj) {
      //   console.log(typeof (obj[key]))
      // }
      // const obj = {
      //   toString() {
      //     return 'abc'
      //   }
      // }
      // const sym = Symbol(obj)
      // console.log(sym)
      // let sym = Symbol('我是王京')
      // console.log(sym)
      // console.log(sym.toString())
      // console.log(Boolean(sym))
      // let my_name = Symbol()
      // let obj = {
      //   my_name: '王京',
      //   [my_name]: '王京唯一'
      // }
      // console.log(obj[my_name])
      // let obj = {
      //   job: 'Web'
      // }
      // let name = Symbol('name')
      // let sex = Symbol('sex')
      // obj[name] = '王京'
      // obj[sex] = '男'
      // let age = Symbol('age')
      // Object.defineProperty(obj, age, {
      //   value: '26'
      // })
      // let objectsymbols = Object.getOwnPropertySymbols(obj)
      // console.log(objectsymbols)
      // console.log(Reflect.ownKeys(obj))
      // let a = Symbol('name')
      // let b = Symbol('name')
      // console.log(a === b) // false
      // let c = Symbol.for('name')
      // let d = Symbol.for('name')
      // console.log(c === d) // true
      // let name = Symbol('name')
      // let sex = Symbol.for('sex')
      // console.log(Symbol.keyFor(name), Symbol.keyFor(sex)) // undefined 'sex'
      // function dedupe(array) {
      //   return Array.from(new Set(array))
      // }
      // const items = new Set([1, 2, 3, 4, 5, 4, 3, 4])
      // console.log(dedupe(items))
      // let set = new Set(['green', 'red', 'yellow'])
      // for (let item of set.entries()) {
      //   console.log(item)
      // }
      // set.forEach((index) => console.log(index))
      // let items = [1, 2, 3, 4, 5, 4, 3, 4]
      // let unique = [...new Set(items)]
      // // let set = new Set(unique.map(x => x * 2))
      // let set = new Set(unique.filter(x => (x % 2) === 0))
      // console.log(set)
      // let arr1 = [1, 2, 3, 4]
      // let arr2 = [3, 4, 5, 6]
      // let unique = new Set([...arr1, ...arr2])
      // let unique = new Set(arr1.filter(x => new Set(arr2).has(x)))
      // console.log(unique)
      // let a = [1, 2, 3]
      // let b = Array.from(a) // 返回一个新数组，可以用来数组深拷贝
      // a.push(4)
      // console.log(a)
      // console.log(b)
      // const arr = [
      //   [
      //     'name',
      //     '王京'
      //   ],
      //   [
      //     'age',
      //     '26'
      //   ]
      // ]
      // const map = new Map(arr)
      // console.log(map)
      // console.log(map.has('name'), map.get('name'))
      // let a = {} // 继承Object原型上的任何东西
      // let b = Object.create(null) // 没有任何东西，可以自己定义方法属性
      // console.log(a)
      // console.log(b)
      // let obj = new Proxy({}, {
      //   get: function (target, key, receiver) {
      //     console.log('get')
      //     console.log(target)
      //     console.log(key)
      //     console.log(receiver)
      //     return Reflect.get(target, key, receiver)
      //   },
      //   set: function (target, key, value, receiver) {
      //     console.log('set')
      //     console.log(target)
      //     console.log(key)
      //     console.log(value)
      //     console.log(receiver)
      //     return Reflect.set(target, key, value, receiver)
      //   }
      // })
      // obj.count = 1
      // ++obj.count
      // let handler = {
      //   get: function (target, name) {
      //     console.log('get')
      //     console.log(target)
      //     console.log(name)
      //     if (name === 'prototype') {
      //       return Object.prototype
      //     }
      //     return 'Hello, ' + name
      //   },
      //   apply: function (target, thisBinding, args) {
      //     console.log('apply')
      //     console.log(target)
      //     console.log(thisBinding)
      //     console.log(args)
      //     return args[0]
      //   },
      //   construct: function (target, args) {
      //     console.log('construct')
      //     console.log(target)
      //     console.log(args)
      //     return { value: args[1] }
      //   }
      // }
      // let fproxy = new Proxy(function (x, y) {
      //   return x + y
      // }, handler)
      // console.log(fproxy(1, 2))
      // console.log(new fproxy(1, 2))
      // console.log(fproxy.prototype === Object.prototype)
      // console.log(fproxy.foo)
      // let person = {
      //   name: '张三'
      // }
      // let proxy = new Proxy(person, {
      //   get: function(target, property) {
      //     console.log(target)
      //     console.log(property)
      //     if (property in target) {
      //       return target[property]
      //     } else {
      //       throw new ReferenceError('错误')
      //     }
      //   }
      // })
      // // console.log(proxy.name)
      // let obj = Object.create(proxy)
      // console.log(obj.name)
      // function createArray(...elements) {
      //   let handler = {
      //     get(target, propKey, receiver) {
      //       let index = Number(propKey)
      //       if (index < 0) {
      //         propKey = String(target.length + index)
      //       }
      //       return Reflect.get(target, propKey, receiver)
      //     }
      //   }
      //   let target = []
      //   target.push(...elements)
      //   return new Proxy(target, handler)
      // }
      // let arr = createArray('a', 'b', 'c')
      // console.log(arr[-1])
      // function timeout(ms) {
      //   return new Promise((resolve, reject) => {
      //     setTimeout(resolve, ms, 'done')
      //   })
      // }
      // timeout(100).then(value => {
      //   console.log(value)
      // })
      // let promise  = new Promise((resolve, reject) => {
      //   console.log('Promise')
      //   resolve()
      // })
      // promise.then(() => {
      //   console.log('Resolced')
      // })
      // console.log('Hi')
      // let p1 = new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     reject(new Error('错误'))
      //   }, 3000)
      // })
      // let p2 = new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve(p1)
      //   }, 1000)
      // })
      // p2.then(result => console.log(result)).catch(error => console.log(error))
      // let p = new Promise((resolve, reject) => {})
      // console.log(p)
      // let p = Promise.resolve()
      // console.log(p)
      // let thenable = {
      //   then: (resolve, reject) => {
      //     resolve(42)
      //   }
      // }
      // let p = Promise.resolve(thenable)
      // p.then(value => console.log(value))
      // setTimeout(() => {
      //   console.log('3')
      // }, 0)
      // Promise.resolve().then(() => console.log('2'))
      // console.log(1)
      // Promise.prototype.done = function (onFulfilled, onRejected) {
      //   this.then(onFulfilled, onRejected)
      //       .catch(reason => {
      //         setTimeout(() => {throw reason}, 0)
      //       })
      // }
      // let p = Promise.resolve()
      // p.finally(console.log(111))
      // const f = () => console.log('1')
      // Promise.try(f)
      // console.log('2')d
      // function* helloWordeGenerator() {
      //   yield 'hello'
      //   yield 'world'
      //   return 'ending'
      // }
      // let hw = helloWordeGenerator()
      // console.log(hw.next())
      // console.log(hw.next())
      // console.log(hw.next())
      // console.log(hw.next())
      // function* f() {
      //   console.log('执行完毕')
      // }
      // let generator = f()
      // setTimeout(() => generator.next(), 2000)
      // let arr = [1, [[2, 3], 4], [5, 6]]
      // let flat = function* (a) {
      //   let length = a.length
      //   for (let i = 0; i < length; i++) {
      //     let item = a[i]
      //     if (typeof item !== 'number') {
      //       yield* flat(item)
      //     } else {
      //       yield item
      //     }
      //   }
      // }
      // for (let f of flat(arr)) {
      //   console.log(f)
      // }
      // let myIterator = {}
      // myIterator[Symbol.iterator] = function* () {
      //   yield 1
      //   yield 2
      //   yield 3
      // }
      // console.log(myIterator)
      // console.log([...myIterator])
      // for (let i of myIterator) {
      //   console.log(i)
      // }
      // function* f() {
      //   for (let  i = 0; true; i++) {
      //     let reset = yield i
      //     console.log(reset)
      //     if (reset) {
      //       i = -1
      //     }
      //   }
      // }
      // let g = f()
      // g.next()
      // g.next(12)
      // g.next()
      // function* foo(x) {
      //   let y = 2 * (yield (x + 1))
      //   let z = yield (y / 3)
      //   console.log(x, y, z)
      //   return (x + y + z)
      // }
      // let a = foo(5)
      // console.log(a.next())
      // console.log(a.next(12))
      // function Point(x, y) {
      //   this.x = x
      //   this.y = y
      // }
      // Point.prototype.toString = function() {
      //   return '(' + this.x + ',' + this.y + ')'
      // }
      // let p = new Point(1, 2)
      // console.log(p)
      // class Point {
      //   constructor(x, y) {
      //     this.x = x
      //     this.y = y
      //   }
      //   toString() {
      //     return '(' + this.x + ',' + this.y + ')'
      //   }
      // }
      // console.log(point.toString())
      // console.log(typeof Point)
      // class Bar {
      //   doStuff() {
      //     console.log('stuff')
      //   }
      // }
      // let b = new Bar()
      // b.doStuff()
      // const obj = {
      //   name: '王京',
      //   sex: '男',
      //   age: '26'
      // }
      // class Point {
      //   constructor() {
      //     console.log('初始化')
      //   }
      // }
      // let p = new Point()
      // const MyClass = class Me {
      //   getClassName() {
      //     return Me.name
      //   }
      // }
      // let inst = new MyClass()
      // console.log(inst.getClassName())
      // console.log(Me.name)
      // let person = new class {
      //   constructor(name) {
      //     this.name = name
      //   }
      //   sayName() {
      //     console.log(this.name)
      //   }
      // }('王京')
      // person.sayName()
      // class Foo {
      //   static me() {
      //     console.log('hello')
      //   }
      // }
      // class Bar extends Foo {}
      // let foo = new Foo()
      // Foo.me()
      // foo.me()
      // class Foo {}
      // Foo.name = '王京'
      // console.log(Foo.name)
      // class person {
      //   name = '王京'
      //   age = 26
      //   constructor() {
      //     console.log(this.name)
      //   }
      // }
      // let p = new person()
      // console.log(p.age)
      // class A {
      //   constructor() {
      //     this.p = 2
      //   }
      // }
      // A.prototype.name = '王京'
      // class B extends A {
      //   get m() {
      //     console.log(super.name)
      //   }
      // }
      // let b = new B()
      // b.m
      // async function getStockPriceByName(name) {
      //   let symbol = await getStockSymbol(name)
      //   let stockPrice = await getStockPrice(symbol)
      //   console.log(stockPrice)
      // }
      // getStockPriceByName('goog').then(function (result) {
      //   console.log(result)
      // })
      // function timeout(ms) {
      //   return new Promise((resolve) => {
      //     setTimeout(resolve, ms)
      //   })
      // }
      // async function asyncPrint(value, ms) {
      //   await timeout(ms)
      //   console.log(value)
      // }
      // asyncPrint('你好', 3000)
      // let arr = ['one', 'two', 'three', 'four']
      // let sum = arr.reduce((x, y, z, a) => { // x: reduce返回值；y：当前循环元素；z：索引；a：数组对象
      //     console.log(x, y)
      //     console.log(x + y)
      //     return x + y
      //   }, '开始') // 设置参数：reduce的第一次返回值。不设置：默认为数组第一个元素，循环从第二个元素开始；设置：循环从第一个元素开始
      // console.log(sum)
      // function add(x, y) {
      //   return x + y
      // }
      // console.log(add(1, 2))
      // function curryingAdd(x) {
      //   return function (y) {
      //     return x + y
      //   }
      // }
      // console.log(curryingAdd(1)(2))
      // function check(reg, txt) {
      //   return reg.test(txt)
      // }
      // console.log(check(/\d+/g, 'test'))
      // function curryingCheck(reg) {
      //   return function(txt) {
      //     return reg.test(txt)
      //   }
      // }
      // let hasNumber = curryingCheck(/\d+/g)
      // // console.log(hasNumber('test'))
      // console.log(curryingCheck(/\d+/g)('test'))
      // let add = () => {
      //   let list = Array.prototype.slice.call(arguments)
      //   let adder = () => {
      //     list.push(...arguments)
      //     return adder
      //   }
      //   // let adder = () => {
      //   //   return adder
      //   // }
      //   adder.toString = () => {
      //     return list.reduce((a, b) => {
      //       return a + b
      //     })
      //   }
      //   return adder
      // }
      // console.log(add(1)(4)(5))

      // 柯里化
      // function add(...n) {
      //   let _args = [...n]
      //   let _adder = (...arr) => {
      //     _args.push(...arr)
      //     return _adder
      //   }
      //   _adder.toString = () => _args.reduce((a, b) => a + b)

      //   return _adder
      // }
      // console.log(add(1)(2)(3, 4)) // 10
    },
    setVuex() {
      this.$store.dispatch('setNum', 9)
    },
    addVuex() {
      this.$store.dispatch('demo/addNum', 1)
    },
    cutVuex() {
      this.$store.dispatch('cutNum', 1)
    }
  }
}
</script>
