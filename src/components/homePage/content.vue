<template>
  <main class="bili_layout">
    <section class="bill_grid">
      <div class="carousel_container">
        <picture>
          <img :src="require('@/assets/png/carousel/test1.png').default">
        </picture>
        <div class="carousel_footer">
          <div class="carousel_mask"></div>
        </div>
      </div>
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
    @include grid_layout(repeat(5,1fr),repeat(2,1fr),20px 12px,row);
    width: 100%;

    .carousel_container{
      position: relative;
      @include wh(100%,100%);
      grid-column: 1/3;
      grid-row: 1/3;
      flex-shrink: 0;
      z-index: 0;

      picture{
        z-index: 1;
        position: relative;
      }

      img{
        width: 100%;
        z-index: 1;
      }

      .carousel_footer{
        .carousel_mask{
          position: absolute;
          height: 810px;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          user-select: none;
          pointer-events: none;
          background-image: linear-gradient(0,#2f3238 11%,transparent 20%);
          background-color: rgb(72, 62, 91);
        }
      }
    }
  }
}
</style>