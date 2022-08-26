<template>
  <div id="app">
    <router-view :users="getUsers" :items="getLinks"   />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

  export default {
    name: 'app',
    computed:mapGetters(['getUsers', 'getLinks',]),
    methods:mapActions(['fetchUsers', 'fetchLinks',]),
    mounted() {
      this.fetchUsers()

    }
  }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
