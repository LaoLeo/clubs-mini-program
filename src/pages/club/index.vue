<template>
    <div class="lists">
        <h1>已加入</h1>
        <div v-if="clubsJoin.length > 0">
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
        <div v-else>未加入其它club</div>

        <h1>推荐</h1>
        <div class="list_item" v-for="(item,index) in clubsRecommend" :key="item._id" >
            <div class="left" >
                <div class="club_img" :style="{backgroundImage:'url('+item.picture+')'}"></div>
            </div>
            <div class="right" @click='toDetail(item._id)'>
                <div class="name">{{item.name}}</div>
                <div class="slogan">{{item.signature}}</div>
            </div>

            <div class="follow" @click="follow()">加入</div>

        </div>
    </div>
</template>
<script>
import store from '@/store'
import type from '@/utils/mutitionsType'

export default {
    data() {
        return {
            user: {},
            clubs: [],
            clubsJoin: [],
            clubsRecommend: [],
            list: [
                {
                    name: '信息技术协会(IT协会)',
                    slogan: '学在其中，乐在其中，爱在其中',
                    imgsrc: '../../static/images/clubsPic/it.jpg',
                    isfollow: 1,
                    id: 1
                },
                {
                    name: '跆拳道协会',
                    slogan: '强身健体，锻炼技能，发展潜力',
                    imgsrc: '../../static/images/clubsPic/taixie.jpg',
                    isfollow: 1,
                    id: 2
                },
                {
                    name: '师范技能协会',
                    slogan: '提高师范技能，实现讲台梦想',
                    imgsrc: '../../static/images/clubsPic/shixie.jpg',
                    isfollow: 0,
                    id: 3
                },
                {
                    name: '毽球协会',
                    slogan: '学在其中，乐在其中，爱在其中',
                    imgsrc: '../../static/images/clubsPic/jianqiu.jpg',
                    isfollow: 0,
                    id: 4
                },
                {
                    name: '轮滑协会',
                    slogan: '跟花式轮滑谈场刺激的恋爱',
                    imgsrc: '../../static/images/clubsPic/lunhua.jpg',
                    isfollow: 1,
                    id: 5
                },
                {
                    name: '自行车协会',
                    slogan: '来一场收走就走的旅行',
                    imgsrc: '../../static/images/clubsPic/btc.jpg',
                    isfollow: 1,
                    id: 6
                },
                {
                    name: '计算机协会',
                    slogan: '提高师范技能，实现讲台梦想',
                    imgsrc: '../../static/images/clubsPic/jixie.jpg',
                    isfollow: 0,
                    id: 7
                },
                {
                    name: '乒乓球',
                    slogan: '提高师范技能，实现讲台梦想',
                    imgsrc: '../../static/images/clubsPic/pingpang.jpg',
                    isfollow: 1,
                    id: 8
                }
            ]
        };
    },
    methods: {
        // 跳转社团详情页
        toDetail(id) {
            wx.navigateTo({
                url: '/pages/details/details?id=' + id
            })
        },

        follow(index) {
            let that = this;
            if (that.list[index].isfollow === 1) {
                that.list[index].isfollow = 0;
            } else {
                that.list[index].isfollow = 1;
            }
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

