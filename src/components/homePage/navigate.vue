<template>
  <div class="navigate">
    <ul class="leftContainer">
<!--      首页-->
      <li class="l1_item" @mouseenter="l1_wrapper_show = true" @mouseleave="l1_wrapper_show = false">
        <svg class="billbillIcon" width="140" height="64">
          <use href="#billbillIcon"></use>
        </svg>
        <div class="l1_title">
          <span>首页</span>
          <svg width="10" height="10" class="arrow_to_bottom" :class="{'arrow_to_up':l1_wrapper_show}">
            <use href="#arrow_to_bottom"></use>
          </svg>
        </div>
<!--        首页菜单栏-->
        <transition name="li_wrapper_an">
          <div class="l1_wrapper" v-show="l1_wrapper_show">
            <div class="l1_list_container">
              <ul class="l1_list l1_list1">
                <li class="li_item" v-for="item in homePageList1">
                  <svg class="li_item_icon">
                    <use :href="`#homepage_${item.id}`"></use>
                  </svg>
                  <span>{{item.name}}</span>
                </li>
              </ul>
              <ul class="l1_list l1_list2">
                <li class="li_item" v-for="item in homePageList2">
                  <svg class="li_item_icon">
                    <use :href="`#homepage_${item.id}`"></use>
                  </svg>
                  <span>{{item.name}}</span>
                </li>
              </ul>
              <ul class="l1_list l1_list3">
                <li class="li_item" v-for="item in homePageList3">
                  <svg class="li_item_icon">
                    <use :href="`#homepage_${item.id}`"></use>
                  </svg>
                  <span>{{item.name}}</span>
                </li>
              </ul>
              <ul class="l1_list l1_list4">
                <li>你好</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </transition>
      </li>
<!--      番剧-->
      <li class="l2_item">
        <span>番剧</span>
      </li>
<!--      直播-->
      <li class="l3_item" @mouseenter="l3_wrapper_show = true" @mouseleave="l3_wrapper_show = false">
        <span>直播</span>
        <transition name="li_wrapper_an">
          <div class="l3_wrapper" v-show="l3_wrapper_show">
            <div class="l3_container">
              <div class="liveLeft">
                <div class="liveLeftTitle">热门直播：</div>
                <div class="liveLeftList">
                  <!--                英雄联盟-->
                  <div class="liveItem">
                    <div class="pictureContainer">
                      <picture>
                        <img :src="require('@/assets/png/lol.png').default" alt="英雄联盟">
                      </picture>
                    </div>
                    <div class="live_item_title">哔哩哔哩英雄联盟赛事</div>
                  </div>
                  <!--                守望先锋-->
                  <div class="liveItem">
                    <div class="pictureContainer">
                      <picture>
                        <img :src="require('@/assets/png/overWatch.png').default" alt="英雄联盟">
                      </picture>
                    </div>
                    <div class="live_item_title">哔哩哔哩守望先锋赛事</div>
                  </div>
                </div>
              </div>
              <div class="liveRight">
                <div class="liveRightTitle">热门活动：</div>
              </div>
            </div>
          </div>
        </transition>
      </li>
      <li class="l4_item">
        <span>游戏中心</span>
      </li>
      <li class="l5_item">
        <span>会员购</span>
      </li>
      <li class="l6_item">
        <span>漫画</span>
      </li>
      <li class="l7_item">
        <span>赛事</span>
      </li>
      <li class="l8_item">
        <div class="l8_container">
          <p>周年庆</p>
          <img class="l8_img" :src="require('@/assets/png/banner.png').default" alt="横幅">
          <p>周年庆</p>
        </div>
      </li>
    </ul>
    <ul class="centerContainer">
      <li class="searchContainer">
        <form class="searchForm">
          <div class="searchContent">
            <input class="searchInput" type="text" autocomplete="off" maxlength="100" placeholder="解锁金陵十三钗隐藏结局">
            <div class="searchClean">
              <svg width="16" height="16">
                <use href="#nav_search_clean"></use>
              </svg>
            </div>
          </div>
          <div class="searchIcon">
            <svg width="17" height="17">
              <use href="#nav_search_icon"></use>
            </svg>
          </div>
        </form>
      </li>
    </ul>
    <ul class="rightContainer">
      <li class="profileContainer">
        <div class="pictureContainer">
          <picture class="profilePicture">
            <img :src="require('@/assets/png/profile.png').default" alt="头像" style="width: 100%;height: 100%">
          </picture>
        </div>
      </li>
      <li class="commonContainer bigMemberContainer">
        <svg class="r_svg" width="22" height="21">
          <use href="#bigMemberIcon"></use>
        </svg>
        <span>大会员</span>
      </li>
      <li class="commonContainer messageContainer">
        <svg class="r_svg" width="20" height="20">
          <use href="#messageIcon"></use>
        </svg>
        <span>消息</span>
      </li>
      <li class="commonContainer dynamicContainer">
        <svg class="r_svg" width="20" height="21">
          <use href="#dynamicIcon"></use>
        </svg>
        <span>动态</span>
      </li>
      <li class="commonContainer collectionContainer">
        <svg class="r_svg" width="20" height="21">
          <use href="#collectionIcon"></use>
        </svg>
        <span>收藏</span>
      </li>
      <li class="commonContainer historyContainer">
        <svg class="r_svg" width="20" height="21">
          <use href="#historyIcon"></use>
        </svg>
        <span>历史</span>
      </li>
      <li class="commonContainer createCenterContainer">
        <svg class="r_svg" width="20" height="21">
          <use href="#createCenterIcon"></use>
        </svg>
        <span>创作中心</span>
      </li>
      <li class="contributeContainer">
        <div class="contributeBox">
          <svg class="contributeIcon" width="18" height="18">
            <use href="#contributeIcon"></use>
          </svg>
          <span>投稿</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {reactive,toRefs} from "vue";

