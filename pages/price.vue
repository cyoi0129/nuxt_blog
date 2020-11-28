<template>
    <v-container>
        <h1>Price</h1>
        <v-card tile flat class="my-4">
            <Table />
        </v-card>
    </v-container>
</template>
<script>
import Table from '~/components/Table.vue'
export default {
    head() {
      return {
        title: 'Price',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Price description'
          }
        ]
      }
  }
}
</script>