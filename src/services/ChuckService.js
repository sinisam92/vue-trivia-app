const Chuck = require('chucknorris-io'),
  client = new Chuck();

class ChuckService {
  getRandomJoke(category) {
    return client.getRandomJoke(category).then((response) => response);
  }
}

const chuck = new ChuckService();

export default chuck;
