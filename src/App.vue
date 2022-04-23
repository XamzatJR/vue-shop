<template>
  <Header />
  <!-- <Home /> -->
  <Cart />
  <Footer />
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

// import Home from '@/views/Home.vue';
import Cart from '@/views/Cart.vue';
export default {
  components: {
    // Home,
    Cart,
    Header,
    Footer,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
:root {
  --primary-btn: #535353;
  --secondary-btn: #ffa927;
  --tertiary-btn: #d1d1d1;
  --green-btn: #16c1a1;
  --red-btn: #ff4d4d;
  --purple-btn: #821bf0;
  --blue-btn: #4f28ea;
  --pink-btn: #e127ff;

  --bg-color: #ebe9ff;
  --bgsec-color: #fff4e4;
  --fire-color: #ffa927;
  --price-color: #535353;
  --title-text-color: #535353;
  --tertiary-text-color: #ababab;
  --header-text-color: #6c6c6c;
  --p-text-color: #848484;

  --footer: #413e70;
  --rating: #ffa927;
  --rating-disabled: rgba(255, 169, 39, 0.4);
  --image-color: #e9e9e9;
}
*,
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
