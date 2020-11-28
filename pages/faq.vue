<template>
    <v-container>
        <h1>Faq</h1>
        <v-card tile flat class="my-4">
            <Expansion />
        </v-card>
    </v-container>
</template>
<script>
import Expansion from '~/components/Expansion.vue'
export default {
    head() {
      return {
        title: 'Faq',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Faq description'
          }
        ]
      }
  }
}
</script>