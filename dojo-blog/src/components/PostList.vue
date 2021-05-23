<template>
  <div class="post-list">
    <section v-for="post in posts" :key="post.id">
      <single-post :post="post" />
    </section>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
    onMounted(() => {
      console.log("Mounted");
    });
    onUnmounted(() => {
      console.log("Unmounted");
    });
    onUpdated(() => {
      console.log("Updated!");
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>