<template>
  <div class="w-full text-right">
    <div class="relative" :class="{invalid : errortext.length,valid : value,readonly:readonly}">
      <label :for="name" class="text-white">{{label}}</label>
      <img class="absolute right-1 translate-y-2/4 cursor-pointer" @click.prevent="toggle()" v-show="showEyeIcon"
           src="@/assets/Images/eye.svg" alt="">
      <input  class="bg-blue h-10 w-full p-2 text-white"
              @input="$emit('input' , inputData)" v-model="inputData" :required="required" :type="type" :name="name" :readonly="readonly" :disabled="disabled" :placeholder="faname">
    </div>
    <div class="invalid-alert" v-if="errortext">
      {{errortext}}
    </div>
  </div>
</template>
<script>
export default {
  name: "Input",
  props: ['type' , 'name', 'errortext', 'faname','value','readonly','required', 'disabled' , 'label'],
  data() {
    return {
        showEyeIcon:false,
        inputData:''
    }
  },
  methods: {
    toggle() {
      this.type = (this.type === 'text' ? 'password' : 'text')
    },
  },
  mounted() {
    if(this.type === 'password') this.showEyeIcon = true
    this.inputData = this.value
  }

}
</script>
