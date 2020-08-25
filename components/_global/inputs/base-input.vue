<template>
 <div>
    <input 
        :placeholder="placeholder"
        class="form-control form-control-lg font-14 fw-300"
        :value="value"
        :type="inputType"
        :class="{ 'is-invalid': form.errors.has(field) }"
        @input="handleInput"
    />
    <has-error :form="form" :field="field"></has-error>
</div>
</template>

<script>
export default {
  props:{
      form: {
        type:Object,
        required:true
      },
      field: {
       type:String,
       required:true
      },
      placeholder: {
          type:String,
          default:''
      },
      inputType: {
         type:String,
         default:'text'
      },
      value: {
          type:String,
          default:""
      }
  },

  methods: {
      handleInput(e){
           this.$emit('input',e.target.value);
      }
  }
}
</script>

<style>

</style>