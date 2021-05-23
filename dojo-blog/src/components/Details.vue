<template>
  <div>
    <h1>Details:</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";

export default {
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);

    load();

    return { post, error };
  },
};
</script>

<style lang="scss" scoped>
</style>