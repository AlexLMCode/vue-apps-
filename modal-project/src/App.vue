<template>
  <div class="center">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>

    <input type="text" ref="name" />
    <button @click="handleClick">Click me!</button>
    <button @click="toggleModal">Show modal</button>
    <button @click="toggleModalTwo">Show Modal 2</button>
  </div>
  <teleport to=".modals" v-if="showModal">
    <Modal @close="toggleModal">
      <h1>Holi caryoli</h1>
      <p>Este es parte del slot</p>
      <template v-slot:links>
        <a href="#">Holis</a>
        <a href="">Peditos</a>
      </template>
    </Modal>
  </teleport>
  <teleport to=".modals" v-if="showModalSecond">
    <Modal @close="toggleModalTwo">
      <h1>Holas</h1>
    </Modal>
  </teleport>
</template>

<script>
import Modal from "./components/Modal";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My first Vue app",
      subtitle: "Aleti",
      cosas: ["papas", "cola"],
      showModal: false,
      showModalSecond: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.toggle("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      console.log("Holis");
      this.showModalSecond = !this.showModalSecond;
    },
  },
};
</script>

<style >
body {
  font-family: Arial, Helvetica, sans-serif;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h1 {
  color: red;
}
</style>
