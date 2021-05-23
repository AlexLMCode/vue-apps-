<template>
  <div>
    <h1>Posts:</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <post-list :posts="posts"></post-list>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from "./PostList.vue";
import getPosts from "../composables/getPosts";
export default {
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>

<style scoped>
</style>