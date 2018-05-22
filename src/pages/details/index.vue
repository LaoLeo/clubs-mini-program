<template>
    <div class="details">
       <header>
           <div class="club_img" style="background-image: url(../../static/images/it/bg1.jpg);">

               <!-- 普通会员 -->
               <view class="follow" v-if="!isOwner && !isMember" @tap="applicate()">加入</view>

               <!-- 社团管理员 -->
               <!-- <div class="info" @click="showInfo()">
                   <span class="iconfont icon-36"></span>
               </div> -->

           </div>
           <div class="club_msg">
               <div class="msg_left">
                   <div class="base_img">
                        <div class="club_headimg" v-if="club.picture" :style="{backgroundImage:'url('+club.picture+')'}"></div>
                          <div class="club_headimg" v-else style="background-image: url(../../static/images/avatar.gif);"></div>
                         <div class="club_name">{{ club.name }}</div>
                   </div>
                   <div class="slogan">{{ club.signature }}</div>
               </div>
               <div class="msg_right">
                   <div class="activity">
                       <span>活动 : </span> <span v-if="club.activities.length>0"> {{ club.activities.length }}</span><span v-else> 0</span>
                   </div>
                   <div class="member" :class="{'border-none': !isOwner}" @click="toMember()">
                       <span>会员 : </span> <span v-if="club.members.length "> {{ club.members.length }}</span> <span v-else> 0</span>
                   </div>
               </div>
           </div>
       </header>
        <section>
            <ul>
                <li @click="tabChange(1)" :class="{ active: current_index==1 }" >简介</li>
                <li @click="tabChange(2)" :class="{ active: current_index==2 }" >活动</li>
                <li @click="tabChange(3)" :class="{ active: current_index==3 }" >课程</li>
                <li @click="tabChange(4)" :class="{ active: current_index==4 }" v-if="isOwner">申请</li>
            </ul>

             <!--社团简介-->
            <div class="description" v-show="current_index==1">
                {{ club.summary }}
            </div>

            <!--活动列表-->
            <div class="activity_con" v-show="current_index==2">
                <div class="activity_item" v-for="(activity, aIndex) in club.activities" :key="activity._id">
                    <div @click="toEvent(activity._id)">
                        <div class="activity_top">
                            <div class="club_pic"  v-if="club.picture" :style="{backgroundImage: 'url('+ club.picture +')'}">

                            </div>
                               <div class="club_pic" v-else style="background-image: url(../../static/images/avatar.gif);">

                            </div>

                            <div class="club_nick">
                                <div class="club">{{ club.name }}</div>
                                <div class="date">{{ activity.meta.createDate }}</div>
                            </div>
                        </div>
                             <div class="activity_title" >{{activity.title}}</div>

                        <div class="activity_bottom"  v-if="activity.posters[0]" :style="{backgroundImage: 'url('+ activity.posters[0] +')'}"></div>
                        <div class="activity_bottom" v-else style="background-image: url(../../static/images/bg.jpg);">   </div>
                        <button class="btn-delete" v-if="isOwner" @tap.stop="deleteActivity(activity._id, aIndex)">删除</button>
                    </div>
                    <div class="sign_up" @click="toSignUpDes(activity._id, activity.participants.length)">
                        <span class="sign_up_member">报名人数:</span>  <span v-if="activity.participants.length>0">{{ activity.participants.length }}</span><span v-else>  0 </span>
                        <span class="enter iconfont icon-jiantou" v-if="activity.participants.length > 0"></span>
                    </div>
                </div>
            </div>
             <!--课程介绍-->
            <div class="course_con" v-show="current_index==3">
                <div v-if="isOwner">
                    <span>这里可以编辑本学期的课程噢</span>
                    <span class="edit iconfont icon-bianji" @click="add_course=true"></span>
                </div>
                <div class="course" v-for="course in club.courses">
                    <div class="course_name">{{course.title}}</div>
                    <div class="course_content"><span>内容:  </span>{{course.content}}</div>
                    <!-- <div class="course_time" v-if="course.startTime"><span>时间:  </span>{{course.startTime + '-' + course.endTime}}</div> -->
                    <button class="btn-delete" v-if="isOwner" @tap="deleteCourse(course._id, i)">删除</button>
                </div>
            </div>
        </section>
        <!-- 申请 -->
        <section class="application">
            <div v-for="(item, i) in application" :key="item._id" v-if="item.status === 2">
                <div class="headimg">
                    <div class="picture" :style="{backgroundImage:'url('+item.applicant.picture+')'}">
                    </div>
                    <div class="club_name">
                        <view class="name">{{item.applicant.name}}</view>
                        <view class="date"> {{item.createDate}}</view>
                    </div>
                </div>
                <div class="content">
                    {{ item.introduce }}
                </div>
                <view class="btn-group">
                    <div class="release" @tap="handleApplication(0, item._id, i)">拒绝</div>
                    <div class="release" @tap="handleApplication(1, item._id, i)">同意</div>
                </view>
            </div>

        </section>

        <!--添加课程弹窗-->
        <div class="mask" @click="add_course=false;" v-show="add_course">
            <!-- 添加课程 -->
            <div class="add_course" @click.stop="" v-show="add_course">
               <view class="add_btn">添加课程</view>
                <view>
                    <span>课程名:<input type="text" v-model="course.title"></span>
                    <span>课程内容:<input type="text" v-model="course.content"></span>
                    <!-- <span>上课时间:<input type="text"></span> -->
                </view>
                <view class="submit"  @click="createCourse()" >提交课程</view>
            </div>
        </div>
    </div>
