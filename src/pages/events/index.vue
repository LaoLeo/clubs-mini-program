<template>
    <div class="content">
         <header>
              <view class="title">{{ activity.title }}</view>
              <view class="date">
                    <span>{{ activity.author.name }}&nbsp;发表于：</span><span class="time">{{ activity.meta.updateDate }}</span>
              </view>
         </header>
        <section>
            <view class="picture" :style="{backgroundImage: 'url('+ first_poster +');'}"></view>
            <view class="description">
                {{ activity.content }}
            </view>
            <view class="picture" v-for="poster in last_posters" :key="poster" :style="{backgroundImage: 'url('+ poster +');'}"></view>

            <view class="read"><span>阅读量：</span><span>0</span></view>
        </section>
        <view class="btn-group" v-if="canApplicate">
            <div class="btn" @tap="applicate()">报名</div>
        </view>
    </div>
</template>

<script>
import store from '@/store'
import * as API from '@/utils/api'
import { showErrorModel } from '@/utils'
import { NEED_TO_BIND_PHONE } from '@/utils/config'

export default {
    data() {
        return {
            activity: {},
            first_poster: '',
            last_posters: []
        };
    },

    computed: {
        canApplicate() {
            if (parseInt(this.activity.type) === 0) return false

            return true
        }
    },

    methods: {
        applicate() {
            API.request(
                'post',
                API.applicate,
                {
                    activityId: this.activity._id
                }
            ).then(res => {
                if (res.code !== 200) {
                    if (res.code === NEED_TO_BIND_PHONE) {
                        showErrorModel(res.code, res.msg, '前往', () => {
                            wx.navigateTo({
                                url: '/pages/personal/personal'
                            })
                        })
                    } else {
                        showErrorModel(res.code, res.msg)
                    }
                    return
                }
                wx.showToast({
                    title: '报名成功',
                    success: () => {
                        setTimeout(() => {
                            wx.navigateBack()
                        }, 2000)
                    }
                })
            })
        }
    },

    created() {
    },

    onLoad() {
        console.log(this.$root.$mp.query)
        let query = this.$root.$mp.query
        let isParticipate = query.isParticipate
        if (!isParticipate) {
            let index = query.index
            this.activity = store.state.user.activities[index]
            this.first_poster = this.activity.posters[0]
            this.last_posters = this.activity.posters.length > 1 ? this.activity.posters.slice(1) : []
        } else {
            API.request(
                'get',
                API.getActivity,
                {
                    aId: query.id
                }
            ).then(res => {
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }

                this.activity = res.data.activity
                this.first_poster = this.activity.posters[0]
                this.last_posters = this.activity.posters.length > 1 ? this.activity.posters.slice(1) : []
            })
        }
    }
};
</script>

<style scoped>
    .content header{
        width:100%;
        box-sizing: border-box;
    }
    .content header .title{
        text-align: center;
        font-size:20px;
    }
    .content header .date{
        font-size:14px;
        color:#666;
        padding-left:12px;
        margin-top:8px;
    }
    .content header .date .time{
        margin-left:20px;
    }
    .content section{
        width:100%;
        box-sizing: border-box;
        padding:12px;
        text-indent: 2em;
        margin-top:10px;
    }
    .content section .description{
        font-size:16px;
        color:#333;

    }
    .content section .picture{
        width:90%;
        height:150px;
        -webkit-background-size: cover;
        background-size:cover;
        margin:10px auto;

    }
    .content section .read{
        float: right;
        font-size:14px;
        color:#666;
        margin-top:10px;
    }
    .btn-group {
        width:100%;
        display: flex;
    }
    .btn-group .btn{
        /* flex: 1; */
        width:120px;
        height:36px;
        text-align: center;
        line-height:36px;
        border-radius: 18px;
        margin:20px auto;
        background-color: #76b9eb;
        color: #ffffff;
        margin: 60px auto;
    }
</style>
