<template>
   <!-- Start Wrapper -->
        <div class="wrapper">
            <!-- Start Hero -->
            <section class="hero text-center bg-secondary text-white">
                <div class="container">
                    <h1 class="font-28 fw-600 text-uppercase">
                        Upload a design
                    </h1>
                </div>
            </section>
            <!-- End Hero -->

            <!-- Upload Shot -->
            <div class="upload-shot">
                <div class="container">
                    <div
                        class="row justify-content-center align-items-center text-center"
                    >
                        <div class="col-md-6">
                            <div class="card bg-white shadow-sm">
                                <div class="d-flex flex-column justify-content-center p-1">
                                    <div class="alert alert-danger" v-if="error">
                                        <p>An error occured during uploading</p>
                                        <p>{{error}}</p>
                                    </div>
                                     <slim-cropper 
                                     :options="slimptions"
                                     >
                                       <input type="file" name= "image"/>
                                     </slim-cropper>


                                    <div class="text-success caption-sm mt-12" v-if="uploading">
                                        <i class="fas fa-spinner fa-spin"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="upload=para mt-2">
                                     <p class="font-14 fw-400">
                                         your Image dimension must be at least 800px x 600px in size.
                                         Also the image size should be a maximum  of 2MB. please resize your
                                         file before you upload.
                                     </p>
                                 </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Upload Shot -->
        </div>
  <!-- End Wrapper -->
</template>

<script>
 import Slim from '@/components/_global/slim/slim.vue';
export default {
    middleware: ['auth'],
  components: {
      'slim-cropper' : Slim
  },

  data(){
      return {
        slimptions:{
          service: this.slimServeice,
          post: 'output',
          defaultInputName: 'image',
          label: 'Select an image...',
          fileSize:2
        },
        uploading: false,
        error:'',
        
      }
  },

  methods: {
   slimServeice(formdata, progress, success, failure, slim){
       this.uploading=true;
       this.$axios.post('designs', formdata).then((res) => {
           this.$router.push({
               name:'designs.edit',
               params: { id:res.data.id }
           });
       }).catch((e) => {
           const message = e.response.data.errors;
           this.error = message[Object.keys(message)[0]][0];
       })
       .finally(() => {this.uploading = false})
   },
   
  }
}
</script>

<style>

</style>