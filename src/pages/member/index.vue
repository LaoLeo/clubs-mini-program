<template>
  <div class="lists">
    <div class="list_item bd-b" v-for="member in members" :key="member._id" >
        <div class="left" >
        <div class="club_img" :style="{backgroundImage:'url('+member.picture+')'}"></div>
        </div>
        <div class="right">
            <div class="name">{{member.name}}</div>
            <div class="slogan">{{member.phone}}</div>
        </div>
    </div>
    <div v-if="members.length === 0">还没有会员</div>

    <view class="notice" @click="add_notice=true">通知</view>


    <view class="mask" v-show="add_notice"   @click="add_notice=false"  catchtouchmove="preventD">
        <div class="add_notice" @click.stop>
               <view class="add_btn">发布通知</view>
                <view>
                    <span>标题:<input type="text" v-model="notice.title"></span>
                    <span>内容:<input type="text" v-model="notice.content"></span>
                </view>
                <view class="submit"  @click="sendNotice()" >发送</view>
            </div>
    </view>
  </div>


</template>
<script>
import store from '@/store'
import * as API from '@/utils/api'
import { showErrorModel } from '@/utils'

export default {
    data() {
        return {
            members: [],
            add_notice: false,
            aId: '',
            notice: {
                title: '',
                content: ''
            }
        };
    },
    methods: {
        sendNotice() {
            let clubId = store.state.user.user.clubs_own[0]._id

            this.add_notice = false
            let data = {
                clubId,
                title: this.notice.title,
                content: this.notice.content,
                type: 0
            }
            if (this.aId) {
                data.type = 1
                data.aId = this.aId
            }

            API.request(
                'post',
                API.sendNotice,
                data
            ).then(res => {
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }

                wx.showToast({title: '发送成功'})
            })
        },
        preventD() {

        }

    },
    onShow() {
        this.aId = this.$root.$mp.query.aId
        if (!this.aId) {
            this.members = store.state.club.clubDetail.club.members
            return
        }

        API.request(
            'get',
            API.getParticipants,
            {
                activityId: this.aId
            }
        ).then(res => {
            if (res.code !== 200) {
                showErrorModel(res.code, res.msg)
                return
            }
            this.members = res.data.participants
        })
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
.lists {
    width: 100%;
    box-sizing: border-box;
}

.lists .notice{
    width: 50px;
    height:50px;
    text-align: center;
    font-size: 16px;
    line-height: 50px;
    border: 1px solid #75b9eb;
    color: #75b9eb;
    position: fixed;
    right: 12px;
    bottom: 50px;
    border-radius: 50%;
}



.list_item {
    width: 100%;
    height: 80px;
    overflow: hidden;
    margin-top: 10px;
    padding-right: 12px;
    box-sizing: border-box;
    /*border-bottom: 1px dotted #d81e06;*/
}
.list_item .left {
    width: 30%;
    height: 100%;
    float: left;
}
.list_item .left .club_img {
    width: 60px;
    height: 60px;
    background-size: 100% 100%;
    background-position: center center;
    border-radius: 50%;
    margin: 10px auto;
    border: 1px solid #d0d0d0;
}

.list_item .right {
    width: 40%;
    height: 100%;
    float: left;
    box-sizing: border-box;
    padding-top: 10px;
}
.list_item .right .name {
    width: 140px;
    font-size: 16px;
    color: #000;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.list_item .right .slogan {
    width: 150px;
    font-size: 14px;
    color: #000;
    margin-top: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.list_item .follow {
    float: right;
    width: 15%;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 12px;
    border-radius: 15px;
    background: #eb3606;
    color: #fff;
    margin-top: 26px;
    margin-right: 12px;
}
.list_item .unfollow {
    background: #ccc;
}

.lists .mask{
    width:100%;
    height:100%;
    position: fixed;
    left:0;
    top: 0;
    background-color: rgba(0,0,0,.4);

}
.lists .mask .add_notice{
    width:80%;
    height:280px;
    margin:120px auto;
    background-color: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    padding:12px;
}

.lists .mask .message{
width:80%;
    height:350px;
    margin:100px auto;
    background-color: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    padding:12px;
}
.lists .mask .message  .title{
    font-size: 14px;
    text-align: center;
    color:#ccc;

}



.lists .mask .add_notice .add_btn{
    text-align: center;
    font-size:20px;
    color:#333;
}
.lists .mask .add_notice span{
    display: block;
    width:100%;
    height:75px;
    margin-top:2px;
}
.lists .mask .add_notice input{
    width:250px;
     height:40px;
     border: 1px solid #d0d0d0;
    margin-top:4px;

}
.lists .mask .add_notice .submit{
    width:100px;
    heihgt:40px;
    text-align: center;
    line-height:40px;
    background-color: #75b9eb;
    color:#fff;
    margin:20px auto;
    border-radius: 5px;

}

</style>

