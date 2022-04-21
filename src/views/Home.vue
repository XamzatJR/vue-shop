<template>
  <Header />
  <div class="container">
    <Carousel />
    <section class="product-categories">
      <div class="birthday">
        <img src="../assets/img/for-birthdays.png" alt="" />
        <h3>На дни рождения</h3>
      </div>
      <div class="product-categories-right">
        <div class="product-categories-right__top">
          <div class="kids">
            <h3>Детям</h3>
            <img width="275" height="170" src="../assets/img/for-kids.png" alt="" />
          </div>
          <div class="wedding">
            <h3>На свадьбу</h3>
            <img src="../assets/img/to-wadding.png" alt="" />
          </div>
        </div>
        <div class="product-categories-right__bottom">
          <div class="christmas">
            <h3>На Новый Год</h3>
            <img src="../assets/img/for-christmas.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="popular-products">
      <h2 class="popular-products__title">Популярные товары</h2>
      <Carousel>
        <div class="popular-products__cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Carousel>
    </section>
    <article class="banner">
      <div class="banner-left">
        <h2 class="banner__title">
          Не знаешь что подарить? – ответь <br />
          на 7 вопросов и мы дадим решение
        </h2>
        <Btn class="btn__red">Пройти опрос</Btn>
      </div>
      <img src="../assets/img/banner-img.png" alt="" />
    </article>
    <section class="promotion">
      <h2 class="title">Акция</h2>
      <Carousel>
        <div class="promotion__cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Carousel>
    </section>
    <section class="articles">
      <div class="articles-top">
        <h2 class="title">Статьи</h2>
        <Btn class="btn-view__green">Посмотреть все</Btn>
      </div>
      <div class="articles-bottom">
        <!-- Article here -->
      </div>
    </section>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Carousel from '@/components/Carousel.vue';
import Footer from '@/components/Footer.vue';
import Card from '@/components/Card.vue';
import Btn from '../components/Btn.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Carousel,
    Footer,
    Card,
    Btn,
  },
};
</script>
<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  padding: 0 47px;
}
.title {
  font-weight: 500;
  font-size: 40px;
  color: var(--title-text-color);
  margin-bottom: 43px;
  width: 87%;
}
.product-categories {
  padding: 0 62px;
  margin: 185px 0;
  width: 100%;
  height: 587px;
  display: flex;
  justify-content: space-between;
  color: var(--title-text-color);
  font-weight: 500;
  &-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 35px;
    &__top {
      display: flex;
      justify-content: space-between;
    }
  }

  & .birthday,
  & .kids,
  & .wedding,
  & .christmas {
    box-shadow: 6px 11px 36px rgba(0, 0, 0, 0.04);
    border-radius: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  & .birthday {
    background: #fff4e4;
    width: 592px;
    height: 587px;
    font-size: 45px;
  }
  & .kids {
    background: #ede9ff;
    width: 333px;
    height: 264px;
  }
  & .wedding {
    background: #d6fff7;
    width: 333px;
    height: 264px;
  }
  & .christmas {
    background: #ffecec;
    flex-direction: row;
    width: 718px;
    height: 260px;
  }
}
.popular-products {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__cards {
    display: flex;
  }
}
.banner {
  margin: 140px 62px;
  height: 302px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffc979;
  border-radius: 36px;
  &-left {
    height: 57%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__title {
    font-weight: 500;
    font-size: 40px;
    color: #282828;
  }
}
.promotion {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__cards {
    display: flex;
  }
}
</style>
