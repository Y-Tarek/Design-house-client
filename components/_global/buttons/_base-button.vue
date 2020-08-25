<template>
  <div class="text-right">
                <button
                class="btn"
                :class="{
                    [`btn-${type}`]:true,
                    [`btn-${block}`]: block,
                    [`btn-${size}`]:true
                }"
                :type="nativeType"
                :disabled="loading"
                >
                   <span v-if="loading">
                       <li class="fas fa-spinner fa-span"></li>
                   </span>
                    <slot/>
                </button>
 </div>
</template>

<script>
export default {
  name: 'base-button',

  props: {
    type: {
       type:String,
      default:'primary'
    },
    nativeType: {
        type:String,
        default:'submit'
    },
    loading: {
        type:Boolean,
        default:false
    },
    block: {
        type:Boolean,
        default:false
    },
    size: {
        type:String,
        default:'md'
    }
     
  }
}
</script>

<style>

</style>