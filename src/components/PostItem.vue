<template>
  <div>
    <div v-for="postItem in getPosts" :key="postItem.id">
      <div class="wrapper">
        <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIyl_sTNDD3_cwNWo8-I23uOudiVoxxX1V9kesyN7BPQD9GuK-ztvGZ_y9KNAafRyvK0&usqp=CAU" alt="logo">
        <span class="title" >Title: {{postItem.title}}</span>
        <div class="body" >Message: {{postItem.body}} </div>
      </div>
    </div>
  </div>
</template>

<script>


import {mapActions, mapGetters} from "vuex";

export default {
  name: "PostItem",
  computed: mapGetters(['getPosts']),
  methods: mapActions(['fetchPosts']),
  mounted() {
    this.fetchPosts()
  }

}
</script>

<style scoped lang="scss">

    .wrapper{
      margin-left: 20px;
      margin-top: 30px;
      .img{
        height: 100px;
        border-radius: 50%;
        text-align: end;
      }
      .title
      {
        font-size: 20px;
        font-weight: bold;
        margin-left: 20px;
      }
      .body{
        margin-top: 10px;
        margin-left: 20px;
      }
    }
</style>