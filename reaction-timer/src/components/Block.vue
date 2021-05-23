<template>
  <div class="container" v-if="showBlock" @click="stopTimer">
    <h1>Hello There!</h1>
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      //On component click we stop the ttimer
      clearInterval(this.timer);
      console.log("This is your reaction time:", this.reactionTime);
      this.$emit("end", this.reactionTime);
    },
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      //When the component is mounted we start the timer
      this.startTimer();
    }, this.delay);
  },
};
</script>

<style>
.container {
  background-color: #0faf87;
  color: white;
  height: 10em;
  width: 20em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1em;
  cursor: pointer;
}
</style>