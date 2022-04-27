<template>
  <div class="cart">
    <!-- Container width 1383px -->
    <h1 class="cart__title">Корзина</h1>
    <div class="cart-info">
      <div class="cart-info__product-name">Название товара</div>
      <div class="cart-info__number">Количество</div>
      <div class="cart-info__price">Цена</div>
    </div>
    <ul class="cart-list">
      <div class="cart-list__item">
        <img class="cart-list__item__img" src="../assets/img/cart-img.png" alt="" />
        <div class="cart-list__item-info">
          <h4 class="cart-list__item-info__name">Набор наклеек-тату переводных PrioritY...</h4>
          <div class="cart-list__item-info__code">Код товара: 2398643Р</div>
        </div>
        <div class="cart-list__item-count">
          <button class="cart-list__item-count-minus">-</button>
          <span class="cart-list__item-count-counter">1</span>
          <button class="cart-list__item-count-plus">+</button>
        </div>
        <strong class="cart-list__item-price">2500 р.</strong>
        <button class="cart-list__item-remove"></button>
      </div>
      <div class="cart-list__item">
        <img class="cart-list__item__img" src="../assets/img/cart-img.png" alt="" />
        <div class="cart-list__item-info">
          <h4 class="cart-list__item-info__name">
            Кружка PrioritY "Paw Patrol / Щенячий патруль"...
          </h4>
          <div class="cart-list__item-info__code">Код товара: 2398643Р</div>
        </div>
        <div class="cart-list__item-count">
          <button class="cart-list__item-count-minus">-</button>
          <span class="cart-list__item-count-counter">2</span>
          <button class="cart-list__item-count-plus">+</button>
        </div>
        <strong class="cart-list__item-price">5000 р.</strong>
        <button class="cart-list__item-remove"></button>
      </div>
    </ul>
    <div class="cart-total">
      <div class="cart-total__title">Окончательная стоимость:</div>
      <strong class="cart-total__price">5000 р.</strong>
    </div>
    <div class="cart-next">
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

<style lang="scss" scoped>
.cart {
  height: 70vh;
  padding: 0 109px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 140px;
  &__title {
    font-weight: 500;
    font-size: 40px;
    color: #000;
  }
  &-info {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f3f3f3;
    font-weight: 700;
    font-size: 22px;
    color: var(--tertiary-text-color);
    padding-bottom: 14px;
    &__product-name {
      flex-basis: 50%;
    }
    &__number {
      flex-basis: 30%;
    }
    &__price {
      flex-basis: 20%;
    }
  }
  &-list {
    display: flex;
    flex-direction: column;
    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f3f3f3;
      &__img {
        max-width: 120px;
        max-height: 150px;
      }
      &-info {
        flex-basis: 22%;
        &__name {
          font-weight: 700;
          font-size: 19px;
          color: var(--title-text-color);
        }
        &__code {
          color: var(--tertiary-text-color);
          margin-top: 9px;
        }
      }
      &-count {
        flex-basis: 18%;
        display: flex;
        align-items: center;
        &-plus,
        &-minus {
          cursor: pointer;
          width: 25px;
          height: 25px;
          color: #fff;
          background-color: var(--rating);
          border: none;
          border-radius: 50%;
        }
        &-counter {
          margin: 0 14px;
          font-size: 24px;
          color: #535353;
        }
      }
      &-price {
        font-weight: 700;
        font-size: 23px;
        color: var(--footer);
      }
      &-remove {
        position: relative;
        border: none;
        width: 48px;
        height: 48px;
        border-radius: 36px;
        background-color: #f5f3ff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &::before,
        &::after {
          position: absolute;
          content: '';
          width: 55%;
          height: 2px;
          background-color: #947eec;
        }
        &::before {
          transform: rotate(45deg);
        }
        &::after {
          transform: rotate(-45deg);
        }
      }
    }
  }
  &-total,
  &-next {
    align-self: flex-end;
    display: flex;
    align-items: center;
    width: 35%;
    justify-content: space-between;
    &__title {
      font-weight: 500;
      font-size: 22px;
      color: var(--tertiary-text-color);
    }
    &__price {
      font-weight: 700;
      font-size: 35px;
      color: var(--red-btn);
    }
  }
}
</style>
