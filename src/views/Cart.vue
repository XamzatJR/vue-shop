<template>
  <div>
    <!-- Container width 1383px -->
    <h1>Корзина</h1>
    <div>
      <div>Название товара</div>
      <div>Количество</div>
      <div>Цена</div>
    </div>
    <ul class="cart-list">
      <div class="cart-list__item">
        <img src="../assets/img/cart-img.png" alt="" />
        <div class="cart-list__item-info">
          <h4>Набор наклеек-тату переводных PrioritY...</h4>
          <div class="cart-list__item-info__code">Код товара: 2398643Р</div>
        </div>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <strong>2500 р.</strong>
        <button></button>
      </div>
    </ul>
    <div>
      <div>Окончательная стоимость:</div>
      <strong>5000 р.</strong>
    </div>
    <div>
      <Btn class="btn-view__green">Продолжить покупки</Btn>
      <Btn class="btn__purple">Перейти к оформлению</Btn>
    </div>
  </div>
</template>

<script>
import Btn from '../components/Btn.vue';
export default {
  components: {
    Btn,
  },
};
</script>

<style lang="scss" scoped></style>
