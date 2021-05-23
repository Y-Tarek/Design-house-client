<template>
   <section class="authentication">
                <div class="auth-body">
                    <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                        Login
                    </h1>
                    <form class="auth-form" @submit.prevent="submit" >
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
                        <div class="form-group">
                             <base-input
                                :form="form"
                                field="password"
                                inputType="password"
                                v-model="form.password"
                                placeholder="Password"
                            ></base-input>
                        </div>
                        <div class="mt-4 mb-4 clearfix">
                            <nuxt-link class="forgot-pass color-blue font-14 fw-400" to="/password/email"> Forgot password? </nuxt-link>
                        </div>
                        <base-button :loading="form.busy"> Login</base-button>
                        <p class="font-14 fw-400 text-center mt-4">
                            Don't have an account yet?
                            <nuxt-link class="color-blue" to="/register"> Create an account</nuxt-link>
                        </p>
                    </form>
                </div>
            </section>
</template>

<script>
export default {
   middleware: 'guest',
 data(){
     return {
         form:this.$vform({
             email: '', 
              password: ''
         })
        
     }
 },

 methods:{

     submit(){
        this.$auth.loginWith('local',{
            data:this.form
        }).then((res) => {
            console.log(res);
            
        }).catch((e) => {this.form.errors.set(e.response.data.errors);})
     }
 }
}
</script>

<style>

</style>