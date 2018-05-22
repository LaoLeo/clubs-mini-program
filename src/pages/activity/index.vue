<template>
    <section class="box" >
        <div v-show="current_index==1" >
            <view>
                <div class="headimg">
                    <div class="picture"  :style="{backgroundImage:'url('+club.picture+')'}"></div>
                    <div class="club_name">
                           <view class="name">{{club.name}}</view>
                    </div>
                </div>
            </view>
            <picker :value="index" :range="pickerRange" @change="bindPickerChange($event)">
                <view class="picker">
                报名类型：{{pickerRange[activiy.type]}}
                </view>
            </picker>
            <view>
                <span class="fs20 title">活动标题:</span>
                <input type="text" v-model="activiy.title">
            </view>
            <view>
                <span class="fs20 content">活动内容:</span>
                <textarea name="" id="" class="writeContent" v-model="activiy.content"></textarea>
            </view>
            <view style="margin-top: 12px;">
                <span class="fs20 content">上传海报: </span><span class="upload iconfont icon-tupian"></span>
                <ul class="picture">
                    <li class="add iconfont icon-tianjia" @click="uploadImage()"></li>
                    <li class="add" :style="{backgroundImage:'url('+item+')'}" v-for="item in imageUrl" :key="item"></li>
                </ul>
            </view>
            <view class="btn-group">
                <div class="release" @tap="stash()">保存</div>
                <div class="release" @tap="release()">发布活动</div>
            </view>
        </div>
       <div class="dynamic" v-show="current_index==2">
           <textarea placeholder="这一刻，你在想什么..."></textarea>
           <ul class="picture">
               <li class="add iconfont icon-tianjia" @click="uploadImage()"></li>
               <li class="add" :style="{backgroundImage:'url('+item+')'}" v-for="item in imageUrl"></li>
           </ul>
          <view class="send">发表动态</view>
       </div>
    </section>


</template>
<script>
import store from '@/store'
import * as API from '@/utils/api'
import { showErrorModel } from '@/utils'
import type from '@/utils/mutitionsType'

export default {
    data() {
        return {
            club: {},
            activiy: {
                type: 0,
                stash: 0, // 1为存为草稿
                title: '',
                content: '',
                posters: ''
            },
            current_index: 0,
            imageUrl: [],
            pickerRange: ['不用报名', '允许所有人报名', '仅允许会员报名']
        };
    },

    components: {
    },

    methods: {
        stash() {
            this.activiy.stash = 1
            this.release()
        },
        release() {
            this.activiy.posters = JSON.stringify(this.imageUrl)
            API.request(
                'post',
                API.createActivity,
                Object.assign({}, this.activiy)
            ).then(res => {
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }

                store.commit(type.CreateActivity, res.data.activity)
                store.dispatch(type.GetActivities)
                // 跳转活动详情
                showErrorModel('提示', '发布成功')
            })
        },
        bindPickerChange(e) {
            this.activiy.type = parseInt(e.target.value)
        },
        uploadImage() {
            API.chooseImageAndUpload().then(data => {
                this.imageUrl.push(data.imageURI)
            })
        }
    },

    created() {
    },

    onShow() {
        this.club = store.state.club.info
        this.current_index = parseInt(this.$root.$mp.query.index)

        if (this.current_index === 2) {
            wx.setNavigationBarTitle({title: '发表动态'})
        }
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
    .btn-group {
        display: flex;
    }
    .btn-group .release{
        flex: 1;
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
    .box  .picture{
        width:100%;
        overflow: hidden;
    }
    .box  .picture li{
        float: left;
        margin-right:10px;
    }
    .box  .add{
        margin-top:10px;
        width:70px;
        height:80px;
        border: 1px solid #d0d0d0;
        font-size:26px;
        text-align: center;
        line-height:80px;
        color: #d0d0d0;;
        -webkit-background-size:cover;
        background-size:cover;
        background-position: center center;

    }
    .headimg{
        width:100%;
        height:56px;
        overflow: hidden;
    }
    .headimg .picture{
        width:50px;
        height:50px;
        border-radius: 50%;
        -webkit-background-size:cover;
        background-size:cover;
        border: 1px solid #f0f0f0;
        float: left;
    }
    .club_name{
        float: left;
        font-size:14px;
        margin-left:20px;
        box-sizing: border-box;
        padding-top:10px;
    }
    .headimg .club_name .name{
        font-size:14px;
        color: #000000;
    }
</style>
