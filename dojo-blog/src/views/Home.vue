<template>
  <!-- <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is: {{ name }} and my age is: {{ age }}</p>
    <button @click="handleClick">Click!</button>
    <button @click="age++">+1 to age</button>
    <button @click="changeMario">Change mario</button>
    <h2>Reactive:</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <input type="text" v-model="name" />
  </div> -->
  <!-- <computed /> -->
  <properties />
</template>

<script>
import { ref, reactive } from "vue";
import Computed from "../components/Computed.vue";
import Properties from "../components/Properties.vue";

export default {
  components: { Computed, Properties },
  name: "Home",
  setup() {
    console.log("SETUP");
    const ninjaTwo = reactive({ name: "Mario", age: 35 });

    const p = ref(null);

    let name = ref("Alex");
    let age = ref(21);

    const handleClick = () => {
      console.log("you clicked me!");
      console.log(p);
      name.value = "Pedro";
    };

    const changeMario = () => {
      ninjaTwo.name = "Luigi";
    };

    return {
      name,
      age,
      handleClick,
      p,
      ninjaTwo,
      changeMario,
    };
  },
};
</script>
