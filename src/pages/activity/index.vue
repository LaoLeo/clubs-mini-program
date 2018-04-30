<template>
    <section class="box" >
        <div v-show="current_index==1" >
            <view>
                <span class="fs20 scope">活动所属:</span>
                <input type="text">
            </view>
            <view>
                <span class="fs20 title">活动标题:</span>
                <input type="text">
            </view>
            <view>
                <span class="fs20 content">活动内容:</span>
                <textarea name="" id="" class="writeContent" ></textarea>
            </view>
            <view style="margin-top: 12px;">
                <span class="fs20 content">上传图片: </span><span class="upload iconfont icon-tupian"></span>
                <ul class="images">
                    <li></li>
                </ul>
            </view>
            <view>
                <div class="release">发布活动</div>
            </view>
        </div>
       <div class="dynamic" v-show="current_index==2">
           <textarea placeholder="这一刻，你在想什么..."></textarea>
            <div class="add iconfont icon-tianjia"></div>
          <view class="send">发表动态</view>
       </div>
    </section>


</template>
<script>
export default {
    data() {
        return {
            current_index: 0
        };
    },

    components: {
    },

    methods: {
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
    .box{
        width:100%;
        box-sizing: border-box;
        padding:12px;

    }
    .box .fs20{
        font-size:20px;
        color:#333;
    }
    .box input{
        height:36px;
        border: 1px solid #d0d0d0;
        margin-top:12px;
        outline: none;
        margin-bottom:12px;
        padding-left:12px;
    }
    .box .writeContent{
        width:92%;
        height:200px;
        border: 1px solid #d0d0d0;
        margin-top:12px;
        padding:12px;
        resize: none;

    }
    .box .release{
        width:120px;
        height:36px;
        text-align: center;
        line-height:36px;
        border-radius: 18px;
        margin:20px auto;
        background-color: #75b9eb;
        color: #ffffff;

    }
    .box .images{
            height:100px;
            border: 1px solid #d0d0d0;
             margin-top:12px;
        overflow: hidden;
    }
    .box .images li{
        float: left;
        width:48%;
        height:100px;
    }
    .box .upload{
        display: inline-block;
        width:30px;
        height: 20px;
    }
    .box .icon-tupian{
        font-size:30px;
        color:red;

    }
    .box .dynamic{

    }
    .box .dynamic  .send{
        width:100px;
        height:36px;
        text-align: center;
        line-height:36px;
        background-color: #75b9eb;
        border-radius: 15px;
        margin:10px auto;
        font-size:16px;
        color:#fff;

    }
    .box .dynamic {
        width:100%;
        box-sizing: border-box;
        padding:8px;
    }
    .box .dynamic textarea{
        width:90%;
        min-height:50px;
        border: 1px solid #f0f0f0;
        font-size:16px;
        color:#666666;
        padding:12px;
    }
    .box .dynamic .add{
        margin-top:10px;
        width:80px;
        height:100px;
        border: 1px solid #d0d0d0;
        font-size:26px;
        text-align: center;
        line-height:100px;
        color: #d0d0d0;;
    }
</style>
