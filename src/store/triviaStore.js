import Trivia from '../services/TriviaService';

export default {
  state: {
    randomTrivia: []
  },
  actions: {
    async getRandomTrivia({ commit }) {
      try {
        commit('RANDOM_TRIVIA', await Trivia.getRandomTrivia());
      } catch (error) {
        error;
      }
    }
  },
  mutations: {
    RANDOM_TRIVIA(state, trivia) {
      state.randomTrivia = trivia.data;
    }
  },
  getters: {
    randomTrivia: (state) => state.randomTrivia
  }
};
