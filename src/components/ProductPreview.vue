<template>
  <div class="preview">
    <div class="product">
      <Carousel>
        <img src="../assets/img/cart-img.png" alt="" />
      </Carousel>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue';
export default {
  components: { Carousel },
};
</script>

<style lang="scss" scoped>
.preview {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(117, 117, 117, 0.6);
}
.product {
  width: 1159px;
  height: 701px;
  background: #ffffff;
  border-radius: 36px;
}
</style>
