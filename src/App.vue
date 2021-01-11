<template>
  <v-app>
    <v-app-bar
        class="white"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-img src="https://www.peri.ltd.uk/.resources/peri/webresources/img/peri-logo.png" width="80px"/>
      </v-toolbar-title>
    </v-app-bar>
    <div class="secondary-nav">
      <v-tabs color="secondary" grow icons-and-text>
        <v-tab to="/">
          Home
          <v-icon style="margin-top: 0.3em">
            mdi-home
          </v-icon>
        </v-tab>
        <v-tab to="/orders">
          Orders
          <v-icon style="margin-top: 0.3em">
            mdi-form-select
          </v-icon>
        </v-tab>
        <v-tab to="/manage-users">
          Users
          <v-icon style="margin-top: 0.3em">
            mdi-account
          </v-icon>
        </v-tab>
      </v-tabs>
    </div>
    <v-navigation-drawer
        v-model="drawer"
        :class="`${$vuetify.theme.dark ? '' : 'grey--text text--darken-3'}`"
        absolute
        class="pa-2"
        temporary
    >
      <v-container>
        <div class="d-flex mb-6">
          <v-icon class="mr-2">mdi-cog</v-icon>
          <h2> User Settings </h2>
        </div>

        <div class="mb-6">
          <div class="d-flex">
            <v-icon class="mr-2">mdi-lock</v-icon>
            <h3> Security </h3>
          </div>
          <v-card class="pa-3 mt-3 accent" flat>
            <h4> Publish usage data </h4>
            <v-switch hide-details small/>
          </v-card>

          <v-card class="pa-3 mt-3 accent" flat>
            <h4> Auto Login </h4>
            <v-switch hide-details small/>
          </v-card>
        </div>

        <div class="mb-6">
          <div class="d-flex">
            <v-icon class="mr-2">mdi-eye</v-icon>
            <h3> Appearance </h3>
          </div>

          <v-card class="pa-3 mt-3 accent" flat>
            <h4> Dark Mode </h4>
            <v-switch v-model="$vuetify.theme.dark" hide-details small/>
          </v-card>
        </div>

      </v-container>
    </v-navigation-drawer>
    <div class="grey lighten-4" style="height: 100%">
      <v-container>
        <router-view class="px-4"></router-view>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
}
</script>

<style>
* {
  font-family: 'Roboto', sans-serif;
}

.secondary-nav {
  width: 100%;
}

.v-toolbar {
  height: 55px !important;
  flex: none !important;
}
</style>

