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
                    <span>个性签名：</span> <input class="b-input" type="text" placeholder="留个个性签名呗" v-model="club.phone"/>
                </view>
                <view class="bd-b">
                  <view>简介：</view>
                <textarea name="" id=""  placeholder="请输入项目简介"></textarea>
                </view>
                <button class="submit">确定</button>
            </form>
       </section>
    </div>
</template>

<script>
import * as API from '@/utils/api'

export default {
    data() {
        return {
            club: {
                name: '',
                picture: '',
                signature: '',
                summary: ''
            },
            avatar: '../../../static/images/avatar.gif'
        }
    },
    computed: {
    },
    methods: {
        formSubmit() {

        },
        uploadAvatar() {
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: (res) => {
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    this.avatar = res.tempFilePaths[0]
                    let tempFile = res.tempFiles[0]

                    API.uploadBlobImage(tempFile).then((res) => {
                        if (res.code !== 200) {
                            wx.showToast({title: '图片上传失败,' + res.msg})
                        } else {
                            this.avatar = this.club.picture = res.data.imageURI
                        }
                    })
                }
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
