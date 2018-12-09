<template>
  <div class="container">
    <div>
      <img class="chuck-image" src="https://pics.me.me/chuck-norri-17239471.png">
      <p>{{ joke.value }}</p>
      <button @click="getNewJoke" class="btn btn-primary">Get New Joke</button>
      <a :href="joke.sourceUrl" class="btn btn-info">See source</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch("getRandomJoke");
    });
  },
  methods: {
    getNewJoke() {}
  },
  computed: {
    ...mapGetters({
      joke: "randomJoke"
    })
  }
};
</script>

<style scoped>
.chuck-image {
  height: 20%;
  width: 30%;
}
.btn {
  margin-left: 5px;
}
</style>
