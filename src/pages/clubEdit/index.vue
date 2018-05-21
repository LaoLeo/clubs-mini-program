<template>
    <div>
        <header @click="uploadAvatar()">
           <view class="headimg" :style="{backgroundImage: 'url('+avatar+')'}"></view>
           <view class="change">点击更换头像</view>
       </header>

       <section>
           <form @submit="formSubmit">
                <view class="bd-b">
                <label>club名称：</label> <input class="b-input" type="text" placeholder="请输入club名称" v-model="club.name"/>
                </view>
                <view class="bd-b">
                    <span>个性签名：</span> <input class="b-input" type="text" placeholder="留个个性签名呗" v-model="club.signature"/>
                </view>
                <view class="bd-b">
                  <view>简介：</view>
                <textarea placeholder="请输入项目简介" v-model="club.summary"></textarea>
                </view>
                <button class="submit" formType="submit" :disabled="isPending">确定</button>
            </form>
       </section>
    </div>
</template>

<script>
import * as API from '@/utils/api'
import store from '@/store'
import type from '@/utils/mutitionsType'

export default {
    data() {
        return {
            club: {
                name: '',
                picture: '',
                signature: '',
                summary: ''
            },
            avatar: '../../../static/images/avatar.gif',
            isPending: false
        }
    },
    computed: {
    },
    methods: {
        createClub() {
            wx.showLoading({
                title: '创建中'
            })
            API.request(
                'post',
                API.createClub,
                this.club
            ).then(res => {
                wx.hideLoading()
                this.isPending = false
                if (res.code !== 200) {
                    wx.showToast({icon: 'none', title: '创建失败,' + res.msg})
                    return
                }
                store.commit(type.AddClub, res.data.club)
                wx.navigateTo({
                    url: `/pages/details/details?id=${res.data.club._id}`
                })
            })
        },
        formSubmit() {
            if (this.isPending) return

            wx.showModal({
                title: '提示',
                content: 'club名称将不能修改，确定提交？',
                success: (res) => {
                    if (res.confirm) {
                        this.isPending = true
                        this.createClub()
                    }
                }
            })
        },
        uploadAvatar() {
            API.chooseImageAndUpload().then((data) => {
                this.avatar = this.club.picture = data.imageURI
            })
        }
    }
}
</script>

<style scoped>
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
        box-sizing: border-box;
        padding: 12px;
        font-size: 14px;
    }
    section view {
     margin-top: 10px;
    }
    section view textarea{
       width: 80%;
       height:250px;
        border:1px solid #dfdfdf;
        padding: 10px;
    }
    section .submit{
        width: 80px;
        height: 40px;
        margin-top: 20px;
        text-align: center;
        line-height: 40px;
        border-radius: 20px;
        border:1px solid #75b9eb;
        color:#75b9eb;
        font-size: 16px;

    }
</style>
