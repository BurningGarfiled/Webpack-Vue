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
