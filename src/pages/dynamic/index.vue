<template>
  <div>
      <section>
          <!--动态-->
            <div class="box" v-for="(item, index) in myDynamics" :key="item._id">
                <div class="headimg">
                    <div class="picture" :style="{backgroundImage:'url('+item.user.picture+')'}"></div>

                    <div class="club_name">
                        <view class="name">{{item.user.name}}</view>
                        <view class="date">{{item.createDate}}</view>
                    </div>

                    <div class="delete" @tap="deleteDyn(item._id, index)">删除</div>
                </div>
                <div class="content1" >
                    <div class="mood">{{item.text}}</div>
                    <div class="photo">
                        <ul>
                            <li v-for="pic in item.posters" :key="pic" :style="{backgroundImage:'url('+pic+')'}"></li>
                        </ul>
                    </div>
                    <div class="comments">
                        <span @click="Prais()">
                                <span class="iconfont icon-icon_good" :class="{'active':!isPrais}"></span>
                                <span class="good" >{{praise}}</span>
                        </span>

                        <span @click="toDetails()" >
                            <span class="iconfont icon-pinglun" ></span>
                            <span> 0 </span>
                        </span>
                    </div>
                </div>
            </div>
      </section>

  </div>
</template>

<script>
import store from "@/store"
import type from "@/utils/mutitionsType"

export default {
    data() {
        return {
            praise: 0,
            isPrais: 1,
            myDynamics: []
        }
    },
    methods: {
        deleteDyn(dId, index) {
            store.dispatch(type.DeleteDyn, {
                index,
                dId,
                cb: (data) => {
                    wx.showToast({title: '删除成功'})
                }
            })
        },
        toDetails() {
            wx.navigateTo({
                url: '/pages/comments/comments'
            })
        },
        Prais() {
            let that = this;
            if (that.isPrais) {
                that.praise++;
                that.isPrais = 0;
            }
        },
        formatDate (now) {
            var year = now.getYear();
            var month = now.getMonth() + 1;
            var date = now.getDate();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
        }
    },
    onLoad() {
        store.dispatch(type.GetMyDynamic, () => {
            this.myDynamics = store.state.user.myDynamics
        })
    }
};
</script>

<style scoped>
.bg{
    width:100%;
    height:14px;
    background-color: #f0f0f0;
    margin-top:10px;
}
header{
    width:100%;
    height:56px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}
.headimg .delete{
width: 50px;
height: 20px;
text-align: center;
line-height:20px;
border-radius: 15px;
border:1px solid #75b9eb;
color:#75b9eb;
position: absolute;
top: 20px;
right: 20px;
font-size: 14px;

}
header .search{
    width:15%;
    height:100%;
    text-align: center;
    line-height:56px;
}
header  .icon-sousuo{
    font-size:26px;
    color:#75b9eb;

}
header .tab{
    width:60%;
    height:100%;
    display: flex;
    justify-content: space-around;
    font-size:18px;
    line-height:56px;

}
header .tab .activity,
header .tab .dynamic{
    width:50%;
    height:100%;
    text-align: center;
}
header .tab .active{
    color:#75b9eb;
    border-bottom: 2px solid #75b9eb;
}
header .edit{
    width:15%;
    height:100%;
    text-align: center;
    line-height:56px;
}
header  .icon-bianji {
    font-size: 26px;
    color: #75b9eb;
}
section{
     width:100%;
     box-sizing: border-box;
 }
section .box{
     box-sizing: border-box;
     padding: 10px;
    margin-top:10px;
    border-bottom: 1px solid #d0d0d0;

}
section .box .headimg{
    position: relative;
    width:100%;
    height:56px;
    overflow: hidden;
}
section .box .headimg .picture{
    width:50px;
    height:50px;
    border-radius: 50%;
    -webkit-background-size:cover;
    background-size:cover;
    border: 1px solid #f0f0f0;
    float: left;
}
    section .box .headimg .club_name{
        float: left;
        font-size:14px;
        margin-left:20px;
        box-sizing: border-box;
        padding-top:10px;
    }
    section .box .headimg .club_name .name{
        font-size:14px;
        color: #000000;
    }
    section .box .headimg .club_name .date{
        font-size:10px;
        color: #333;
        margin-top:6px;
    }
    section .box .content{
    width:100%;
    height:160px;
    -webkit-background-size:cover;
    background-size:cover;
        background-position: center center;
        position: relative;
}
    section .box .content .message{
        position: absolute;
        bottom: 10px;
        left:10px;
        font-size:16px;
        color: #ffffff;
    }
    section .box .description{
        width:100%;
        height:30px;
        font-size:14px;
        color:#333;
        box-sizing: border-box;
        padding-left:10px;
        line-height:30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    section .box .content1 {
        width:100%;
    }
    section .box .content1 .mood{
        font-size:14px;
        padding-left:30px;

    }
    section .box .content1 .photo ul{
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        padding-left:30px;

    }
    section .box .content1 .photo li{
        width:80px;
        height:80px;
        float: left;
        background-size: cover;
        -webkit-background-size:cover;
        background-position: center center;
        margin-right:15px;
        margin-top:10px;
        /* border: 1px solid #75b9eb; */

    }
    section .box .content1 .comments{
        width:100%;
        font-size:14px;
        margin-top:20px;
        text-align: right;
    }
    section .box .content1 .comments .icon-icon_good,
    section .box .content1 .comments .icon-pinglun{
        font-size:20px;
        color:#75b9eb;
    }

    section .box .content1 .comments .active{
        font-size:22px;
        color:orangered;
    }
    section .box .content1 .comments  .good{
        margin-right:16px;
    }
    .hidden {
        visibility: hidden;
    }
</style>
