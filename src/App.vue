<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase">
        <span>Injector</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>-->
    </v-toolbar>

    <v-content>
      <Profile/>
    </v-content>
  </v-app>
</template>

<script>
import Profile from "./components/Profile";

export default {
  name: "App",
  components: {
    Profile
  }
};
</script>
