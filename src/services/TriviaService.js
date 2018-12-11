import axios from 'axios';

class TriviaService {
  constructor() {
    axios.defaults.baseURL = 'http://jservice.io/api/';
  }
  async getRandomTrivia() {
    const response = await axios.get('random/', { params: { count: 30 } });
    return response.data;
  }
  async getCategories() {
    const response = await axios.get('categories/', { params: { count: 10 } });
    return response.data;
  }
  async getTriviaByCategory(id) {
    const response = await axios.get('category/', { params: { id: id } });
    return response.data.clues;
  }
}

const trivia = new TriviaService();

export default trivia;
