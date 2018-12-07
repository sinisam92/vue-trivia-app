import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Chuck from '../services/ChuckService'

Vue.use(Vuex)


const chuckStore = new Vuex.Store({
    state: {
        randomJoke: []
    },
    getters: {

    },
    actions: {
        async getRandomJoke({ commit }) {
            try {
                return await Chuck.getRandomJoke()
                commit('SET_RANDOM_JOKE', response.data)
            } catch (error) {
                console.log(error);
                
            }
        }
    },
    mutations: {
        SET_RANDOM_JOKE(state, randomJoke) {
            state.randomJoke = randomJoke
        }
    }
});

export default chuckStore;