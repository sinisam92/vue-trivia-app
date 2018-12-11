<template>
  <div class="container">
    <h1>
      Trivia
      <strong>Pop Quizzzzz</strong>
    </h1>
    <h5>
      Click on the question to
      <strong>POP</strong> the answer
    </h5>
    <ul class="list-group list-group-flush">
      <li v-for="t in trivia" :key="t.id" class="list-group-item">
        {{t.question + '?'}}
        <button
          @click="answerAlert(t.answer)"
          class="btn btn-outline-dark"
        >Click for Answer</button>
      </li>
    </ul>

    <!-- <div>{{ JSON.stringify(trivia) }}</div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  created() {
    this.getRandomTrivia();
  },
  computed: {
    ...mapGetters({
      trivia: "randomTrivia"
    })
  },
  methods: {
    ...mapActions(["getRandomTrivia"]),

    answerAlert(answer) {
      alert(answer);
    }
  }
};
</script>

<style scoped>
button {
  float: right;
}
h5,
h1 {
  font-family: "Kalam", cursive;
}
</style>
