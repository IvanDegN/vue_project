<template>
  <b-list-group style="max-width: 340px;" class="mx-auto">
  <b-list-group-item class="d-flex align-items-center">
      <b-avatar class="mr-3"></b-avatar>
      <router-link class="mr-auto link"   :items="items" :to="{name: 'profile-page', params: { id: users.id} }" >{{users.name}}</router-link>
    </b-list-group-item>
  </b-list-group>

</template>

<script>

export default {
  name: "UserItem",
  props:['users', 'items']
}


</script>

<style scoped lang="scss">
  .link:hover{
    font-weight: bold;
  }
  .link{
    color: #49e849;
    text-decoration: none;
  }
</style>