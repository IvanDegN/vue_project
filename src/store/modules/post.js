export default {
    state:{
        posts: [],
    },
    getters:{
        getPosts(state){
            return state.posts
        },

    },
    mutations:{
        updatePosts(state, posts){
            return state.posts = posts
        },
        addNewPost(state, post){
            return state.posts.push(post)
        }
    },
    actions:{
      async  fetchPosts({commit}){
            const url = 'https://jsonplaceholder.typicode.com/posts?_limit=5';
            const res = await fetch(url);
            const posts = await res.json()
          commit('updatePosts', posts)
        },

    }
}