export default {
  name: "navigate",
  setup(){
    const homePageList1 = [
      {
        id:"anime",
        name:"番剧"
      },
      {
        id:"movie",
        name:"电影"
      },
      {
        id:"guochuang",
        name:"国创"
      },
      {
        id:"teleplay",
        name:"电视剧"
      },
      {
        id:"zongyi",
        name:"综艺"
      },
      {
        id:"documentary",
        name:"纪录片"
      },
      {
        id:"cartoon",
        name:"动画"
      },
      {
        id:"game",
        name:"游戏"
      },
      {
        id:"kichiku",
        name:"鬼畜"
      },
      {
        id:"music",
        name:"音乐"
      }
    ];
    const homePageList2 = [
      {
        id:"dance",
        name:"舞蹈"
      },
      {
        id:"cinephile",
        name:"影视"
      },
      {
        id:"ent",
        name:"娱乐"
      },
      {
        id:"knowledge",
        name:"知识"
      },
      {
        id:"tech",
        name:"科技"
      },
      {
        id:"information",
        name:"资讯"
      },
      {
        id:"food",
        name:"美食"
      },
      {
        id:"life",
        name:"生活"
      },
      {
        id:"car",
        name:"汽车"
      },
      {
        id:"fashion",
        name:"时尚"
      }
    ];
    const homePageList3 = [
      {
        id:"sports",
        name:"运动"
      },
      {
        id:"animal",
        name:"动物圈"
      },
      {
        id:"vlog",
        name:"VLOG"
      },
      {
        id:"gaoxiao",
        name:"搞笑"
      },
      {
        id:"danjiyouxi",
        name:"单机游戏"
      },
      {
        id:"vtuber",
        name:"虚拟UP主"
      },
      {
        id:"love",
        name:"公益"
      },
      {
        id:"gongkaike",
        name:"公开课"
      },
    ];

    const state = reactive({
      l1_wrapper_show:false,
      l3_wrapper_show:false
    })
    return {
      homePageList1,
      homePageList2,
      homePageList3,
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.navigate{
  position: fixed;
  @include flex_layout(row,nowrap,space-between,center);
  @include wh(100%,64px);
  min-width: 1100px;
  padding: 0 24px;
  box-shadow: 0 2px 4px #00000014;
  z-index: 1001;
  background-color: white;

  .leftContainer{
    @include flex_layout(row,nowrap,space-around,center);
    flex-shrink: 0;
    margin-right: 5px;
    color: $color6;

    .common_li{
      @include wh(auto,64px);
      @include flex_layout(row,nowrap,space-around,center);
      margin-right: 15px;
      cursor: pointer;
    }

    .jumpHover{
      span{
        animation: jump .3s;
      }
      @keyframes jump {
        from{
          margin-top: 0;
        }

        50%{
          margin-top: -10px;
        }

        to{
          margin-top: 0;
        }
      }
    }

    .l1_item{
      position: relative;
      height: 56px;
      @include flex_layout(row,nowrap,space-between,center);
      @extend .common_li;

      .billbillIcon{
        @include wh(60px,64px);
        margin-right: 25px;
      }

      .l1_title{
        @include flex_layout(row,nowrap,center,center);

        span{
          margin-right: 5px;
        }
        .arrow_to_bottom{
          @include wh(10px,10px);
          transition: all .3s;
        }
        .arrow_to_up{
          transform: rotate(180deg);
        }
      }

      .l1_wrapper{
        position: absolute;
        @include trbl(100%,auto,auto,0);
        margin-left: 0;
        @include flex_layout(row,nowrap,space-around,center);
        padding-top: 8px;
        cursor: default;

        .l1_list_container{
          position: relative;
          background-color: white;
          border: 1px solid $color1;
          box-shadow: 0 0 30px #0000001a;
          border-radius: 8px;
          padding: 16px 0;
          display: flex;

          .l1_list{
            width: 152px;
            padding: 0 16px;
            @include flex_layout(column,wrap,flex-start,stretch);
            border-right: 1px solid $color1;

            .li_item{
              height: 32px;
              @include flex_layout(row,nowrap,flex-start,center);
              margin: 3px 0;
              padding: 6px;
              border-radius: 4px;
              font-size: 14px;
              line-height: 20px;
              cursor: pointer;
              transition: background-color .3s;

              .li_item_icon{
                width: 24px;
                height: 24px;
                margin-right: 10px;
              }
            }

            .li_item:hover{
              background-color: $color1;
            }
          }
        }
      }
    }

    .l2_item{
      @extend .common_li;
    }
    .l2_item:hover{
      @extend .jumpHover;
    }

    //直播
    .l3_item{
      @extend .common_li;
      position: relative;
      .l3_wrapper{
        position: absolute;
        padding-top: 8px;
        margin-left: -120px;
        top: 100%;
        left: 0;
        cursor: default;
        .l3_container{
          position: relative;
          @include wh(552px,284px);
          @include flex_layout(row,nowrap,initial,initial);
          background-color: white;
          box-shadow: 0 0 30px rgb(0 0 0 / 10%);
          border-radius: 8px;
          color: $color6;
          .liveLeft{
            width: 276px;
            padding:20px 0 20px 20px;

            .liveLeftTitle{
              margin-bottom: 16px;
              font-size: 20px;
              line-height: 28px;
              color: $color6;
              font-weight: 500;
            }

            .liveLeftList{
              @include grid_layout(repeat(3,68px),91px 91px,16px,row);
              .liveItem{
                cursor: pointer;
                .pictureContainer{
                  position: relative;
                  @include wh(68px,68px);
                  border-radius: 50%;
                  img{
                    @include wh(100%,100%);
                    position: relative;
                    border-radius: 50%;
                  }
                }
                .pictureContainer:hover{
                  &::after{
                    content: "";
                    position: absolute;
                    @include trbl(0,0,0,0);
                    background-color: rgba(0,0,0,.2);
                    border-radius: 50%;
                  }
                }

                .live_item_title{
                  text-align: center;
                  font-size: 12px;
                  line-height: 17px;
                  margin-top: 6px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
              }
              .liveItem:hover{
                .live_item_title{
                  color: $color14;
                }
              }

            }
          }
          .liveRight{
            width: 274px;
            padding: 20px;

            .liveRightTitle{
              margin-bottom: 16px;
              font-size: 20px;
              line-height: 28px;
              color: $color6;
              font-weight: 500;
            }
          }
        }
      }
    }
    .l3_item:hover{
      @extend .jumpHover;
    }

    .l4_item{
      @extend .common_li;
    }

    .l5_item{
      @extend .common_li;
    }

    .l6_item{
      @extend .common_li;
    }

    .l7_item{
      @extend .common_li;
    }

    .l8_item{
      @include wh(54px,64px);
      margin-right: 15px;
      overflow: hidden;
      cursor: pointer;

      .l8_container{
        position: relative;
        @include wh(54px,160px);
        animation: l8_container_an 10s infinite forwards;

        p{
          @include wh(100%,64px);
          text-align: center;
          line-height: 64px;
        }

        .l8_img{
          @include wh(54px,36px);
          display: block;
        }
      }
    }
  }

  .centerContainer{
    margin: 0 10px;
    height: 38px;
    flex: 1;

    .searchContainer{
      min-width: 181px;
      max-width: 500px;
      margin: 0 auto;

      .searchForm{
        position: relative;
        height: 40px;
        padding: 0 48px 0 4px;
        @include flex_layout(row,nowrap,space-around,center);
        border: 1px solid $color1;
        background-color: $color2;
        opacity: .9;
        border-radius: 8px;

        .searchContent{
          @include flex_layout(row,nowrap,space-between,center);
          @include wh(100%,32px);
          padding: 0 8px;
          border: 2px solid transparent;
          border-radius: 6px;

          .searchInput{
            flex: 1;
            overflow: hidden;
            padding-right: 8px;
            line-height: 20px;
            border: none;
            background-color: transparent;
            box-shadow: none;
          }

          .searchClean{
            @include wh(16px,16px);
            cursor: pointer;
          }
        }

        .searchIcon{
          position: absolute;
          top: 3px;
          right: 7px;
          @include wh(32px,32px);
          @include flex_layout(row,nowrap,center,center);
          border-radius: 6px;
          cursor: pointer;
        }
      }
    }
  }

  .rightContainer{
    margin-left: 10px;
    @include flex_layout(row,nowrap,initial,center);

    .svgJumpHover{
      animation: svgJump .3s;
    }

    .profileContainer{
      position: relative;
      @include wh(60px,50px);

      .pictureContainer{
        position: absolute;
        @include wh(38px,38px);
        top: 5px;
        left: 10px;
        border-radius: 50%;
        border: 2px solid white;
        cursor: pointer;
        transition: all .35s ease;

        .profilePicture{
          @include wh(100%,100%);
          border-radius: 50%;

          img{
            @include wh(100%,100%);
            border-radius: 50%;
          }
        }
      }

      .pictureContainer:hover{
        transform: scale(1.9);
        transform-origin: top right;
      }
    }

    .commonContainer{
      @include flex_layout(column,wrap,center,center);
      min-width: 50px;
      cursor: pointer;

      .r_svg{
        margin-bottom: 3px;
      }

      span{
        font-size: 13px;
        color: $color3;
      }
    }
    .commonContainer:hover{
      .r_svg{
        @extend .svgJumpHover;
      }
    }

    .contributeContainer{
      min-width: 50px;
      cursor: pointer;

      .contributeBox{
        @include flex_layout(row,nowrap,center,center);
        @include wh(90px,34px);
        margin-left: 10px;
        border-radius: 8px;
        background-color: $color4;
        color: white;
        transition: all .3s;

        .contributeIcon{
          margin-right: 5px;
        }
      }

      .contributeBox:hover{
        background-color: $color5;
      }
    }
  }
}
</style>