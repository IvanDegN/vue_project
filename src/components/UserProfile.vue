<template>
    <div>
      <UserProfileItem :profile="profile"/>
      <AlbumsPage/>
      <PostsPage/>
    </div>
</template>

<script>

import UserProfileItem from "@/components/UserProfileItem";
import AlbumsPage from "@/pages/AlbumsPage";
import PostsPage from "@/pages/PostsPage";
export default {
  name: "UserProfile",
  components: {PostsPage, AlbumsPage, UserProfileItem},
  props:['profile']
}
</script>

<style scoped lang="scss">

</style>