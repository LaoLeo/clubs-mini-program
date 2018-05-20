<template>
    <section>
        <ul class="message">
            <li class="bd-b" @tap="toMyActivity()">
                <span class="message_left">报名的活动</span>
                <span class="message_right iconfont icon-jiantou"></span>
            </li>
            <li class="bd-b" @tap="toClubAdminPage()">
                <span class="message_left">管理社团</span>
                <span class="message_right iconfont icon-jiantou"></span>
            </li>
            <li class="bd-b"   @tap="toClubAdminPage()">
                <span class="message_left">申请</span>
                <span class="message_right iconfont icon-jiantou"></span>
            </li>
            <li class="bd-b"   @tap="toClubCreatePage()">
                <span class="message_left">通知</span>
                <span class="message_right iconfont icon-jiantou"></span>
            </li>
        </ul>
    </section>
</template>

<script>
import * as API from '@/utils/api'

export default {
    data() {
        return {

        }
    },
    computed: {
    },
    methods: {

    }
}
</script>

<style scoped>

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
        /* margin-top: 16px; */

    }
    section .message{
        width:100%;
        box-sizing: border-box;

    }
    section .message li{
        width:100%;
        height:40px;
        line-height:40px;
        overflow: hidden;
        font-size:16px;
        color:#000;
        position: relative;
        padding-left: 12px;
    }
    section .message .message_left{
        float: left;
    }
    section .message .message_right{
        float: right;
        padding-right: 30px;
    }
    section .message  .icon-jiantou {
        font-size:20px;
        color:#999;
    }


</style>
