<template>
  <div>
       <section class="hero text-center bg-secondary text-white">
                <div class="container">
                    <h1 class="font-28 fw-600 text-uppercase">
                        Update design information
                    </h1>
                </div>
            </section>
  </div>
</template>

<script>
export default {
 data(){
     return {
       design: null,
       form:this.$vform({
           title:'',
           description:'',
           is_live: false,
           tags:[],
           assigned_to_team:false,
           team:null
       })
     }
 },

 created(){
  this.$axios.$get(`designs/${this.$route.params.id}`).then((res) => {
    // console.log("response",res);
    this.design = res.data;
    console.log(this.design);
  }).catch((e) => {
   console.log(e);
  });

 },

 methods: {
     submit(){

     }
 },

 mounted(){
//   Object.keys(this.form).forEach(key => {
//       if(this.design.hasOwnProperty(key)){
//           this.form[key] = this.design[key];
//       }
//   });
 }
}

</script>

<style>

</style>