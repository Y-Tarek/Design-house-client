<template>
    <section class="authentication">
                <div class="auth-body">
                    <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                        Register
                    </h1>
                    <form class="auth-form" @submit.prevent="submit">
                        <alert-success :form="form">
                            We have sent you an email to activiate your account
                        </alert-success>
                         <div class="form-group">
                            <base-input
                                :form="form"
                                field="name"
                                inputType="text"
                                v-model="form.name"
                                placeholder="Full Name"
                            ></base-input>
                        </div>
                        <div class="form-group">
                            <base-input
                                :form="form"
                                field="username"
                                inputType="text"
                                v-model="form.username"
                                placeholder="Username"
                            ></base-input>
                        </div>
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
                        <div class="form-group">
                            <base-input
                                :form="form"
                                inputType="password"
                                v-model="form.password_confirmation"
                                field="password_confirmation"
                                placeholder="Confirm Password"
                            >
                            </base-input> 
                        </div>
                        
                       <base-button :loading="form.busy">Register</base-button>
                        <p class="font-14 fw-400 text-center mt-4">
                            Already have an account?
                            <nuxt-link class="color-blue" to="/login"> Login</nuxt-link>
                        </p>
                    </form>
                </div>
            </section>
</template>

<script>
export default {
   auth: 'guest',
  data(){
      return {
          form:this.$vform({
              username: '',
              name: '',
              email: '',
              password: '',
              password_confirmation: ''
          })
      }
  },
  methods:{
      submit(){
        this.form.post(`/register`).then((res) => {
            this.form.reset();
            console.log(res);
        }).catch((e) => {console.log(e);})
      }
  }
}
</script>

<style>

</style>