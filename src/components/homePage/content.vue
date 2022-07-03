<template>
  <main class="bili_layout">
    <section class="bill_grid">
      <div class="box1"></div>
    </section>
  </main>
</template>

<script>
export default {
  name: "content"
}
</script>

<style scoped lang="scss">
.bili_layout{
  position: relative;
  padding: 0 64px;
  width: 100%;
  margin: 0 auto;
  .bill_grid{
    @include grid_layout(repeat(5,1fr),repeat(2,1fr),20px 10px,row);
    height: 600px;
    width: 100%;

    .box1{
      grid-column: 1/3;
      grid-row: 1/3;
      background-color: red;
    }
  }
}
</style>