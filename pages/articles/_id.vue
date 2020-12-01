<template>
  <v-container>
    <v-card flat class="articleDetail pa-0">
      <h1>{{getSingle.title}}</h1>
      <v-card-subtitle class="px-2 py-1 ma-0"><v-icon class="pr-2">mdi-clock-outline</v-icon>{{getSingle.published}}<v-icon class="pl-4 pr-2">mdi-folder</v-icon>{{getSingle.category}}</v-card-subtitle>
      <v-img :src="getSingle.thumbnail"></v-img>
      <v-card-text>{{getSingle.description}}</v-card-text>
      <v-card class="ma-2 pa-2 articleContents" v-html="getSingle.contents" flat></v-card>
    </v-card>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      title: '',
      description: ''
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  },
  async asyncData({ store }) {
    if (store.getters['items'].length) {
      return
    }
    await store.dispatch('fetchItems')
  },
  computed: {
    getSingle: function() {
      const aid = Number(this.$route.params.id)
      console.log(aid)
      if (aid) {
        this.title = this.$store.getters.getSingle(aid).title
        this.description = this.$store.getters.getSingle(aid).description
        return this.$store.getters.getSingle(aid)
      } else {
        consloe.log('failed')
      }
    }
  }
}
</script>
<style>
.articleDetail {
  max-width:960px;
  margin:0 auto;
}
.articleDetail img {
  width:100%!important;
  margin:16px 0;
}
</style>
