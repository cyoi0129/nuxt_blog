<template>
    <v-container>
        <h1>User</h1>
        <v-card tile flat class="my-4">
            <Timeline />
        </v-card>
    </v-container>
</template>
<script>
import Timeline from '~/components/Timeline.vue'
export default {
    head() {
      return {
        title: 'User',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'User description'
          }
        ]
      }
  }
}
</script>