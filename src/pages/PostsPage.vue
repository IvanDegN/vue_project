<template>
  <div>
   <PostItem />
    <AddNewPost/>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
import AddNewPost from "@/components/AddNewPost";


export default {
  name: "PostsPage",
  components: {PostItem, AddNewPost},

}
</script>
