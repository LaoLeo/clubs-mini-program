<template>
    <div class="content">
         <header>
              <view class="title">IT春游大事件</view>
              <view class="date">
                  <span>作者:  </span> <span>小T哥</span><span class="time">2018/04/25</span>
              </view>
         </header>
        <section>
                <view class="description">
                    各位小可爱们，我们IT协会一年一度的春游马上就要启动了，回想去去年的大夫山骑行和烧烤，大家是不是还历历在目呢，今年我们的春游准备去阳江海边走一走，浪一浪噢，体验一下海边的风，海边的太阳以及海边的浪，你，是否行动了呢，心动不如行动，赶紧报名呦
                </view>
                <view>
                     <div class="picture" style="background-image: url(../../../static/images/it/bg.jpg);"></div>
                </view>
            <view class="description">
                  我们的春游行程满满，活动丰富多彩呦，那你确定报名了吗？
            </view>
            <view>
                <div class="picture" style="background-image: url(../../../static/images/it/bg1.jpg);"></div>
            </view>
            <view class="description">
                 好啦好啦，小可爱们，期待我们的相约呦
            </view>
            <view class="read"><span>阅读量：</span><span>122</span></view>
        </section>
    </div>
</template>

<script>

export default {
    data() {
        return {
        };
    },

    components: {
    },

    methods: {
    },

    created() {
    },

    onShow() {
        console.log(this.$root.$mp.query)
    }
};
</script>

<style scoped>
    .content header{
        width:100%;
        box-sizing: border-box;
    }
    .content header .title{
        text-align: center;
        font-size:20px;
    }
    .content header .date{
        font-size:14px;
        color:#666;
        padding-left:12px;
        margin-top:8px;
    }
    .content header .date .time{
        margin-left:20px;
    }
    .content section{
        width:100%;
        box-sizing: border-box;
        padding:12px;
        text-indent: 2em;
        margin-top:10px;
    }
    .content section .description{
        font-size:16px;
        color:#333;

    }
    .content section .picture{
        width:90%;
        height:150px;
        -webkit-background-size: cover;
        background-size:cover;
        margin:10px auto;

    }
    .content section .read{
        float: right;
        font-size:14px;
        color:#666;
        margin-top:10px;
    }
</style>
