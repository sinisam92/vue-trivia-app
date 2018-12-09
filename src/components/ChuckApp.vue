<template>
  <div class="container">
    <div>
      <img class="chuck-image" src="https://pics.me.me/chuck-norri-17239471.png">
      <form @submit.prevent="getNewJoke(category)">
        <input type="text" v-model="category">
        <button type="submit" class="btn btn-primary">Get New Joke</button>
      </form>
      <h2>{{ joke.value }}</h2>
      <a :href="joke.sourceUrl" class="btn btn-info">See source</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      category: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch("getNewJoke");
    });
  },
  methods: {
    ...mapActions(["getNewJoke"])
  },
  computed: {
    ...mapGetters({
      joke: "randomJoke",
      category: "category"
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
