<template>
  <button class="btn" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'vue-button',
};
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  background: none;
  &-view {
    border-bottom: 1px solid #ff4d4d;
    color: var(--red-btn);
    width: fit-content;
    &__green {
      height: fit-content;
      color: var(--green-btn);
      border-bottom: 1px solid #16c1a1;
    }
  }
  &__green,
  &__purple,
  &__blue,
  &__red {
    height: 3.4375rem;
    width: 16.5625rem;
    border-radius: 193px;
  }
  &__green {
    background-color: var(--green-btn);
    box-shadow: 3px 5px 14px rgba(22, 193, 161, 0.25);
  }
  &__purple {
    background-color: var(--purple-btn);
    box-shadow: 3px 5px 15px rgba(130, 27, 240, 0.25);
  }
  &__blue {
    background-color: var(--blue-btn);
    box-shadow: 3px 5px 15px rgba(27, 59, 240, 0.25);
  }
  &__red {
    width: 13.25rem;
    background-color: var(--red-btn);
    box-shadow: 3px 5px 14px rgba(193, 22, 22, 0.25);
  }
}
</style>
