<template>
  <button :class="classes + ' ' + [!disabled ? 'cursor-pointer' : 'cursor-not-allowed']"
          @click.prevent="$emit('clickEvent')"
          :disabled="disabled"
          class="flex items-center justify-center rounded ">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    classes:{
      type: Array,
      default: ''
    },
    disabled: {
      default: false,
      required: false,
    },
  },
  data() {
    return {

    }
  }

}
</script>
<style scoped>
button {
  border: none;
}
</style>
