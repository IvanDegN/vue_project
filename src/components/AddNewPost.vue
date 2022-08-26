<template>
  <form @submit.prevent="submit" class="form">
    <input type="text" placeholder="Title" v-model="title">
    <input type="text" placeholder="Body" v-model="body">
    <button type="submit" >Create post</button>
  </form>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "AddNewPost",
  data(){
    return{
      title: '',
      body: ''
    };
  },
  methods:{
    ...mapMutations(['addNewPost']),
    submit(){
        this.addNewPost({
          title: this.title,
          body: this.body
        })
      this.title = ''
      this.body = ''
    }
  }
}
</script>

<style scoped>
    input{
      display: block;
      width: 100%;
      border: 1px solid black;
      border-radius: 2px;
      padding: 10px;
      margin-bottom: 10px;
    }
    button{
      margin: 0 auto;
      display: block;
    }

    .form{
      margin: 20px;
    }

</style>