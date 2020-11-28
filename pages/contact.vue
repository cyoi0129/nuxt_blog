<template>
    <v-container>
        <h1>Contact</h1>
        <Form />
    </v-container>
</template>
<script>
import Form from '~/components/Form.vue'
export default {
    head() {
      return {
        title: 'Contact',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Contact page description'
          }
        ]
      }
  }
}
</script>