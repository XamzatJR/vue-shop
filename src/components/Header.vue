<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-left">
        <a class="a" href="#">Доставка</a>
        <a class="a" href="#">Оплата</a>
        <a class="a" href="#">О нас</a>
        <a class="a" href="#">Бренды</a>
        <a class="a" href="#">Гарантии и возврат</a>
        <a class="a" href="#">Контакты</a>
        <a class="a" href="#">Помощь</a>
      </div>
      <div class="navbar-center">
        <a class="a tel" href="tel:+7495-755-6983">+74957556983</a>
        <a class="a email" href="mailto:nonamemag@gmail.com">nonamemag@gmail.com</a>
      </div>
      <div class="navbar-right">
        <a class="a" href="#">Войти / </a>
        <a class="a" href="#">Зарегистрироваться</a>
      </div>
    </nav>
    <div class="menu">
      <a href="#" class="menu__logo">
        <img src="@/assets/icons/logo.svg" alt="логотип сайта gift.ru" />
      </a>
      <button class="catalog">
        <img :src="catalogIcon" alt="" />
        Каталог
      </button>
      <nav class="nav">
        <a class="a" href="#">Вопрос-ответ</a>
        <a class="a" href="#">Статьи</a>
      </nav>
      <label class="search">
        <input class="search__input" placeholder="Поиск" type="text" name="search" />
        <button class="search__btn"></button>
      </label>
      <div class="icons">
        <img class="icon" :src="userIcon" alt="" />
        <img class="icon" :src="starIcon" alt="" />
        <img class="icon" :src="heartIcon" alt="" />
        <label class="cart">
          <img class="icon" :src="cartIcon" alt="" />
          <span class="cart__counter">1</span>
        </label>
      </div>
    </div>
  </header>
</template>

<script>
import userIcon from '@/assets/icons/user-icon.svg';
import starIcon from '@/assets/icons/star-icon.svg';
import heartIcon from '@/assets/icons/heart-icon.svg';
import cartIcon from '@/assets/icons/cart-icon.svg';
import catalogIcon from '@/assets/icons/catalog-icon.svg';
export default {
  setup() {
    return {
      userIcon,
      starIcon,
      heartIcon,
      cartIcon,
      catalogIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar,
.menu {
  padding: 0 109px;
}
.navbar {
  height: 45px;
  background: #f4f1ff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-left {
    width: 706px;
    display: flex;
    justify-content: space-between;
  }
  &-center {
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
.a {
  color: var(--header-text-color);
  font-style: normal;
  font-weight: 400;
}
.menu {
  height: 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__logo {
    width: 139px;
    height: 51px;
  }
  & .nav {
    width: 210px;
    display: flex;
    justify-content: space-between;
    & .a {
      font-size: 18px;
    }
  }

  & .search {
    position: relative;
    width: 255px;
    &__input {
      width: 220px;
      border: none;
      border-bottom: 1px solid #e9e9e9;
      font-size: 16px;
      outline: none;
      &::placeholder {
        color: #dedede;
      }
      &:focus {
        border-bottom: 1px solid #151313;
      }
    }
    &__btn {
      position: absolute;
      bottom: -3px;
      right: 8px;
      width: 40px;
      height: 37px;
      border: none;
      background: var(--secondary-btn);
      box-shadow: 0px 4px 10px rgba(255, 169, 39, 0.15);
      border-radius: 18.5px;
      &::after {
        width: 18px;
        height: 18px;
        content: url('../assets/icons/loupe-icon.svg');
      }
    }
  }
  & .icons {
    width: 220px;
    display: flex;
    justify-content: space-between;
    margin-right: 17px;
    & .icon {
      cursor: pointer;
    }
    & .cart {
      position: relative;

      &__counter {
        position: absolute;
        top: -15px;
        right: -15px;
        color: #fff;
        font-size: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 17px;
        height: 17px;
        background-color: var(--purple-btn);
        border-radius: 50%;
      }
    }
  }
}
.catalog {
  background-color: var(--rating);
  border-radius: 77px;
  width: 169px;
  height: 49px;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
</style>
