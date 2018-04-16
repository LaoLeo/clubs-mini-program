<template>
    <section>
        <div class="box" >
            <div class="headimg">
                <div class="picture" style="background-image: url(../../static/images/user.jpg);">

                </div>
                <div class="club_name">
                    <view class="name">一只酸奶牛</view>
                    <view class="date">2018/03/22</view>
                </div>
            </div>
            <div class="content1" >
                <div class="mood">开心快乐迷迷糊糊的便过去开心快乐迷迷糊糊的便过去开心快乐迷迷糊糊的便过去开心快乐迷迷糊糊的便过去</div>
                <div class="photo">
                    <ul>
                        <li v-for="(index,intem) in 9">{{index}}</li>
                    </ul>
                </div>
                <div class="comments">
                    <span class="iconfont icon-icon_good"></span>
                    <span class="good">100</span>
                    <span class="iconfont icon-pinglun" ></span>
                    <span>222</span>
                </div>
            </div>
        </div>
        <div class="review">
             <p>评论</p>
            <ul class="content">
                <li class="bd-b">
                    <div class="picture" style="background-image: url(../../static/images/user2.jpg);"></div>
                    <div class="message">
                        <view>二哈哈</view>
                        <view class="description">做猪最主要的就是嗨森做猪最主要的就是嗨森做猪最主要的就是嗨森做猪最主要的就是嗨森</view>
                        <div class="reply">
                           <ul>
                               <li>
                                   <span>@飞天猪：</span><span>开心就好呀</span>
                               <li>
                                   <span>@益力多：</span><span>娃娃哈哈哈哈哈哈后</span>
                               </li>
                               <li class="more">查看剩余99条评论&gt;</li>
                           </ul>
                        </div>
                    </div>
                    <div class="date">12小时前</div>
                </li>
                <li class="bd-b">
                    <div class="picture" style="background-image: url(../../static/images/user1.jpg);"></div>
                    <div class="message">
                        <view>飞天猪</view>
                        <view class="description">好好哈哈哈哈</view>
                    </div>
                    <div class="date">12小时前</div>
                </li>
                <li class="bd-b">
                    <div class="picture" style="background-image: url(../../static/images/user.jpg);"></div>
                    <div class="message">
                        <view>小仙女</view>
                        <view class="description">好好看</view>
                    </div>
                    <div class="date">12小时前</div>
                </li>
            </ul>
            <div class="publish">
                <input type="text" placeholder="请输入评论">
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            motto: 'Hello World'
        };
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
    section{
        width:100%;
        box-sizing: border-box;
    }
    section .box{
        box-sizing: border-box;
        padding: 10px;
        margin-top:10px;
        border-bottom: 1px solid #f0f0f0;

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
        margin-right:15px;
        margin-top:10px;
        text-align: center;
        border: 1px solid #75b9eb;
        line-height:80px;
    }
    section .box .content1 .comments{
        /*float: right;*/
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
    section .box .content1 .comments  .good{
        margin-right:16px;
    }
    section  .review{
    }
    section  .review p{
        box-sizing: border-box;
        padding:12px;
        font-size:14px;
        color:#666;
        border-bottom: 1px solid #d0d0d0;
    }
    section .review .content li{
        width:100%;
        overflow: hidden;
        box-sizing: border-box;
        padding:10px;
        margin-top:6px;
        position: relative;
    }
    section .review .content li .picture{
        width:40px;
        height:40px;
        border: 1px solid #d0d0d0;
        float: left;
        -webkit-background-size:cover;
        background-size:cover;
        background-position: center center;
        border-radius: 50%;
    }
    section .review .content li .message{
        width:80%;
        float: left;
        font-size:14px;
        padding-left:10px;
        padding-top:6px;

    }
    section .review .content li .message .reply{
        width:100%;
        background-color: #f0f0f0;
        box-sizing: border-box;
        padding:4px;
        font-size:12px;
    }
    section .review .content li .message .reply .more{
        color:#75b9eb;
        font-size:14px;
    }
    section .review .content li .message .reply ul li {
        padding: 0;
        /*height:20px;*/
    }
    section .review .content li .description{
        width:180px;
        margin-top:8px;
        margin-bottom:8px;

    }
    section .review .content li .time{
        color:#666;
    }
    section .review .content li .date{
        width:80px;
        font-size:12px;
        color: #666;
        text-align: center;
        line-height:50px;
        position: absolute;
        right:12px;
        top:14px;
    }
    section .review .content li .dynamic{
        width:50px;
        height:50px;
        float: right;
        -webkit-background-size:cover;
        background-size:cover;
        background-position: center center;
    }
    section  .review .publish{
        width:100%;
        height:36px;
        box-sizing: border-box;
        border-radius: 23px;
        padding-left:12px;
        padding-right:12px;
        /*position: fixed;*/
        /*bottom: 0;*/
        background-color: #fff;
    }
    section  .review .publish input{
        width:94%;
        height:36px;
        font-size:14px;
        border: 1px solid #d0d0d0;
        border-radius: 28px;
        padding-left:12px;
    }
</style>
