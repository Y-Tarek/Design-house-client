<template>
   <div class="wrapper">

            <!-- Section Cards -->
            <section class="authentication">
                <div class="auth-body">
                    <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                        Email Verification
                    </h1>
                    <form class="auth-form">
                        
                        
                        <div class="form-group" v-if="success">
                            <div class="alert alert-success">
                               {{status}}
                            </div>
                            <nuxt-link to="/login">Proceed to Login</nuxt-link>
                        </div>
                        <div class="form-group " v-else>
                            <div class="alert alert-danger">
                              {{status}}
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
</template>

<script>
export default {

data(){
    return{
    success :true,
     status: ''
    }
},

  created(){
          this.$axios.post(
             `${process.env.API_URL}/verification/verify/${this.$route.params.id}?expires=${this.$route.query.expires}&signature=${this.$route.query.signature}`
         ).then((res) => {
             console.log(res);
             this.success =true;
             this.status= res.data.message;
         }).catch((e) => 
         {
             this.success =true;
             this.status= e.errors;
         });
  }
}
</script>

<style>

</style>