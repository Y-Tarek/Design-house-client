<template>
            <!-- Start User Account Setting -->
            <div class="user-account-setting">
                <div class="container">
                    <div class="row">
                        <!-- LEFT -->
                        <div class="col-sm-3" id="myScrollspy">
                            <div class="list-group">
                                <nuxt-link 
                                    :to=" {name:link.route}"
                                    v-for="link in links"
                                    :key="link.route"
                                    class="list-group-item list-group-item-action"
                                    >{{link.title}}</nuxt-link
                                >
                                
                            </div>
                        </div>

                        <!-- RIGHT -->
                        <div class="col-sm-9">
                           <router-view></router-view>
                        <!-- END RIGHT -->
                    </div>
                </div>
                <!-- END CONTAINER -->
            </div>
            </div>
        
</template>

<script>
export default {
    middleware:['auth'],
  data(){
      return{
          links:[
             { title:'Dashboard',
              route:'settings.dashboard'
             },
             {
                 title:'Update Profile',
                 route:'settings.profile'
             },
              {
                 title:'Manage Designs',
                 route:'settings.designs'
             }
          ]
      }
  }
}
</script>

<style>

</style>