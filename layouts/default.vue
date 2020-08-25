<template>
  <div>
    <SiteNavigation></SiteNavigation>
   <div class="wrapper">
     <Nuxt />
   </div>
   <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import SiteNavigation from './partials/navigation';
import SiteFooter from './partials/footer';
export default {
   components : {
      SiteNavigation,
      SiteFooter
   }
}
</script>