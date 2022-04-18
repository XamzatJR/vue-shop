<template>
  <footer class="footer">
    <section class="footer-left">
      <div><img src="../assets/icons/footer-logo.svg" alt="" /></div>
      <div>
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
      <div>
        <button>Вверх</button>
      </div>
    </section>
    <section footer-right>
      <div class="icons">
        <img class="icon" :src="userIcon" alt="" />
        <img class="icon" :src="starIcon" alt="" />
        <img class="icon" :src="heartIcon" alt="" />
        <label class="cart">
          <img class="icon" :src="cartIcon" alt="" />
          <span class="cart__counter">1</span>
        </label>
      </div>
      <div class="navbar-center">
        <a class="a tel" href="tel:+7495-755-6983">+74957556983</a>
        <a class="a email" href="mailto:nonamemag@gmail.com">nonamemag@gmail.com</a>
      </div>
      <div class="socials">
        <div class="socials__item"></div>
        <div class="socials__item"></div>
        <div class="socials__item"></div>
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
  height: 317px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--footer);
  color: #fff;
}
.nav {
  display: flex;
  justify-content: space-between;
  height: 109px;
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
    filter: invert(100%) sepia(29%) saturate(0%) hue-rotate(221deg) brightness(107%) contrast(101%);
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
</style>
