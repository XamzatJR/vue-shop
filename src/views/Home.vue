<template>
  <div class="container">
    <Carousel />
    <section class="product-categories">
      <div class="product-categories-birthday">
        <img src="../assets/img/for-birthdays.png" alt="" />
        <h3>На дни рождения</h3>
      </div>
      <div class="product-categories-right">
        <div class="product-categories-right__top">
          <div class="product-categories-right__top—kids">
            <h3>Детям</h3>
            <img width="275" height="170" src="../assets/img/for-kids.png" alt="" />
          </div>
          <div class="product-categories-right__top—wedding">
            <h3>На свадьбу</h3>
            <img src="../assets/img/to-wadding.png" alt="" />
          </div>
        </div>
        <div class="product-categories-right__bottom">
          <div class="product-categories-right__bottom—christmas">
            <h3>На Новый Год</h3>
            <img src="../assets/img/for-christmas.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="popular-products">
      <h2 class="title">Популярные товары</h2>
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
        <article class="article">
          <img class="article__img" src="../assets/img/article-1.jpg" alt="" />
          <div class="article-content">
            <h4 class="article__title">Название статьиНазвание статьи</h4>
            <p class="article__description">
              А ещё ключевые особенности структуры проекта формируют глобальную экономическую сеть и
              при этом - рассмотрены исключительно ...
            </p>
            <Btn class="btn-view"
              >Посмотреть
              <svg
                width="27"
                height="8"
                viewBox="0 0 27 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z"
                  fill="#FF4D4D"
                />
              </svg>
            </Btn>
          </div>
        </article>
        <article class="article">
          <img class="article__img" src="../assets/img/article-1.jpg" alt="" />
          <div class="article-content">
            <h4 class="article__title">Название статьиНазвание статьи</h4>
            <p class="article__description">
              А ещё ключевые особенности структуры проекта формируют глобальную экономическую сеть и
              при этом - рассмотрены исключительно ...
            </p>
            <Btn class="btn-view"
              >Посмотреть
              <svg
                width="27"
                height="8"
                viewBox="0 0 27 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z"
                  fill="#FF4D4D"
                />
              </svg>
            </Btn>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Card from '@/components/Card.vue';
import Btn from '../components/Btn.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
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
      &-kids,
      &-wedding {
        box-shadow: 6px 11px 36px rgba(0, 0, 0, 0.04);
        border-radius: 36px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background: #ede9ff;
        width: 333px;
        height: 264px;
      }
      &-wedding {
        background: #d6fff7;
      }
    }
  }
  &__bottom-christmas {
    box-shadow: 6px 11px 36px rgba(0, 0, 0, 0.04);
    border-radius: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #ffecec;
    flex-direction: row;
    width: 718px;
    height: 260px;
  }
  &-birthday {
    box-shadow: 6px 11px 36px rgba(0, 0, 0, 0.04);
    border-radius: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #fff4e4;
    width: 592px;
    height: 587px;
    font-size: 45px;
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
.articles {
  margin: 140px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-top {
    display: flex;
    justify-content: space-between;
    width: 87%;
    align-items: center;
  }
  &-bottom {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    .article {
      width: 652px;
      height: 305px;
      background-color: var(--bgsec-color);
      border-radius: 36px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      &__img {
        width: 203px;
        height: 239px;
        border-radius: 36px;
      }
      &-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 65%;
        width: 47%;
      }
      &__title {
        font-weight: 700;
        font-size: 20px;
        color: var(--title-text-color);
      }
      &__description {
        font-weight: 400;
        font-size: 16px;
        color: var(--tertiary-text-color);
      }
    }
  }
}
</style>
