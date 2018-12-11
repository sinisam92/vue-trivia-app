import Trivia from '../services/TriviaService';

export default {
  state: {
    randomTrivia: [],
    triviaCategories: []
  },
  actions: {
    async getRandomTrivia({ commit }) {
      try {
        commit('SET_TRIVIA', await Trivia.getRandomTrivia());
      } catch (error) {
        error;
      }
    },
    async getTriviaCategories({ commit }) {
      try {
        commit('SET_TRIVIA_CATEGORIES', await Trivia.getCategories());
      } catch (error) {
        error;
      }
    },
    async getTriviaByCategory({ commit }, id) {
      try {
        commit('SET_TRIVIA', await Trivia.getTriviaByCategory(id));
      } catch (error) {
        error;
      }
    }
  },
  mutations: {
    SET_TRIVIA(state, trivia) {
      state.randomTrivia = trivia;
    },
    SET_TRIVIA_CATEGORIES(state, category) {
      state.triviaCategories = category;
    }
  },
  getters: {
    randomTrivia: (state) => state.randomTrivia,
    triviaCategory: (state) => state.triviaCategories
  }
};
