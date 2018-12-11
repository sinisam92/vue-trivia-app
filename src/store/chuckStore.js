import Chuck from '../services/ChuckService';

export default {
  state: {
    randomJoke: '',
    category: []
  },
  actions: {
    async getNewJoke({ commit }, category) {
      try {
        commit('SET_RANDOM_JOKE', await Chuck.getRandomJoke(category));
      } catch (error) {
        error;
      }
    }
  },
  mutations: {
    SET_RANDOM_JOKE(state, joke) {
      state.randomJoke = joke;
    }
  },
  getters: {
    randomJoke: (state) => state.randomJoke,
    category: (state) => state.category
  }
};
