
<template>
  <HeaderComponent/>
  
  <!-- for the views to work -->
  <RouterView/>

  <FooterComponent/>
</template>


<script>
import HeaderComponent from './components/HeaderTemplate.vue';
import FooterComponent from './components/FooterTemplate.vue';

export default {
    name: 'App',
    components: {HeaderComponent, FooterComponent},
    data: function() {
      return {}
}
}
</script>

<style scoped src="./assets/styles.css">
  @import './assets/styles.css';
</style>