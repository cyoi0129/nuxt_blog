<template>
<v-container>
    <h1>Articles</h1>
    <v-card class="pa-2" tile flat>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="8">
            <v-tabs v-model="tab" fixed-tabs color="primary">
                <v-tab v-for="(category, index) in categories" :key="index">{{category}}</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <v-tab-item v-for="(category, index) in categories" :key="index">
                <v-card v-for="article in getArticles(category)" :key="article.aid" class="ma-2" :to="'/articles/' + article.aid" flat>
                    <v-row>
                    <v-col cols="8" xs="8">
                        <v-card-title class="px-2 py-0 ma-0">{{article.title}}</v-card-title>
                        <v-card-text class="px-2 py-1 ma-0">{{article.description}}</v-card-text>
                        <v-card-subtitle class="px-2 py-1 ma-0"><v-icon class="pr-2">mdi-clock-outline</v-icon>{{article.published}}<v-icon class="px-2">mdi-folder</v-icon>{{article.category}}</v-card-subtitle>
                    </v-col>
                    <v-col cols="4" xs="4">
                        <v-img :src="article.thumbnail" max-width="120" class="pa-0 ma-0"></v-img>
                    </v-col>
                    </v-row>
                    <v-divider></v-divider>
                </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-col>
      </v-row>
    </v-card>
    </v-container>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  head() {
    return {
      title: 'Articles',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Articles page description'
        }
      ]
    }
  },
  data: () => ({
    tab:[]
  }),
  async asyncData({ store }) {
    if (store.getters['items'].length) {
      return
    }
  await store.dispatch('fetchItems')
  },
  computed: {
    articles() {
      return this.$store.getters.items
    },
    getArticles: function() {
      return function(category) {
        return this.$store.getters.getArticles(category)
      }
    },
    categories() {
      return this.$store.getters.getCategories
    }
  }
}
</script>
<style scoped>
.v-slide-group__prev--disabled {
    display:none!important;
}
.v-tabs--fixed-tabs > .v-tabs-bar .v-tab {
    font-size:12px!important;
    width:140px!important;
}
.listArticle {
    color:rgba(0, 0, 0, 0.6);
    text-decoration: none;
}
.v-window-item .v-card__title {
    font-size:18px;
    line-height:1.6em;
    display:-webkit-box;
    -webkit-box-orient: vertical;
    -moz-box-orient:vertical;
    -webkit-line-clamp:1;
    overflow:hidden;
}
.v-window-item .v-card__text {
    font-size:14px;
    line-height:1.6em;
    display:-webkit-box;
    -webkit-box-orient: vertical;
    -moz-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden;
    height:48px;
}
.v-window-item .v-card__subtitle {
    font-size:12px;
}
.v-window-item .v-icon {
    font-size:14px;
}
</style>