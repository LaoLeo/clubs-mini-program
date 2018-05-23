<template>
  <div>
      <header>
          <div class="search iconfont icon-sousuo"></div>
          <div class="tab">
              <div class="activity" :class="{ active: current_index == 1}"  @click="change(1)">活动</div>
              <div class="dynamic"  @click="change(2)" :class="{ active: current_index == 2}">动态</div>
          </div>
          <div class="edit iconfont icon-bianji" :class="{'hidden': current_index==1 && !user.isClubOwner}"  @click="addActivity()"></div>
      </header>
      <div class="bg"></div>

      <section>
          <!--活动-->
          <div class="box" v-for="(item, index) in activities" :key="item._id" v-show="current_index==1" @click="toEvent(index)">
                <div class="headimg">
                    <div class="picture" v-if="item.author.picture" :style="{backgroundImage:'url('+item.author.picture+')'}">  </div>
                          <div class="picture" v-else style="background-image: url(../../static/images/avatar.gif);">  </div>
                    <div class="club_name">
                           <view class="name">{{item.author.name}}</view>
                           <view class="date"> {{item.meta.updateDate}}</view>
                    </div>
                </div>
                <div class="content"  v-if="item.posters[0]" :style="{backgroundImage:'url('+item.posters[0]+')'}">
                     <view class="message">{{item.title}}</view>
                </div>
                  <div class="content"  v-else style="background-image: url(../../static/images/bg.jpg);">
                     <view class="message">{{item.title}}</view>
                </div>
                <div class="description">{{item.content}}</div>
          </div>

          <!--动态-->
          <div class="box" v-for="(item,index) in dymanics" :key="item._id"  v-show="current_index==2">
              <div class="headimg">
                  <div class="picture" :style="{backgroundImage:'url('+item.user.picture+')'}">

                  </div>

                  <div class="club_name">
                      <view class="name">{{item.user.name}}</view>
                      <view class="date">{{item.createDate}}</view>
                  </div>
              </div>
              <div class="content1" >
                  <div class="mood">{{item.text}}</div>
                  <div class="photo">
                      <ul>
                          <li v-for="pic in item.posters" :key="pic" :style="{backgroundImage:'url('+pic+')'}"></li>
                      </ul>
                  </div>
                  <div class="comments">
                      <span @click="Prais()">
                            <span class="iconfont icon-icon_good" :class="{'active':!isPrais}"></span>
                            <span class="good" >{{praise}}</span>
                      </span>

                       <span @click="toDetails()" >
                           <span class="iconfont icon-pinglun" ></span>
                           <span> 0 </span>
                       </span>
                  </div>
              </div>
          </div>
      </section>

  </div>
</template>

<script>
import store from "@/store";
import type from "@/utils/mutitionsType";

export default {
    data() {
        return {
            user: store.state.user,
            activities: [],
            total: 0,
            current_index: 1,
            praise: 0,
            isPrais: 1,
            dymanics: []
        }
    },
    computed: {
    },
    methods: {
        change(index) {
            this.current_index = index;

            if (index === 2 && this.dymanics.length === 0) {
                wx.showLoading({title: '加载中'})
                store.dispatch(type.GetDynamics, (data) => {
                    wx.hideLoading()
                    this.dymanics = store.state.user.dynamics
                })
            }
        },
        addActivity() {
            wx.navigateTo({
                url: '/pages/activity/activity?index=' + this.current_index
            })
        },
        toDetails() {
            wx.navigateTo({
                url: '/pages/comments/comments'
            })
        },
        toEvent(index) {
            wx.navigateTo({
                url: '/pages/events/events?index=' + index
            })
        },
        Prais() {
            let that = this;
            if (that.isPrais) {
                that.praise++;
                that.isPrais = 0;
            }
        },
        formatDate (now) {
            var year = now.getYear();
            var month = now.getMonth() + 1;
            var date = now.getDate();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
        }
    },
    created() {
        store.dispatch(type.GetActivities, () => {
            this.activities = store.state.user.activities

            this.total = store.state.user.activities_total
        })
    },
    onShow() {

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
    margin-top:10px;
    border-bottom: 1px solid #d0d0d0;

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
    section .box .content1 {
        width:100%;
    }
    section .box .content1 .mood{
        font-size:14px;
        padding-left:30px;

    }
    section .box .content1 .photo ul{
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        padding-left:30px;

    }
    section .box .content1 .photo li{
        width:80px;
        height:80px;
        float: left;
        background-size: cover;
        -webkit-background-size:cover;
        margin-right:15px;
        margin-top:10px;
        /* border: 1px solid #75b9eb; */

    }
    section .box .content1 .comments{
        width:100%;
        font-size:14px;
        margin-top:20px;
        text-align: right;
    }
    section .box .content1 .comments .icon-icon_good,
    section .box .content1 .comments .icon-pinglun{
        font-size:20px;
        color:#75b9eb;
    }

    section .box .content1 .comments .active{
        font-size:22px;
        color:orangered;
    }
    section .box .content1 .comments  .good{
        margin-right:16px;
    }
    .hidden {
        visibility: hidden;
    }
</style>
