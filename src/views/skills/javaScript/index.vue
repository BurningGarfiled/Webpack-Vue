<template>
  <div class="sys-page">
    <v-section title="初始数组">
      <div class="sec-title">
        初始数组：{{ sortArr }}
        <el-button type="primary" @click="newArrHandle">重新生成</el-button>
      </div>
    </v-section>
    <v-section title="数组排序">
      <div class="sec-div">
        <p class="sec-div">1、冒泡排序</p>
        <span class="sec-tag">
          <el-tag type="success">结果</el-tag>
        </span>
        {{ bubleSort(sortArr).data }}
        <span class="sec-tag">
          <el-tag type="success">耗时</el-tag>
        </span>
        {{ bubleSort(sortArr).time }}
      </div>
    </v-section>
    <v-section title="数组去重">
      <div class="sec-div">
        <p class="sec-div">1、遍历去重</p>
        <span class="sec-tag">
          <el-tag type="success">结果</el-tag>
        </span>
        {{ repeatErgodic(sortArr).data }}
        <span class="sec-tag">
          <el-tag type="success">耗时</el-tag>
        </span>
        {{ repeatErgodic(sortArr).time }}
      </div>
      <div class="sec-div">
        <p class="sec-div">2、利用ES6新数据结构Set去重</p>
        <span class="sec-tag">
          <el-tag type="success">结果</el-tag>
        </span>
        {{ setErgodic(sortArr).data }}
        <span class="sec-tag">
          <el-tag type="success">耗时</el-tag>
        </span>
        {{ setErgodic(sortArr).time }}
      </div>
      <div class="sec-div">
        <p class="sec-div">3、利用对象属性唯一特性去重</p>
        <span class="sec-tag">
          <el-tag type="success">结果</el-tag>
        </span>
        {{ objErgodic(sortArr).data }}
        <span class="sec-tag">
          <el-tag type="success">耗时</el-tag>
        </span>
        {{ objErgodic(sortArr).time }}
      </div>
    </v-section>
  </div>
</template>

<script>
export default {
  name: 'JavaScript',
  data() {
    return {
      sortArr: []
    }
  },
  mounted() {
    this.newArrHandle()
  },
  methods: {
    // 获取min-max之间的随机整数
    getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min // 不含最大值，含最小值
    },
    // 冒泡排序
    bubleSort(arr) {
      const newArr = JSON.parse(JSON.stringify(arr))
      const len = newArr.length
      const time1 = new Date().getTime()
      for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
          if (newArr[j] > newArr[j + 1]) {
            const temp = newArr[j]
            newArr[j] = newArr[j + 1]
            newArr[j + 1] = temp
          }
        }
      }
      const time2 = new Date().getTime()
      const totalTime = time2 - time1
      return {
        data: newArr,
        time: totalTime
      }
    },
    // 数组去重---遍历
    repeatErgodic(arr) {
      const newArr = JSON.parse(JSON.stringify(arr))
      const resArr = []
      const time1 = new Date().getTime()
      for (let i = 0; i < newArr.length; i++) {
        if (resArr.indexOf(newArr[i]) === -1) {
          resArr.push(newArr[i])
        }
      }
      const time2 = new Date().getTime()
      const totalTime = time2 - time1
      return {
        data: resArr,
        time: totalTime
      }
    },
    // 数组去重---new Set()去重
    setErgodic(arr) {
      const newArr = JSON.parse(JSON.stringify(arr))
      let resArr = []
      const time1 = new Date().getTime()
      resArr = new Set(newArr)
      const time2 = new Date().getTime()
      const totalTime = time2 - time1
      return {
        data: [...resArr],
        time: totalTime
      }
    },
    // 数组去重---利用对象去重
    objErgodic(arr) {
      const newArr = JSON.parse(JSON.stringify(arr))
      const resArr = []
      const obj = {}
      const time1 = new Date().getTime()
      for (let i = 0; i < newArr.length; i++) {
        if (!obj[newArr[i]]) {
          obj[newArr[i]] = true
          resArr.push(newArr[i])
        }
      }
      const time2 = new Date().getTime()
      const totalTime = time2 - time1
      return {
        data: resArr,
        time: totalTime
      }
    },
    // 新数组生成操作
    newArrHandle() {
      // 生成随机数组
      this.sortArr = []
      for (let i = 0; i < 10; i++) {
        const num = this.getRandomInt(0, 10)
        this.sortArr.push(num)
      }
    },
    // 数组排序操作
    sortHandle() {
      this.bubleSort(this.sortArr)
    },
    // 数组去重操作
    repeatHandle() {
      this.repeatErgodic(this.sortArr) // 遍历去重
      this.setErgodic(this.sortArr) // new Set去重
    }
  }
}
</script>
