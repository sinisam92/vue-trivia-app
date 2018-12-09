import Chuck from '../services/ChuckService';

const chuckStore = {
  state: {
    randomJoke: '',
    category: []
  },
  actions: {
    async getNewJoke({ commit }, category) {
      try {
        commit('SET_RANDOM_JOKE', await Chuck.getRandomJoke(category));
      } catch (error) {}
    }
  },
  mutations: {
    SET_RANDOM_JOKE(state, joke) {
      state.randomJoke = joke;
    },
    GET_CATEGORY(state, category) {
      state.category = category;
    }
  },
  getters: {
    randomJoke: (state) => state.randomJoke,
    category: (state) => state.category
  }
};

export default chuckStore;
