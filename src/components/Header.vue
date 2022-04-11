<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-left">
        <a class="navbar-left__a" href="">Доставка</a>
        <a class="navbar-left__a" href="">Оплата</a>
        <a class="navbar-left__a" href="">О нас</a>
        <a class="navbar-left__a" href="">Бренды</a>
        <a class="navbar-left__a" href="">Гарантии и возврат</a>
        <a class="navbar-left__a" href="">Контакты</a>
        <a class="navbar-left__a" href="">Помощь</a>
      </div>
      <div class="navbar-center">
        <a class="navbar-center__a tel" href="tel:+7495-755-6983">+74957556983</a>
        <a class="navbar-center__a email" href="mailto:nonamemag@gmail.com">nonamemag@gmail.com</a>
      </div>
      <div class="navbar-right">
        <a class="navbar-right__a" href="">Войти / </a>
        <a class="navbar-right__a" href="">Зарегистрироваться</a>
      </div>
    </nav>
    <div class="menu">
      <div class="menu__logo">
        <img src="@/assets/icons/logo.svg" alt="логотип сайта gift.ru" />
      </div>
      <button class="catalog">Каталог</button>
      <nav>
        <a href="">Конструктор подарка</a>
        <a href="">Статьи</a>
      </nav>
      <input type="search" name="" id="" />
      <div class="icons">
        <img :src="userIcon" alt="" />
        <img :src="starIcon" alt="" />
        <img :src="heartIcon" alt="" />
        <img :src="cartIcon" alt="" />
      </div>
    </div>
  </header>
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
.navbar {
  height: 45px;
  background: #f4f1ff;
  display: flex;
  padding: 0 109px;
  align-items: center;
  &-left {
    width: 706px;
    display: flex;
    justify-content: space-between;
  }
  &-center {
    margin: 0 35px 0 52px;
    width: 362px;
    & .tel {
      margin-right: 19px;
    }
    & .tel::before,
    & .email::before {
      margin-right: 6px;
      vertical-align: middle;
      display: inline-block;
      width: 20px;
      height: 20px;
    }
    & .tel::before {
      content: url('../assets/icons/telephone.svg');
    }
    & .email::before {
      content: url('../assets/icons/email.svg');
    }
  }
  &-right {
    width: 228px;
  }
}
</style>
