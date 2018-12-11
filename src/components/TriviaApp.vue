<template>
  <div class="container">
    <h1>
      Trivia
      <strong>Pop Quizzzzz</strong>
    </h1>
    <ul class="list-group list-group-flush">
      <li v-for="t in trivia" :key="t.id" class="list-group-item">
        {{t.question + '?'}}
        <button
          @click="answerAlert(t.answer)"
          class="btn btn-outline-dark"
        >Click for Answer</button>
      </li>
    </ul>
    <div class="container-categories">
      <h3>Select what category questions you want</h3>
      <ul v-for="category in triviaCategory" :key="category.id">
        <div class="category-buttons">
          <button
            @click="getTriviaByCategory(category.id)"
            class="btn btn-outline-primary"
          >{{ category.title }}</button>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  created() {
    this.getRandomTrivia();
    this.getTriviaCategories();
    this.getTriviaByCategory();
  },
  computed: {
    ...mapGetters({
      trivia: "randomTrivia",
      triviaCategory: "triviaCategory"
    })
  },
  methods: {
    ...mapActions([
      "getRandomTrivia",
      "getTriviaCategories",
      "getTriviaByCategory"
    ]),

    answerAlert(answer) {
      alert(answer);
    }
  }
};
</script>

<style scoped>
.btn-outline-dark {
  float: right;
}
.category-buttons {
  display: inline;
  margin-right: 0;
  padding-right: 0;
}
h1 {
  font-family: "Kalam", cursive;
}
</style>
