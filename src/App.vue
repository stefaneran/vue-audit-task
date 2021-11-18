<template>
  <v-app>
    <v-main>
      <BreadCrumbs />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import BreadCrumbs from './components/BreadCrumbs'
export default {
  name: 'App',
  components: {
    BreadCrumbs
  }
};
</script>
