<template>
  <div class="carousel">
    <button class="carousel__prev">
      <svg
        width="10"
        height="19"
        viewBox="0 0 10 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.5 1L1 9.5L9.5 18" stroke="#4F28EA" />
      </svg>
    </button>
    <section class="carousel__main">
      <div class="carousel__viewport">
        <div class="carousel__slide-left">
          <h2 class="carousel__title">Безусловно, теория требует одобрения</h2>
          <p class="carousel__p">
            Господа, высокотехнологичная концепция общественного уклада не даёт нам иного выбора,
            кроме определения форм
          </p>
          <button class="carousel__btn">Узнать больше</button>
        </div>
        <div class="carousel__slide-right"></div>
      </div>
      <aside class="carousel__navigation">
        <ul class="carousel__navigation-list">
          <li class="carousel__navigation-item_active"></li>
          <li class="carousel__navigation-item"></li>
          <li class="carousel__navigation-item"></li>
          <li class="carousel__navigation-item"></li>
          <li class="carousel__navigation-item"></li>
          <li class="carousel__navigation-item"></li>
        </ul>
      </aside>
    </section>
    <button class="carousel__next">
      <svg
        width="10"
        height="19"
        viewBox="0 0 10 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.5 18L9 9.5L0.500001 0.999999" stroke="#4F28EA" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 522px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__viewport {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  &__slide-left {
    width: 40%;
    height: 70%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  &__slide-right {
    width: 47%;
    height: 100%;
    background-image: url('../assets/img/main.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
  &__title {
    font-weight: 500;
    font-size: 52px;
    color: var(--title-text-color);
  }
  &__p {
    width: 372px;
    font-weight: 400;
    font-size: 16px;
    color: var(--p-text-color);
  }
  &__btn {
    width: 226px;
    height: 55px;
    border-radius: 193px;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    border: none;
    cursor: pointer;
    background-color: var(--red-btn);
  }
  &__navigation {
    width: 148px;
    height: 20%;
    &-list {
      list-style: none;
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: space-around;
      align-items: flex-end;
    }
    &-item {
      width: 13px;
      height: 12px;
      border-radius: 50%;
      background-color: #ebe9ff;
      cursor: pointer;
      &_active {
        width: 13px;
        height: 12px;
        border-radius: 50%;
        background-color: #603bf7;
      }
    }
  }
  &__prev,
  &__next {
    width: 44px;
    height: 44px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0ecff;
    cursor: pointer;
    border-radius: 50%;
  }
}
</style>
