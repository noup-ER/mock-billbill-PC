<template>
  <div class="homePage">
    <navigate></navigate>
    <div class="banner" @mouseenter="handle_banner_mouseenter" @mousemove="handle_banner_mousemove" @mouseleave="handle_banner_mouseleave">
      <div class="videoContainer">
        <video class="bannerVideo banner1_video" loop autoplay="autoplay" muted :style="{'transform':`translateX(${banner1_translateX})`}">
          <source :src="require('@/assets/video/banner1.mp4').default">
        </video>
      </div>
      <div class="videoContainer">
        <video class="bannerVideo banner2_video" loop autoplay="autoplay" muted :style="{'opacity':banner2_opacity,'transform':`translateX(${banner2_translateX})`}">
          <source :src="require('@/assets/video/banner2.mp4').default">
        </video>
      </div>
    </div>
    <myHeader></myHeader>
    <content></content>
    <div style="width:100%;height: 1000px;background-color: darkgrey"></div>
  </div>
</template>

<script>
import navigate from "@/components/homePage/navigate";
import myHeader from "@/components/homePage/header";
import content from "@/components/homePage/content";

import {ref,reactive,toRefs,toRef} from "vue";
export default {
  name: "homePage",
  components:{
    navigate,
    myHeader,
    content
  },
  setup(){
    let startX = null,unitMove = 30 / document.body.offsetWidth;
    const state = reactive({
      banner1_translateX:0,
      banner2_opacity:1,
      banner2_translateX:0,
    })

    const handle_banner_mouseenter = (e)=>{
      startX = e.offsetX;
    }
    const handle_banner_mousemove = (e)=>{
      if(e.offsetX <= startX){
        state.banner2_opacity = 1 - (startX - e.offsetX >= 360?1:(startX - e.offsetX)/360);
        state.banner1_translateX = (startX - e.offsetX)*unitMove + "px";
        state.banner2_translateX = - state.banner1_translateX + "px";
      }else{
        state.banner2_opacity = 1;
        state.banner2_translateX = -(e.offsetX - startX)*unitMove + "px";
        state.banner1_translateX = - state.banner2_translateX + "px";
      }
    }

    const handle_banner_mouseleave = (e)=>{
      document.querySelectorAll(".bannerVideo").forEach(obj=>{
        obj.style.transition = "all .3s"
      })
      state.banner2_opacity = 1;
      state.banner1_translateX = 0;
      state.banner2_translateX = 0;
      setTimeout(()=>{
        document.querySelectorAll(".bannerVideo").forEach(obj=>{
          obj.style.transition = "none"
        })
      },300);
    }

    return {
      handle_banner_mousemove,
      handle_banner_mouseenter,
      handle_banner_mouseleave,
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.homePage{
  .banner{
    position: relative;
    @include wh(100%,155px);
    z-index: 0;
    cursor: pointer;

    .videoContainer{
      position: absolute;
      @include trbl(0,0,0,0);
      @include flex_layout(row,nowrap,center,center);
      overflow: hidden;

      .bannerVideo{
        @include wh(auto,155px);
      }
    }

  }
}
</style>