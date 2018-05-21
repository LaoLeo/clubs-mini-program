<template>
  <section>
      <!--活动-->
      <div class="box" v-for="item in activities" :key="item._id" @click="toEvent(item._id)">
          <div class="headimg">
              <div class="picture"  :style="{backgroundImage:'url('+item.author.picture+')'}">

              </div>
              <div class="club_name">
                  <view class="name">{{item.author.name}}</view>
                  <view class="date"> {{item.meta.createDate}}</view>
              </div>
              <div class="text_warnign" v-if="item.status === ACTIVITY_INVALID">
                  已失效
              </div>
          </div>
          <div class="content"  :style="{backgroundImage:'url('+item.posters[0]+')'}">
              <view class="message">{{item.title}}</view>
          </div>
          <div class="description">{{item.content}}</div>
      </div>
  </section>
</template>

<script>
import type from '@/utils/mutitionsType'
import store from '@/store'
import { ACTIVITY_INVALID } from '@/utils/config'

export default {
    data() {
        return {
            activities: [],
            praise: 100,
            isPrais: 1,
            ACTIVITY_INVALID
        }
    },
    computed: {
    },
    methods: {
        toEvent(id) {
            wx.navigateTo({
                url: `/pages/events/events?id=${id}&isParticipate=1`
            })
        },
        Prais() {
            let that = this;
            if (that.isPrais) {
                that.praise++;
                that.isPrais = 0;
            }
        }
    },
    created() {
        store.dispatch(type.GetParticipateActivities, () => {
            this.activities = store.state.user.participate_activities
        })
    }
}
</script>

<style scoped>

        .bd-b{
        position:relative;
        display: flex;
    }
    .bd-b .b-input {
        flex: 1;
    }
    /*细线*/
    .bd-b:after{
        content: "  ";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        border-top:1px solid #e0e0e0;
        /*background-color: #e0e0e0;*/
        -webkit-transform: scaleY(.5);
        transform:scaleY(.5);
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
        .headimg .text_warnign {
            float:right;
            margin-top:18px;
            color:red;
            font-size:16px;
            transform:rotateZ(15deg);
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
