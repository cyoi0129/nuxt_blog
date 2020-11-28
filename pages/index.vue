<template>
  <div>
    <Carousel />
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="6" md="6">
          <v-img src="images/a.jpg"></v-img>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-card tile flat>
            <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
            <v-card-text>
              <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications. Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications. Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" nuxt to="/products">Products</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-parallax src="/images/7.jpg">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">Vuetify</h1>
            <h4 class="subheading">Build your application today!</h4>
          </v-col>
        </v-row>
    </v-parallax>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="6" md="6">
          <v-card tile flat>
            <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
            <v-card-text>
              <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications. Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications. Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" nuxt to="/price">Price</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-img src="images/c.jpg"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-parallax dark src="/images/3.jpg">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">Vuetify</h1>
            <h4 class="subheading">Build your application today!</h4>
          </v-col>
        </v-row>
    </v-parallax>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="6" md="6">
          <Sparkline />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-card tile flat>
            <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
            <v-card-text>
              <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications. Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications. Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" nuxt to="/faq">FAQ</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Carousel from '~/components/Carousel.vue'
import Sparkline from '~/components/Sparkline.vue'
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  head() {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
      ]
    }
  }
}
</script>
