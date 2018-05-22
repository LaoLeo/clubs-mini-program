<template>
    <div class="lists">
        <div v-if="clubsJoin.length > 0">
            <h1 style="margin-left:12px;">已加入</h1>
            <div class="list_item" v-for="(item,index) in clubsJoin" :key="item._id" >
                <div class="left" >
                    <div class="club_img" :style="{backgroundImage:'url('+item.picture+')'}"></div>
                </div>
                <div class="right" @click='toDetail(item._id)'>
                    <div class="name">{{item.name}}</div>
                    <div class="slogan">{{item.signature}}</div>
                </div>
            </div>
        </div>
        <!-- <div v-else> 未加入其它社团</div> -->

        <h1 style="margin-left:12px">推荐社团：</h1>
        <div class="list_item" v-for="item in clubsRecommend" :key="item._id" >
            <div class="left" >
                <div class="club_img" :style="{backgroundImage:'url('+item.picture+')'}"></div>
            </div>
            <div class="right" @click='toDetail(item._id)'>
                <div class="name">{{item.name}}</div>
                <div class="slogan">{{item.signature}}</div>
            </div>

            <div class="follow" @click="follow(item._id)">加入</div>

        </div>
    </div>
</template>
<script>
import store from '@/store'
import type from '@/utils/mutitionsType'
import * as API from '@/utils/api'
import { showErrorModel } from '@/utils'

export default {
    data() {
        return {
            user: {},
            clubs: [],
            clubsJoin: [],
            clubsRecommend: []
        };
    },
    methods: {
        // 跳转社团详情页
        toDetail(id) {
            wx.navigateTo({
                url: '/pages/details/details?id=' + id
            })
        },

        follow(clubId) {
            wx.showLoading({title: '发送申请...'})
            API.request(
                'post',
                API.createApplication,
                {
                    clubId,
                    introduce: '你们社团很棒，我很想加入哦！'
                }
            ).then(res => {
                wx.hideLoading()
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }
                wx.showToast({title: '申请已发送'})
            })
        }

    },
    created() {
        store.dispatch(type.GetClubsList, () => {
            this.clubs = store.state.club.clubs
        })
        store.dispatch(type.GetClubsRelateSelf, () => {
            this.clubsJoin = [...store.state.club.clubsJoin]
        })
        store.dispatch(type.GetClubsRecommend, () => {
            this.clubsRecommend = [...store.state.club.clubsRecommend]
        })
    }
};
</script>
<style scoped>
.lists {
    width: 100%;
    box-sizing: border-box;
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
</style>

