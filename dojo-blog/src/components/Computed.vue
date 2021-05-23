<template>
  <div>
    <h1>Computed:</h1>
    <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
    <button @click="handleClick">Stop wwatching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
export default {
  setup() {
    const search = ref("");
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "peach",
      "bowser",
      "koopa",
      "toad",
    ]);

    const stopWatch = watch(search, () => {
      console.log("Watch function ran");
    });

    const stopEffect = watchEffect(() => {
      console.log("Watch effect function ran", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    return { names, search, matchingNames, handleClick };
  },
};
</script>

<style lang="scss" scoped>
</style>