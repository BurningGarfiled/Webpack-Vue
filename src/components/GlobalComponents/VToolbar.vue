<template>
  <div :class="align" class="sys-toolbar">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VToolbar',
  props: {
    align: {
      type: String,
      default: function() {
        return 'right'
      }
    }
  }
}
</script>
