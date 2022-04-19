<template>
  <footer class="footer">
    <section class="footer-left">
      <div><img src="../assets/icons/footer-logo.svg" alt="" /></div>
      <div class="payment">
        <div class="cards">
          <div class="cards__card visa"><img src="../assets/icons/visa.png" alt="" /></div>
          <div class="cards__card"><img src="../assets/icons/mastercard.png" alt="" /></div>
        </div>
        <div>©Все права защищены</div>
      </div>
    </section>
    <section class="footer-center">
      <nav class="nav">
        <ul class="nav-list">
          <li><a class="nav-list__item" href="#">Конструктор подарка</a></li>
          <li><a class="nav-list__item" href="#">Вопрос - ответ</a></li>
          <li><a class="nav-list__item" href="#">Статьи</a></li>
        </ul>
        <ul class="nav-list">
          <li><a class="nav-list__item" href="#">Доставка</a></li>
          <li><a class="nav-list__item" href="#">Оплата</a></li>
          <li><a class="nav-list__item" href="#">О нас</a></li>
          <li><a class="nav-list__item" href="#">Бренды</a></li>
        </ul>
        <ul class="nav-list">
          <li><a class="nav-list__item" href="#">Гарантии и возврат</a></li>
          <li><a class="nav-list__item" href="#">Контакты</a></li>
          <li><a class="nav-list__item" href="#">Помощь</a></li>
        </ul>
      </nav>
      <div class="footer-center__bottom">
        <div class="up">
          <img class="up__arrow" src="../assets/icons/Arrow-icon.svg" alt="" />
          <button class="up__btn">Вверх</button>
        </div>
      </div>
    </section>
    <section class="footer-right">
      <div class="icons">
        <img class="icon" :src="userIcon" alt="" />
        <img class="icon" :src="starIcon" alt="" />
        <img class="icon" :src="heartIcon" alt="" />
        <label class="cart">
          <img class="icon" :src="cartIcon" alt="" />
          <span class="cart__counter">1</span>
        </label>
      </div>
      <div class="contact-details">
        <a class="tel" href="tel:+7495-755-6983">+74957556983</a>
        <a class="email" href="mailto:nonamemag@gmail.com">nonamemag@gmail.com</a>
      </div>
    </section>
  </footer>
</template>

<script>
import userIcon from '@/assets/icons/user-icon.svg';
import starIcon from '@/assets/icons/star-icon.svg';
import heartIcon from '@/assets/icons/heart-icon.svg';
import cartIcon from '@/assets/icons/cart-icon.svg';
export default {
  setup() {
    return {
      userIcon,
      starIcon,
      heartIcon,
      cartIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 0 109px;
  height: 36vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--footer);
  color: #fff;
  &-left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  &-center {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 57%;
  }
  &-right {
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
.nav {
  display: flex;
  justify-content: space-between;
  height: 109px;
  width: 616px;
  &-list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__item {
      color: #fff;
    }
  }
}

.up {
  display: flex;
  flex-direction: column;
  &__arrow {
    height: 26px;
    animation: arrow 1.3s infinite alternate ease-out;
  }
  &__btn {
    color: #fff;
    border: none;
    background-color: inherit;
    position: relative;
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    &::after {
      content: '';
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -3px;
      height: 2px;
      background-color: #fff;
      transform-origin: bottom right;
      transition: transform 0.5s ease-out;
    }
  }
}
@keyframes arrow {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
}
.payment {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20%;
}
.cards {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &__card {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .visa {
    width: 56px;
    height: 32px;
    background-color: #b6b3e4;
    border-radius: 5px;
    margin-right: 15px;
  }
}

.icons {
  width: 220px;
  display: flex;
  justify-content: space-between;
  margin-right: 17px;
  & .icon {
    cursor: pointer;
    filter: brightness(0) invert(1);
  }
  & .cart {
    position: relative;

    &__counter {
      position: absolute;
      top: -15px;
      right: -15px;
      color: #848484;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 17px;
      height: 17px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
}
.contact-details {
  display: flex;
  flex-direction: column;
  & .tel {
    margin-bottom: 0.75rem;
  }
  & .tel,
  .email {
    color: #fff;
  }
  & .tel::before,
  & .email::before {
    filter: brightness(0) invert(1);
    margin-right: 6px;
    vertical-align: middle;
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  & .tel::before {
    content: url('../assets/icons/telephone.svg');
    color: #fff;
  }
  & .email::before {
    color: #fff;
    content: url('../assets/icons/email.svg');
  }
}
</style>
