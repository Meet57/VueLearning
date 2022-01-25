<template>
  <div>
    <h1>List of ninjas</h1>
    <ul>
      <li v-for="(item, index) in ninjas" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Ninjas",
  data() {
    return {
      ninjas: ["Meet", "Parth", "Rishi"],
    };
  },
};
</script>

<style scoped>
    h1{
        color: green;
    }
</style>
