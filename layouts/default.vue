<template>
  <v-app>
    <v-app-bar fixed app>
      <nuxt-link to="/" class="d-flex align-center">
        <NuxtLogo />
      </nuxt-link>

      <v-row justify="end" class="ma-0 ml-1">
        <nuxt-link to="/Snake" class="nav-link">Snake</nuxt-link>
        <nuxt-link to="/" class="nav-link">Home</nuxt-link>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-0 ma-0">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; Nguyen Hoang Tuan</span>
    </v-footer>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav-link {
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 600;
  color: rgb(95, 95, 95) !important;
  padding: 0 10px;
  margin: 0 10px;
}
.nav-link:hover {
  color: #f9a825 !important;
}
</style>
