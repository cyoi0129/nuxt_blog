<template>
<v-container>
    <h1>Test</h1>
    {{ip}}
    </v-container>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
//   asyncData () {
//    return axios.get('/article.json')
//      .then((res) => {
//        console.log(res.data)
//        return { ssrData: res.data }
//      })
//  },
//  async asyncData () {
//     let { data } = await axios.get('/article.json')
//     return { ssrData: data.data }
//  }
//  async asyncData({ $axios }) {
//   const ip = await $axios.$get('/article.json')
//   return { ip }
// }
    async asyncData() {
        // const ip = this.getIP()
        // return {ip}
    }
}
</script>