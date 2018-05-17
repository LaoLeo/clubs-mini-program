<template>
  <div>
       <header @click="toDetail()">
            <view class="left">
            <view class="headimg" :style="{backgroundImage: avatar}"></view>
            <view class="name_sex">
                <span class="name">{{ user.name }}</span>
                <span class="sex iconfont" :class="user.sex == 1 ? 'icon-xingbienan' : 'icon-xingbienv'"></span>
                <!--<span class="sex iconfont icon-xingbienan"></span>-->
            </view>
            <view class="signature"><span>个性签名：</span>{{ user.signature || '一瓶有梦想的益力多' }}</view>
            </view>
             <view class="right"> <span class="iconfont icon-jiantou"></span></view>
       </header>

    <section>
      <ul class="message">
        <li class="bd-b">
          <span class="message_left">报名的活动</span>
          <span class="message_right iconfont icon-jiantou"></span>
        </li>
        <li class="bd-b" v-if="isClubOwn" @tap="toClubAdminPage()">
          <span class="message_left">管理club</span>
          <span class="message_right iconfont icon-jiantou"></span>
        </li>
        <li class="bd-b" v-else @tap="toClubCreatePage()">
          <span class="message_left">创建club</span>
          <span class="message_right iconfont icon-jiantou"></span>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import store from '@/store'

export default {
    data() {
        return {
            user: {},
            userState: store.state.user
        }
    },
    computed: {
        avatar() {
            let pic = this.user.picture || '../../../static/images/user.jpg'
            return `url(${pic})`
        },
        isClubOwn() {
            return Array.isArray(this.user.clubs_own) && this.user.clubs_own.length > 0
        }
    },
    methods: {
        toDetail() {
            wx.navigateTo({
                url: '/pages/personal/personal'
            })
        },
        toClubCreatePage() {
            wx.navigateTo({
                url: '/pages/clubEdit/clubEdit'
            })
        },
        toClubAdminPage() {
            wx.navigateTo({
                url: '/pages/clubAdmin/clubAdmin'
            })
        }

    },
    created() {
    },
    onShow() {
        this.user = this.userState.user
    }
}
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
/*  page{
    background: #d0d0d0;
  }*/
  header{
   width:100%;
   /*height:160px;*/
  box-sizing: border-box;
  padding:12px;
  position: relative;
      padding-bottom:20px;
  border-bottom: 16px solid #f0f0f0;
}
  header .headimg{
    width:80px;
    height:80px;
    border-radius: 50%;
    border: 1px solid #d0d0d0;
    -webkit-background-size:cover;
    background-size:cover;
    background-position: center center;
  }
header .name_sex{
  margin-top:8px;
}
  header .name{
    font-size:16px;
    color:#000;
  }
  header .sex{
    margin-left:15px;
    font-size:16px;

  }
  header .icon-xingbienv{
    color: #ff3ec9;
  }
  header  .icon-xingbienan{
  color: #75b9eb;
}
header .signature{
  width:250px;
  font-size:16px;
  margin-top:8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;


}
header .right{
  color:#333;
  position: absolute;
  top: 65px;
  right:12px;
}
header .right .icon-jiantou{
  font-size:30px;
}
section{
  margin-top: 16px;

}
  section .message{
    width:100%;
    box-sizing: border-box;
    padding:10px;

  }
  section .message li{
    width:100%;
    height:40px;
    line-height:40px;
    overflow: hidden;
    font-size:16px;
    color:#000;
    position: relative;
  }
section .message .message_left{
  float: left;
}
section .message .message_right{
  float: right;
}
section .message  .icon-jiantou {
  font-size:20px;
  color:#999;
}


</style>

