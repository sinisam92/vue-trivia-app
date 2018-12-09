const Chuck = require('chucknorris-io'),
  client = new Chuck();

class ChuckService {
  getRandomJoke() {
    return client.getRandomJoke().then((response) => response);
  }
}

const chuck = new ChuckService();

export default chuck;
