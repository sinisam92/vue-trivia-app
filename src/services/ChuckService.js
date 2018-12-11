const Chuck = require('chucknorris-io'),
  client = new Chuck();

class ChuckService {
  async getRandomJoke(category) {
    const response = await client.getRandomJoke(category);
    return response;
  }
  async getJokeCategories() {
    const response = await client.getCategories();
    return response;
  }
}

const chuck = new ChuckService();

export default chuck;
