<template>
    <div>
       <header>
           <div class="headimg" style="background-image: url(../../static/images/user.jpg);"></div>
           <view class="change">点击切换头像</view>
       </header>

        <section>
            <view class="bd-b">
                <span >昵称：</span> <span>酸奶益力多</span>
            </view>
            <view class="bd-b">
                <span>性别：</span> <input type="checkbox" class="girl"><span class="sex iconfont icon-xingbienv"> </span>  <input type="checkbox" class="boy"> <span class="sex iconfont icon-xingbienan"></span>
            </view>
            <view class="bd-b">
                <span>手机号码：</span> <span>18813960131</span>
            </view>
            <view class="bd-b">
                <span>个性签名：</span> <span>越努力越幸运</span>
            </view>
        </section>
    </div>
</template>
<script>
export default {
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
    header{
        width: 100%;
        box-sizing: border-box;
        padding:12px;
        border-bottom: 14px solid #f0f0f0;
    }
    header .headimg{
        width:100px;
        height:100px;
        border-radius: 50%;
        border: 1px solid #d0d0d0;
        margin:0 auto;
        -webkit-background-size:cover;
        background-size:cover;

    }
    header .change{
        text-align: center;
        font-size:18px;
        margin-top:20px;
    }
    section {
        font-size:16px;
    }
    section view{
        margin-top:20px;
        box-sizing: border-box;
        padding-left:20px;
        padding-bottom:12px;
    }
    section view .sex{
        font-size:18px;
        /*margin-left:10px;*/
    }
    section view  .icon-xingbienv{
        color:#ff3ec9;
        margin-right:10px;
    }
    section view  .icon-xingbienan{
        color:#75b9eb;
    }
    section view .girl,
    section view .boy{
        width:20px;
        height:20px;
        margin-right:10px;
    }
</style>
