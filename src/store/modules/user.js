
export default {

    state: {
        users: [],
        profile: null,
    },
    getters: {
        getUsers(state){
            return state.users
        }
    },
    mutations: {
        updateUsers(state, users){
           return state.users = users
        },
        updateProfile(state, profile){
            return state.profile = profile
        }
    },
    actions: {
       async fetchUsers({commit}){
            const url = 'https://jsonplaceholder.typicode.com/users'
           const res = await fetch(url)
           const users = await res.json()
           commit('updateUsers', users)
        },
        async getUserProfile({commit}, id){
           const url = `https://jsonplaceholder.typicode.com/users/${id}`
            const res = await  fetch(url)
            const profile = await res.json()
            commit('updateProfile', profile)
        },
    }

}







