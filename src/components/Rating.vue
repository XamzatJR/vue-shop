<template>
  <div class="rating" total-value="2">
    <span class="rating__star">★</span>
    <span class="rating__star">★</span>
    <span class="rating__star">★</span>
    <span class="rating__star">★</span>
    <span class="rating__star">★</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.rating {
  display: inline-flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 156px;
  height: 28.04px;
  &__star {
    font-size: 33px;
    color: var(--rating-disabled);
  }
}
.rating[total-value='5'] .rating__star:nth-child(n + 1),
.rating[total-value='4'] .rating__star:nth-child(n + 2),
.rating[total-value='3'] .rating__star:nth-child(n + 3),
.rating[total-value='2'] .rating__star:nth-child(n + 4),
.rating[total-value='1'] .rating__star:nth-child(n + 5) {
  color: var(--rating);
}
</style>
