<template>
  <header>
    <v-app-bar app :color="color" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Sample Nuxt.js</v-toolbar-title>
      <v-tabs>
        <v-tab v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url">{{ menuItem.name }}</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-btn icon v-if="login" link to="/user"><v-icon>mdi-account</v-icon></v-btn>
      <v-btn icon v-else @click="dialog=true"><v-icon>mdi-login-variant</v-icon></v-btn>
    </v-app-bar>
    <v-dialog v-model="dialog" max-width="320px">
        <v-card>
          <v-card-title class="blue darken-2 mb-4 white--text">User Login</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="User" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Password" type="password" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :color="color" text @click="dialog=false">Cancel</v-btn>
            <v-btn :color="color" text @click="dialog=false,login=true" dark>Login</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url">
            <v-list-item-title><v-icon class="mr-4">{{menuItem.icon}}</v-icon>{{ menuItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>
 
<script>
export default {
  name: 'Header',
  data () {
    return {
      color: 'blue darken-3',
      drawer: false,
      login: false,
      dialog: false,
      menuItems: [
        {
            name: 'Home',
            url: '/',
            icon: 'mdi-home'
        },
        {
            name: 'Articles',
            url: '/articles',
            icon: 'mdi-file-document'
        },
        {
            name: 'Price',
            url: '/price',
            icon: 'mdi-cash-usd'
        },
        {
            name: 'FAQ',
            url: '/faq',
            icon: 'mdi-book-open-variant'
        },
        {
            name: 'Contact',
            url: '/contact',
            icon: 'mdi-email'
        }
      ]
    }
  }
}
</script>
 
<style scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
.v-tabs a {
    color: #fff;
}
.v-list-item--link:before {
    background:none;
}
@media screen and (min-width:800px) {
    .v-app-bar__nav-icon {
        display: none !important;
    }
    .v-tabs {
        display: block !important;
    }
}
@media screen and (max-width:799px) {
    .v-app-bar__nav-icon {
        display: block !important;
    }
    .v-tabs {
        display: none !important;
    }
}
</style>