</template>
<script>
import * as API from '@/utils/api'
import store from '@/store'
import type from '@/utils/mutitionsType'
import { showErrorModel } from '@/utils'

export default {
    data() {
        return {
            id: "",
            current_index: 1,
            add_course: false,
            show_info: false,

            club: {},
            isOwner: false,
            isMember: false,
            application: [],
            course: {
                title: '',
                content: ''
            }
        };
    },
    methods: {
        deleteActivity(aId, index) {
            wx.showLoading({title: '删除中...'})
            API.request(
                'put',
                API.deleteActivity,
                {
                    activityId: aId
                }
            ).then(res => {
                wx.hideLoading()
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }

                this.club.activities.splice(index, 1)
                wx.showToast({title: '删除成功'})
            })
        },
        createCourse() {
            let that = this;
            this.add_course = false
            if (!this.course.title || !this.course.content) return
            API.request(
                'post',
                API.createCourse,
                {
                    title: this.course.title,
                    content: this.course.content
                }
            ).then(res => {
                that.course = {};
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }

                this.club.courses.push(res.data.course)
                wx.showToast({title: '添加成功'})
            })
        },
        deleteCourse(courseId, index) {
            API.request(
                'put',
                API.deleteCourse,
                {
                    cId: courseId
                }
            ).then(res => {
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }

                this.club.courses.splice(index, 1)
                wx.showToast({title: '删除成功'})
            })
        },
        handleApplication(status, aId, index) {
            let data = {
                status,
                aId,
                clubId: this.club._id
            }
            wx.showLoading({title: '处理中...'})
            API.request(
                'put',
                API.handleApplication,
                data
            ).then(res => {
                wx.hideLoading()
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }
                wx.showToast({title: '已处理'})
                setTimeout(() => {
                    this.application[index].status = status
                }, 1000)
            })
        },
        applicate() {
            wx.showLoading({title: '发送申请...'})
            API.request(
                'post',
                API.createApplication,
                {
                    clubId: this.club._id,
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
        },
        tabChange(index) {
            this.current_index = index
            console.log(this.application);
            if (index === 4 && this.application.length === 0) {
                API.request(
                    'get',
                    API.getApplication,
                    {
                        page: 1,
                        column: 100
                    }
                ).then(res => {
                    wx.hideLoading()
                    if (res.code !== 200) {
                        showErrorModel(res.code, res.msg)
                        return
                    }
                    this.application = res.data.application
                })
            }
        },
        showInfo() {
            wx.showModal({
                title: '提示',
                content: '小猪佩奇申请加入社团啦',
                success: function(res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
        },
        toMember() {
            if (!this.isOwner) return
            wx.navigateTo({
                url: '/pages/member/member'
            })
        },
        toSignUpDes(aId, num) {
            if (num === 0) return
            wx.navigateTo({
                url: `/pages/member/member?aId=${aId}`
            })
        },
        toEvent(id) {
            wx.navigateTo({
                url: `/pages/events/events?id=${id}&isParticipate=1`
            })
        }
    },
    onLoad() {
        console.log(this.$root.$mp.query);
        let myClub = this.$root.$mp.query.myClub
        let clubId
        if (!myClub) {
            clubId = this.$root.$mp.query.id
        } else {
            clubId = store.state.user.user.clubs_own[0]._id
        }

        wx.showLoading({title: '加载中'})
        store.dispatch(type.GetClubInfo, {
            data: {
                clubId
            },
            cb: data => {
                this.isMember = data.isMember
                this.club = store.state.club.clubDetail.club
                this.isOwner = store.state.club.clubDetail.isOwner
                wx.hideLoading()
            }
        })
    }
};
</script>
<style scoped>
.details{
    width:100%;
    box-sizing: border-box;
    height:280px;
}
.details header .club_img{
    width:100%;
    height:160px;
    -webkit-background-size:cover;
    background-size:cover;
    background-position: center center;
    position: relative;

}
.details header .club_img .info{

    width: 50px;
    height: 50px;
    position: absolute;
    right: 12px;
    top:8px;
}
.details  header .club_img .info .icon-36{
      font-size: 40px;
      color:red;
}


.details header .club_img .follow{
    display: inline-block;
    width:60px;
    height:25px;
    background-color: #eb3606;
    text-align: center;
    line-height:25px;
    color:#fff;
    border-radius: 15px;
    font-size:14px;
    position: absolute;
    right: 12px;
    top:12px;
}
.details header .club_msg{
    width:100%;
    height:160px;
    clear: both;
    box-sizing: border-box;
    padding-left:12px;
    padding-top:10px;
    border-bottom: 16px solid #f0f0f0;
}

.details header .club_msg .msg_left{
    width:60%;
    height:100%;
    float: left;
}
.details header .club_msg .msg_left .base_img{
    height:90px;
    overflow: hidden;
}
.details header .club_msg .msg_left .club_headimg{
    width:90px;
    height:90px;
    -webkit-background-size:cover;
    background-size:cover;
    background-position: center center;
    border: 1px solid #f0f0f0;
    float: left;
    border-radius: 50%;
}
.details header .club_msg .msg_left .club_name{
    width:100px;
    font-size:18px;
    color:#000;
    float: left;
    line-height:90px;
    margin-left:16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight:bolder;
}

.activity_title{
    line-height: 36px;
    font-size: 16px;
    color:#333333;
    margin-left: 4px;
}
.details header .club_msg .msg_left .slogan{
    width:200px;
    font-size:14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top:10px;
    color:#333;

}
.details header .club_msg .msg_right{
    width:35%;
    height:100%;
    float: right;
    font-size:16px;
    box-sizing: border-box;
    padding-top:10px;
    padding-left:20px;
}
.details header .club_msg .msg_right .activity ,
.details header .club_msg .msg_right .member{
    margin-top:20px;
    width:90%;
    height:36px;
    border:1px solid #fff;
    border-radius:25px;
    text-align:center;
    line-height:36px;
}

.details header .club_msg .msg_right .member{
    border:1px solid #75b9eb;

}
.details header .club_msg .msg_right .member.border-none {
    border: none;
}
.details section{
    width:100%;
    height:52px;

}
.details section ul{
    display: flex;
    width:100%;
    height:50px;
    overflow: hidden;
}
.details section ul li{
    /* width:33%; */
    flex: 1;
    height:50px;
    line-height:50px;
    text-align: center;
    font-size:18px;
    float: left;
    box-sizing: border-box;
}
.details section ul li:last-child{
    border-right: none;
}
.details section ul li.active{
    border-bottom: 4px solid #eb3606;
    /*color: #ffffff;*/
}
.details section .course_con{
    box-sizing: border-box;
    padding:10px;
    font-size:14px;
    color:#999999;
}

.details section  .course{
    position: relative;
    box-sizing: border-box;
    padding-left:12px;
    width:100%;
    height:80px;
    border: 1px solid #d0d0d0;
    margin-top:10px;
    color: #333333;
}
.details section  .course .btn-delete {
    position: absolute;
    right: 10px;
    top: 25px;
}
.details section .course_con .course_name{
    font-size:20px;
    margin-top:8px;
}
.details section .course_con .course_content{
    width:320px;
    font-size:16px;
    margin-top:8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

}
.details section .course_con .course_time{
    font-size:16px;
    margin-top:8px;
}
.details section .course_con .edit{
    display: inline-block;
    float: right;
    margin-right:12px;
}
.details section .course_con .icon-bianji{
    font-size:20px;
    color:#75b9eb;
}


.details section   .description{
    width:100%;
    box-sizing: border-box;
    font-size:16px;
    color:#333;
    text-indent: 2em;
    padding:12px;
    line-height:28px;

}

.details section   .activity_con{
    width:100%;
    box-sizing: border-box;
    height:400px;
    padding:10px;


}

.details section   .activity_con    .activity_item{
    position: relative;
    width:100%;
    box-sizing: border-box;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    margin-top:10px;
}
.details section   .activity_con  .activity_item .btn-delete {
    position: absolute;
    right: 10px;
    top: 10px;
}

.details section   .activity_con    .activity_item  .sign_up{
    height:30px;
    line-height:30px;
   width:100%;
    box-sizing: border-box;
    /* border: 1px solid #f0f0f0; */
    margin-top:5px;
    font-size:16px;

}

.details section   .activity_con    .activity_item  .sign_up .sign_up_member{
         line-height: 30px;
         padding-left: 4px;
}

.details section   .activity_con    .activity_item  .sign_up  .enter{
    float: right;
   font-size: 24px;
}

.details section  .activity_con    .activity_item  .activity_top{
    width:100%;
    height:70px;
    overflow: hidden;
}
.details section  .activity_con    .activity_item  .activity_top .club_pic{
    width:60px;
    height:60px;
    border-radius: 50%;
    border: 1px solid #f0f0f0;
    -webkit-background-size:cover;
    background-size:cover;
    float: left;
}
.details section  .activity_con    .activity_item  .activity_top .club_nick{
    font-size:14px;
    float: left;
    margin-left:14px;
    box-sizing: border-box;
    padding-top:4px;
}

.activity_item  .activity_top .club_nick .club{
    /*margin-top: 16px;*/
    font-size:20px;
}
.activity_item  .activity_top .club_nick .date{
    margin-top: 10px;
}
.details section  .activity_con    .activity_item  .activity_bottom{
    width:100%;
    height:120px;
     -webkit-background-size:cover;
    background-size:cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #cff;
    font-size:36px;
    line-height:120px;
    text-align: center;

}
.details .mask{
    width:100%;
    height:100%;
    position: fixed;
    left:0;
    top: 0;
    background-color: rgba(0,0,0,.4);

}
.details .mask .add_course{
    width:80%;
    height:300px;
    margin:100px auto;
    background-color: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    padding:12px;
}

.details .mask .message{
width:80%;
    height:350px;
    margin:100px auto;
    background-color: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    padding:12px;
}
details .mask .message  .title{
    font-size: 14px;
    text-align: center;
    color:#ccc;

}



.details .mask .add_course .add_btn{
    text-align: center;
    font-size:20px;
    color:#333;
}
.details .mask .add_course span{
    display: block;
    width:100%;
    height:75px;
    margin-top:2px;
}
.details .mask .add_course input{
    width:250px;
     height:40px;
     border: 1px solid #d0d0d0;
    margin-top:4px;

}
.details .mask .add_course .submit{
    width:100px;
    height:40px;
    text-align: center;
    line-height:40px;
    background-color: #eb3606;
    color:#fff;
    margin:20px auto;
    border-radius: 5px;

}

.application .headimg{
    width:100%;
    height:56px;
    overflow: hidden;
}
.application .headimg .picture{
    width:50px;
    height:50px;
    border-radius: 50%;
    -webkit-background-size:cover;
    background-size:cover;
    border: 1px solid #f0f0f0;
    float: left;
}
.application .headimg .club_name{
    float: left;
    font-size:14px;
    margin-left:20px;
    box-sizing: border-box;
    padding-top:10px;
}
.application .headimg .club_name .name{
    font-size:14px;
    color: #000000;
}
.application .headimg .club_name .date{
    font-size:10px;
    color: #333;
    margin-top:6px;
}
.btn-group {
    display: flex;
}
.btn-group .release{
    flex: 1;
    width:120px;
    height:36px;
    text-align: center;
    line-height:36px;
    border-radius: 18px;
    margin:20px auto;
    background-color: #75b9eb;
    color: #ffffff;

}

.btn-delete{
    width: 70px;
    height:30px;
    border-radius: 15px;
    background: #fff;
    border: 1px solid #75b9eb;
    font-size: 14px;
    color:#75b9eb;
    line-height: 30px;
    text-align: center;
}
</style>

