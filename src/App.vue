<template>
  <div>
    <h1>{{ title }}</h1>
    <Ninjas />
  </div>
</template>

<script>
import Ninjas from "./components/Ninjas.vue";
export default {
  components: { Ninjas },
  data() {
    return {
      title: "Ninja App",
    };
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
