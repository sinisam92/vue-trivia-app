import axios from 'axios';

class TriviaService {
  constructor() {
    axios.defaults.baseURL = 'http://jservice.io/api/';
  }
  getRandomTrivia() {
    return axios.get('random', { params: { count: 30 } });
  }
}

const trivia = new TriviaService();

export default trivia;
