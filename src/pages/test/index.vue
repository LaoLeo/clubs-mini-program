<template>
    <div class="container" @click="clickHandle('test click', $event)">

        <div class="userinfo" @click="bindViewTap">
            <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
                <div class="userinfo-nickname">
                <card :text="userInfo.nickName"></card>
            </div>
        </div>

        <div class="usermotto">
            <div class="user-motto">
                <card :text="motto"></card>
            </div>
        </div>

        <form class="form-container">
            <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
            <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
        </form>
    </div>
</template>

<script>
import card from '@/components/card';

export default {
    data() {
        return {
            motto: 'Hello World',
            userInfo: {}
        };
    },

    components: {
        card
    },

    methods: {
        bindViewTap() {
            const url = '../logs/logs';
            wx.navigateTo({ url });
        },
        getUserInfo() {
            // 调用登录接口
            wx.login({
                success: () => {
                    wx.getUserInfo({
                        success: res => {
                            this.userInfo = res.userInfo;
                        }
                    });
                }
            });
        },
        clickHandle(msg, ev) {
            console.log('clickHandle:', msg, ev);
        }
    },

    created() {
        // 调用应用实例的方法获取全局数据
        this.getUserInfo();
    },

    onShow() {
        console.log(this.$root.$mp.query)
    }
};
</script>

<style scoped>

</style>
