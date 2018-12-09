import Chuck from '../services/ChuckService';

const chuckStore = {
  state: {
    randomJoke: ''
  },
  actions: {
    async getRandomJoke({ commit }) {
      try {
        commit('SET_RANDOM_JOKE', await Chuck.getRandomJoke());
      } catch (error) {}
    }
  },
  mutations: {
    SET_RANDOM_JOKE(state, joke) {
      state.randomJoke = joke;
    }
  },
  getters: {
    randomJoke: (state) => state.randomJoke
  }
};

export default chuckStore;
