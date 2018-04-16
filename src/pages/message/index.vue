<template>
    <div>
        <header>
            <div class="title">
                <div class="remind" :class="{ active : currentIndex == 1}" @click="changeTitle(1)">提醒</div>
                <div class="interactive" :class="{ active : currentIndex == 2}" @click="changeTitle(2)">互动</div>
            </div>
        </header>
        <div class="bg"></div>

        <!--提醒-->
        <section v-show="currentIndex == 1">
            <ul class="content">
                <li class="bd-b">
                    <div class="picture" style="background-image: url(../../static/images/clubsPic/it.jpg);"></div>
                    <div class="message">
                        <view>IT协会</view>
                        <view class="description">周六记得来听课哟，有惊喜，记得听到最后噢</view>
                    </div>
                    <div class="date">12小时前</div>
                </li>
                <li class="bd-b">
                    <div class="picture" style="background-image: url(../../static/images/clubsPic/taixie.jpg);"></div>
                    <div class="message">
                        <view>跆拳道协会</view>
                        <view class="description">这周将会推出炫酷跆拳道舞技噢</view>
                    </div>
                    <div class="date">12小时前</div>
                </li>
                <li class="bd-b">
                    <div class="picture" style="background-image: url(../../static/images/clubsPic/taixie.jpg);"></div>
                    <div class="message">
                        <view>跆拳道协会</view>
                        <view class="description">这周将会推出炫酷跆拳道舞技噢</view>
                    </div>
                    <div class="date">12小时前</div>
                </li>
                <li class="bd-b">
                    <div class="picture" style="background-image: url(../../static/images/clubsPic/taixie.jpg);"></div>
                    <div class="message">
                        <view>跆拳道协会</view>
                        <view class="description">这周将会推出炫酷跆拳道舞技噢</view>
                    </div>
                    <div class="date">12小时前</div>
                </li>
            </ul>
        </section>
        <!--互动-->
        <section v-show="currentIndex==2">
            <ul class="content">
                <li class="bd-b">
                    <div class="picture" style="background-image: url(../../static/images/user1.jpg);"></div>
                    <div class="message" >
                        <view>酸奶</view>
                        <view class="description">哇，好帅啊啊啊</view>
                        <view class="time">5小时前</view>
                    </div>
                    <div class="dynamic" style="background-image: url(../../static/images/taixie/bg.jpg);"></div>
                </li>
                <li class="bd-b">
                    <div class="picture" style="background-image: url(../../static/images/user2.jpg);"></div>
                    <div class="message">
                        <view>益力多</view>
                        <view class="description">小哥哥好酷呦</view>
                        <view class="time">5小时前</view>
                    </div>
                    <div class="dynamic" style="background-image: url(../../static/images/taixie/bg.jpg);"></div>
                </li>
                <li class="bd-b">
                    <div class="picture" style="background-image: url(../../static/images/user1.jpg);"></div>
                    <div class="message">
                        <view>飞天猪</view>
                        <view class="description">谢谢哇</view>
                        <view class="time">5小时前</view>
                    </div>
                    <div class="dynamic" style="background-image: url(../../static/images/taixie/bg.jpg);"></div>
                </li>
                <li class="bd-b">
                    <div class="picture" style="background-image: url(../../static/images/user.jpg);"></div>
                    <div class="message">
                        <view>少女猪</view>
                        <view class="description">想飞上天，和太阳肩并肩</view>
                        <view class="time">5小时前</view>
                    </div>
                    <div class="dynamic" style="background-image: url(../../static/images/taixie/bg.jpg);"></div>
                </li>
            </ul>
        </section>
    </div>

</template>
<script>
export default {
    data () {
        return {
            currentIndex: 1

        }
    },
    methods: {
        changeTitle(index) {
            this.currentIndex = index;
        }
    }

}
</script>
<style scoped>
    .bg{
        width:100%;
        height:14px;
        background-color: #f0f0f0;
        margin-top:10px;
    }
    .bd-b{
        position:relative;
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
    header{
        width:100%;
        height:56px;
        box-sizing: border-box;
    }
    header .title{
        width:60%;
        height:56px;
        margin: 0 auto;
        font-size:18px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
    }
    header .title .remind,
    header .title .interactive{
        width:50%;
        height:56px;
        text-align: center;
        line-height:56px;
    }
    header .title .active{
        color:#75b9eb;
        border-bottom: 2px solid #75b9eb;
    }
    section .content li{
        width:100%;
        overflow: hidden;
        box-sizing: border-box;
        padding:10px;
        margin-top:6px;
    }
    section .content li .picture{
        width:50px;
        height:50px;
        border: 1px solid #d0d0d0;
        float: left;
        -webkit-background-size:cover;
        background-size:cover;
        background-position: center center;
        border-radius: 50%;
    }
    section .content li .message{
        width:180px;
        float: left;
        font-size:14px;
        padding-left:10px;
        padding-top:6px;

    }
    section .content li .description{
        width:180px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top:8px;
        margin-bottom:8px;

    }
    section .content li .time{
        color:#666;
    }
    section .content li .date{
        width:80px;
        float: right;
        font-size:12px;
        color: #666;
        text-align: center;
        line-height:50px;
    }
    section .content li .dynamic{
        width:50px;
        height:50px;
        float: right;
        -webkit-background-size:cover;
        background-size:cover;
        background-position: center center;
    }
</style>
