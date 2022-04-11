<template>
  <Home />
</template>
<script>
import Home from '@/views/Home.vue';
export default {
  components: {
    Home,
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
:root {
  --primary-btn: #535353;
  --secondary-btn: #d1d1d1;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
</style>
