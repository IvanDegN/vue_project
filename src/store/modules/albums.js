
export default {
    state:{
        album: []
    },
    getters:{
        getAlbum(state){
            return state.album
        }
    },
    mutations:{
        updateAlbum(state, album){
            return state.album = album
        },

    },
    actions:{
       async fetchAlbum({commit}){
           const url = 'https://jsonplaceholder.typicode.com/photos?_limit=2'
           const res = await fetch(url)
           const album = await res.json()
           commit('updateAlbum', album)
       }

    },

}