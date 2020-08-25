<template>
   <section class="authentication">
                <div class="auth-body">
                    <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                        Reset Password
                    </h1>
                    <form class="auth-form" @submit.prevent="submit" >
                        <alert-success :form="form">{{status}}</alert-success>
                        <alert-error  :form="form">
                            {{ form.errors.get('message') }}
                            <nuxt-link to="/verification/resend" >Resend verification email</nuxt-link>
                        </alert-error>
                        <div class="form-group">
                            <base-input
                            :form="form"
                            field="email"
                            inputType="email"
                            v-model="form.email"
                            placeholder="Email"
                         ></base-input>
                        </div>
                        
                        <div class="text-right">
                            <button
                             type="submit"
                             :disabled="form.busy"
                             class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
                                <span v-if="form.busy">
                                    <li class="fas fa-spinner fa-span"></li>
                                </span>
                                Send Password reset Link
                            </button>
                        </div>
                        <p class="font-14 fw-400 text-center mt-4">
                             Back To Login
                            <nuxt-link class="color-blue" to="/login"> Login</nuxt-link>
                        </p>
                    </form>
                </div>
            </section>
</template>

<script>
export default {
 data(){
     status:''
     return {
         form:this.$vform({
             email: ''
             
         })
        
     }
 },

 methods:{
     submit(){
       this.form.post('/password/email').then((res) => {
           this.status = res.data.status;
           this.form.reset();
       }).catch((e) => {console.log(e);});
   }
 }
}
</script>


<style>

</style>