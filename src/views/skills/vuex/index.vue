<template>
  <div class="sys-page">
    <el-button @click="setVuex">重置</el-button>
    <el-button @click="addVuex">+1</el-button>
    <el-button @click="cutVuex">-1</el-button>
    <div>
      {{ num }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vuex',
  data() {
    return {}
  },
  computed: {
    num() {
      return this.$store.state.demo.num
    }
  },
  mounted() {},
  methods: {
    setVuex() {
      this.$store.dispatch('setNum', 9)
    },
    addVuex() {
      this.$store.dispatch('addNum', 1)
    },
    cutVuex() {
      this.$store.dispatch('cutNum', 1)
    }
  }
}
</script>
