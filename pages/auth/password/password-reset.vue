<template>
   <section class="authentication">
                <div class="auth-body">
                    <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                        Reset Password
                    </h1>
                    <form class="auth-form" @submit.prevent="submit" >
                        <alert-success :form="form">
                            {{status}}
                             <p>
                                 <nuxt-link to="/login">Proceed To Login</nuxt-link>
                             </p>
                            </alert-success>
                        <alert-error  :form="form">
                            {{ form.errors.get('message') }}
                        </alert-error>
                        <div class="form-group">
                            <input 
                                type="text"
                                name="email"
                                readonly
                                v-model="form.email"
                                class="form-control form-control-lg font-14 fw-300"
                                :class="{ 'is-invalid': form.errors.has('email') }"
                                :placeholder= $route.query.email
                            />
                            <has-error :form="form" field="email"></has-error>
                        </div>
                         <div class="form-group">
                            <input
                                type="password"
                                name="password"
                                v-model="form.password"
                                class="form-control form-control-lg font-14 fw-300"
                                :class="{ 'is-invalid': form.errors.has('password') }"
                                placeholder="New Password"
                            />
                            <has-error :form="form" field="password"></has-error>
                        </div>
                         <div class="form-group">
                            <input
                                type="password"
                                v-model="form.password_confirmation"
                                name="password_confirmation"
                                class="form-control form-control-lg font-14 fw-300"
                                placeholder="Confirm New Password"
                            />
                        </div>
                        
                        <div class="text-right">
                            <button
                             type="submit"
                             :disabled="form.busy"
                             class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
                                <span v-if="form.busy">
                                    <li class="fas fa-spinner fa-span"></li>
                                </span>
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            </section>
</template>

<script>
export default {
 data(){
     return {
         status:'',
         form:this.$vform({
             email: this.$route.query.email,
             password: '',
             password_confirmation:'',
             token: this.$route.params.token
             
         })
        
     }
 },

 methods:{
     submit(){
       this.form.post('/password/reset').then((res) => {
           this.status = res.data.status;
           this.form.reset();
       }).catch((e) => {console.log(e);});
   },

   created(){
    this.form.email = this.$route.query.email;
    this.form.token = this.$route.params.token;
   }
 }
}
</script>


<style>

</style>