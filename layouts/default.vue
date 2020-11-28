<template>
  <v-app>
    <Header />
    <v-main>
      <nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app class="text-center">
      <span>&copy; {{ new Date().getFullYear() }} Sample Nuxt.js All Right Reserved.</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  data () {
    return {
      fixed: false,
    }
  }
}
</script>