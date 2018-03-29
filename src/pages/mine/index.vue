<template>
<<<<<<< HEAD
  <div>
       <header >
             <view class="left">
               <view class="headimg" style="background-image: url(../../static/images/user.jpg);"></view>
               <view class="name_sex">
                 <span class="name">酸奶益力多</span>
                 <span class="sex iconfont icon-xingbienv"></span>
                 <!--<span class="sex iconfont icon-xingbienan"></span>-->
               </view>
               <view class="signature"><span>个性签名：</span>有梦想的益力多,有梦想的益力多</view>
             </view>
             <view class="right"> <span class="iconfont icon-jiantou"></span></view>
       </header>

    <section>
      <ul class="message">
        <li class="bd-b">
          <span class="message_left">所在社团</span>
          <span class="message_right iconfont icon-jiantou"> </span>
        </li>
        <li class="bd-b">
          <span class="message_left">我的动态</span>
          <span class="message_right iconfont icon-jiantou"> </span>
        </li>
        <li class="bd-b">
          <span class="message_left">我的角色</span>
          <span class="message_right">部长</span>
        </li>
        <li class="bd-b">
          <span class="message_left">手机</span>
          <span class="message_right">18813960131</span>
        </li>
        <li class="bd-b">
          <span class="message_left">QQ</span>
          <span class="message_right">1519025391</span>
        </li>
        <li class="bd-b">
          <span class="message_left">微信</span>
          <span class="message_right">18813960131</span>
        </li>
      </ul>
    </section>
  </div>
=======
    <div>
        <h1>个人中心</h1>
        <h1>哈哈哈</h1>
    </div>
>>>>>>> 4ce2e8f241c44407a6320def42046aef4e79e2c0
</template>
<script>
export default {

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
   height:160px;
  box-sizing: border-box;
  padding:12px;
  position: relative;
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

