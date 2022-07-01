<template>
  <div class="header">
    <div class="channelIcons">
<!--      动态频道-->
      <div class="dynamicContainer">
        <div class="dynamicIcon">
          <svg width="22" height="23">
            <use href="#dynamicIcon"></use>
          </svg>
        </div>
        <span>动态</span>
      </div>
      <div class="hotContainer">
        <div class="hotIcon">
          <svg width="22" height="22">
            <use href="#hotIcon"></use>
          </svg>
        </div>
        <span>热门</span>
      </div>
      <div class="channelContainer">
        <div class="channelIcon">
          <svg width="22" height="22">
            <use href="#channelIcon"></use>
          </svg>
        </div>
        <span>频道</span>
      </div>
    </div>
    <div class="rightContainer">
      <div class="channelItems">
        <span v-for="item in channelList">
          {{item}}
        </span>
      </div>
      <div class="channelLinks">
        <div class="linkItem">
          <svg class="linkIcon" width="200" height="200">
            <use href="#specialColumn"></use>
          </svg>
          <span>专栏</span>
        </div>
        <div class="linkItem">
          <svg class="linkIcon" width="200" height="200">
            <use href="#liveStream"></use>
          </svg>
          <span>直播</span>
        </div>
        <div class="linkItem">
          <svg class="linkIcon" width="200" height="200">
            <use href="#activityIcon"></use>
          </svg>
          <span>活动</span>
        </div>
        <div class="linkItem">
          <svg class="linkIcon" width="200" height="200">
            <use href="#classroomIcon"></use>
          </svg>
          <span>课堂</span>
        </div>
        <div class="linkItem">
          <svg class="linkIcon" width="200" height="200">
            <use href="#communityCenterIcon"></use>
          </svg>
          <span>社区中心</span>
        </div>
        <div class="linkItem">
          <svg class="linkIcon" width="200" height="200">
            <use href="#hotSongListIcon"></use>
          </svg>
          <span>新歌热榜</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  setup(){
    const channelList = ["番剧","电影","国创","电视剧","综艺","纪录片","动画","游戏","鬼畜","音乐","舞蹈","影视","娱乐","知识","科技","咨询","美食","生活","汽车","时尚","运动","更多"];
    return{
      channelList
    }
  }
}
</script>

<style scoped lang="scss">
.header{
  @include wh(100%,110px);
  @include flex_layout(row,nowrap,initial,center);
  padding: 0 64px;
  max-width: 2078px;
  color:$color6;

  .channelIcons{
    margin-right: 8px;
    @include flex_layout(row,nowrap,initial,center);

    .dynamicContainer{
      margin-right: 24px;
      @include flex_layout(column,wrap,center,center);
      cursor: pointer;

      .dynamicIcon{
        @include wh(46px,46px);
        background-color: $color7;
        @include flex_layout(row,nowrap,center,center);
        border-radius: 50%;
        color: white;
        margin-bottom: 6px;
        transition: background-color .3s;

        &:hover{
          background-color: $color8;
        }
      }

      span{
        line-height: 20px;
      }
    }

    .hotContainer{
      margin-right: 24px;
      @include flex_layout(column,wrap,center,center);
      cursor: pointer;

      .hotIcon{
        @include wh(46px,46px);
        background-color: $color9;
        @include flex_layout(row,nowrap,center,center);
        border-radius: 50%;
        color: white;
        margin-bottom: 6px;
        transition: background-color .3s;

        &:hover{
          background-color: $color10;
        }
        span{
          line-height: 20px;
        }
      }
    }

    .channelContainer{
      margin-right: 24px;
      @include flex_layout(column,wrap,center,center);
      cursor: pointer;

      .channelIcon{
        @include wh(46px,46px);
        background-color: $color11;
        @include flex_layout(row,nowrap,center,center);
        border-radius: 50%;
        color: white;
        margin-bottom: 6px;
        transition: background-color .3s;

        &:hover{
          background-color: $color12;
        }
        span{
          line-height: 20px;
        }
      }
    }
  }

  .rightContainer{
    @include flex_layout(row,nowrap,space-between,center);
    width: 100%;

    .channelItems{
      width: 100%;
      @include grid_layout(repeat(11,1fr),repeat(2,1fr),10px,column);
      border-right: 1px solid $color1;
      padding-right: 30px;

      span{
        @include wh(100%,26px);
        letter-spacing: 2px;
        background-color: $color13;
        line-height: 26px;
        border-radius: 6px;
        text-align: center;
        cursor: pointer;

        &:hover{
          background-color: $color1;
        }
      }
    }

    .channelLinks{
      width: 240px;
      @include grid_layout(initial,repeat(2,1fr),10px,column);
      color: $color3;
      letter-spacing: 2px;
      flex-shrink: 0;

      .linkItem{
        @include flex_layout(row,nowrap,flex-end,center);

        .linkIcon{
          fill: $color3;
          @include wh(20px,20px);
          margin-right: 4px;
        }
      }
    }
  }


}
</style>