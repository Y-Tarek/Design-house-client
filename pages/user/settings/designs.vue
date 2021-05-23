<template>
   <div class="setting-block">
     <div class="setting-title font-16 fw-500">Designs</div>

     <div class="setting-body white-bg-color">
        <table class="table table-striped">
            <thead>
                <tr>
                    <td></td>
                    <td>Title</td>
                    <td>Status</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="design in designs" :key="design.id">
                    <td>
                        <div v-if="design.images">
                        <img :src="design.images.thumbnail" width="100">
                         </div>
                    </td>
                    <td>
                        {{design.title}}
                    </td>
                    <td>
                        {{design.is_live ? 'published' : 'Draft'}}
                    </td>
                    <td>
                        <nuxt-link :to="{name:'designs.edit', params:{id: design.id} }">edit</nuxt-link>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
   </div>
</template>

<script>
export default {
  data(){
      return{
          designs: []
      }
  },

 methods:{
     
 },
 async asyncData(context){
       const {data} = await context.$axios.get(`user/${context.$auth.user.data.id}/designs`);
         console.log(data);
            return {designs : data.data}
 }
}
</script>

<style>

</style>