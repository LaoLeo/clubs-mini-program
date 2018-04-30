<template>
    <div>
       <header @click="changeImage()">
           <div class="headimg" :style="{backgroundImage:'url('+imageUrl+')'}"></div>
           <view class="change">点击切换头像</view>
       </header>

        <section>
            <view class="bd-b">
                <span >昵称：</span> <span>酸奶益力多</span>
            </view>
            <view class="bd-b">
                <span>性别：</span> <input type="radio" class="girl" name="sex" value="female"><span class="sex iconfont icon-xingbienv"> </span>  <input type="radio" class="boy" name="sex" value="male">  <span class="sex iconfont icon-xingbienan"></span>
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
    data() {
        return {
            current_index: 0,
            imageUrl: '../../../static/images/user.jpg'
        };
    },

    components: {
    },

    methods: {
        changeImage() {
            var that = this;
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    var tempFilePaths = res.tempFilePaths
                    that.imageUrl = tempFilePaths[0];
                }
            })
        }
    },

    created() {
    },

    onShow() {
        this.current_index = this.$root.$mp.query.index;
        console.log(this.current_index);
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
        background-position: center center;

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
