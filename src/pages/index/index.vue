<template>
  <div>
      <header>
          <div class="search iconfont icon-sousuo"></div>
          <div class="tab">
              <div class="activity" :class="{ active: current_index == 1}"  @click="change(1)">活动</div>
              <div class="dynamic"  @click="change(2)" :class="{ active: current_index == 2}">动态</div>
          </div>
          <div class="edit iconfont icon-bianji"></div>
      </header>
      <div class="bg"></div>
      <section>
          <!--活动-->
          <div class="box" v-for="item in lists" v-show="current_index==1">
                <div class="headimg">
                    <div class="picture"  :style="{backgroundImage:'url('+item.headimg+')'}">

                    </div>
                    <div class="club_name">
                           <view class="name">{{item.club_name}}</view>
                           <view class="date"> {{item.date}}</view>
                    </div>
                </div>
                <div class="content"  :style="{backgroundImage:'url('+item.bgimg+')'}">
                     <view class="message">{{item.title}}</view>
                </div>
                <div class="description">{{item.description}}</div>
          </div>
          <!--动态-->
          <div class="box2" v-show="current_index==2">动态</div>
      </section>
  </div>
</template>

<script>
import store from "@/store";
import type from "@/utils/mutitionsType";

export default {
    data() {
        return {
            list: store.state.message.clubsList,
            lists: [
                {
                    id: 1,
                    headimg: '../../static/images/clubsPic/it.jpg',
                    bgimg: '../../static/images/it/bg1.jpg',
                    club_name: 'IT协会',
                    date: '五分钟前',
                    description: '距离活动开始还剩5天',
                    title: 'IT七岁啦啦啦啦啦'
                },
                {
                    id: 2,
                    headimg: '../../static/images/clubsPic/taixie.jpg',
                    bgimg: '../../static/images/taixie/bg.jpg',
                    club_name: '跆拳道协会',
                    date: '10分钟前',
                    description: '距离活动开始还剩2天',
                    title: '一场炫酷的比武呵呵哈嘿'
                },
                {
                    id: 3,
                    headimg: '../../static/images/clubsPic/it.jpg',
                    bgimg: '../../static/images/it/bg1.jpg',
                    club_name: 'IT协会',
                    date: '五分钟前',
                    description: '距离活动开始还剩5天',
                    title: 'IT七岁啦啦啦啦啦'
                }
            ],
            current_index: 1
        };
    },
    methods: {
        add() {
            store.commit(type.ADDCLUB);
        },
        change(index) {
            this.current_index = index;
        }
    }
};
</script>

<style scoped>
    .bg{
        width:100%;
        height:14px;
        background-color: #f0f0f0;
        margin-top:10px;
    }
header{
    width:100%;
    height:56px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}
header .search{
    width:15%;
    height:100%;
    text-align: center;
    line-height:56px;
}
header  .icon-sousuo{
    font-size:26px;
    color:#75b9eb;

}
header .tab{
    width:60%;
    height:100%;
    display: flex;
    justify-content: space-around;
    font-size:18px;
    line-height:56px;

}
header .tab .activity,
header .tab .dynamic{
    width:50%;
    height:100%;
    text-align: center;
}
header .tab .active{
    color:#75b9eb;
    border-bottom: 2px solid #75b9eb;
}
header .edit{
    width:15%;
    height:100%;
    text-align: center;
    line-height:56px;
}
header  .icon-bianji {
    font-size: 26px;
    color: #75b9eb;
}
section{
     width:100%;
     box-sizing: border-box;
 }
section .box{
     box-sizing: border-box;
     padding: 10px;
    border: 1px solid #e8e8e8;
    margin-top:10px;

}
section .box .headimg{
    width:100%;
    height:56px;
    overflow: hidden;
}
section .box .headimg .picture{
    width:50px;
    height:50px;
    border-radius: 50%;
    -webkit-background-size:cover;
    background-size:cover;
    border: 1px solid #f0f0f0;
    float: left;
}
    section .box .headimg .club_name{
        float: left;
        font-size:14px;
        margin-left:20px;
        box-sizing: border-box;
        padding-top:10px;
    }
    section .box .headimg .club_name .name{
        font-size:14px;
        color: #000000;
    }
    section .box .headimg .club_name .date{
        font-size:10px;
        color: #333;
        margin-top:6px;
    }
    section .box .content{
    width:100%;
    height:160px;
    -webkit-background-size:cover;
    background-size:cover;
        background-position: center center;
        position: relative;
}
    section .box .content .message{
        position: absolute;
        bottom: 10px;
        left:10px;
        font-size:16px;
        color: #ffffff;
    }
    section .box .description{
        width:100%;
        height:30px;
        font-size:14px;
        color:#333;
        box-sizing: border-box;
        padding-left:10px;
        line-height:30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

    }

</style>
