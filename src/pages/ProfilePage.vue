<template>
    <div>
      <template>
        <div class="text">
          <router-link class="link" :to="{name: 'users-page' }">Users </router-link>
          <span>Profile page </span>
          <router-link class="link" :to="{name: 'albums-page' }">Albums</router-link>
          <router-link class="link" :to="{name: 'posts' }"> Posts</router-link>
        </div>
            <UserProfile :profile="profile"  />
      </template>
    </div>
</template>

<script>

import UserProfile from "@/components/UserProfile";
export default {
  name: 'ProfilePage',
  components: {UserProfile},
  props:['id'],
  computed:{
    profile(){
      return this.$store.state.user.profile
    },
  },
  created() {
    this.$store.dispatch('getUserProfile', this.id)
  },

}
</script>


<style scoped lang="scss">
.text{
  text-align: center;
  .link{
    color: #49e849;
    text-decoration: none;
    &:hover{
      font-weight: bold;
    }
  }
}

</style>