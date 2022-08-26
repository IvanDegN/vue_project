<template>
  <div>
    <h1 class="text">Users</h1>
    <hr>
    <UserItem :users="users" v-for="users in users" :key="users.id"    />
  </div>
</template>
<script>
 import UserItem from "@/components/UserItem";


export default {
   components: {UserItem},
    props:['users']
  }
</script>

<style lang="scss">
  .text{
      text-align: center;
      margin-top: 15px;
    }
</style>