<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play!</button>
  <div class="block">
    <Block v-if="isPlaying" :delay="delay" @end="endGame"></Block>
  </div>
  <results v-if="score != null" :score="score"></results>
</template>

<script>
import Block from "./components/Block";
import Results from "./components/Results.vue";

export default {
  name: "App",
  components: {
    Block,
    Results,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
    };
  },
  methods: {
    start() {
      this.delay = 1500 + Math.random() * 5000;
      this.isPlaying = true;
      this.score = null;
    },
    endGame(reactionTime) {
      console.log("end!", reactionTime);
      this.score = reactionTime;
      this.isPlaying = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.block {
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  background-color: #0faf87;
  border: none;
  height: 3em;
  width: 6em;
  border-radius: 1em;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
