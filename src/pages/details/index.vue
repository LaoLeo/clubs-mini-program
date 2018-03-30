<template>
    <div class="details">
       <header>
           <div class="club_img" style="background-image: url(../../static/images/it/bg1.jpg);">
               <view class="follow">关注</view>
           </div>
           <div class="club_msg">
               <div class="msg_left">
                   <div class="base_img">
                        <div class="club_headimg" style="background-image:url(../../static/images/clubsPic/it.jpg);"></div>
                         <div class="club_name">IT协会</div>
                   </div>
                   <div class="slogan">学在其中，爱在其中，乐在其中哈哈哈哈哈哈哈哈哈</div>
               </div>
               <div class="msg_right">
                   <div class="activity">
                       <span>活动 :</span> <span> 230</span>
                   </div>
                   <div class="member">
                       <span>会员 :</span> <span> 502</span>
                   </div>
               </div>
           </div>
       </header>
        <section>
            <ul>
                <li @click="tabChange(1)" :class="{ active: current_index==1 }" >简介</li>
                <li @click="tabChange(2)" :class="{ active: current_index==2 }" >活动</li>
                <li @click="tabChange(3)" :class="{ active: current_index==3 }" >课程</li>
            </ul>

             <!--社团简介-->
            <div class="description" v-show="current_index==1">
                IT信息技术协会是以信息技术为基础，致力于网络技术、编程技术、多媒体技术的开发、研究、培训及实践的综合性学术性社团。协会宗旨：普及IT知识，创新科技成果。协会口号：学在其中，乐在其中，爱在其中。我们是一个专业的学习平台，一个为广大同学提供学习、实践、交流机会的平台。
            </div>

            <!--活动列表-->
            <div class="activity_con" v-show="current_index==2">
                <div class="activity_item">
                      <div class="activity_top">
                           <div class="club_pic" style="background-image: url(../../static/images/clubsPic/it.jpg);">
                           </div>
                           <div class="club_nick">
                               <div class="club">IT协会</div>
                               <div class="date">2018/03/04 14:34</div>
                           </div>
                      </div>
                      <div class="activity_bottom">
                          PS设计大赛
                      </div>
                </div>
                <div class="activity_item">
                    <div class="activity_top">
                        <div class="club_pic" style="background-image: url(../../static/images/clubsPic/it.jpg);">
                        </div>
                        <div class="club_nick">
                            <div class="club">IT协会</div>
                            <div class="date">2018/03/04 14:34</div>
                        </div>
                    </div>
                    <div class="activity_bottom">
                        C语言编程大赛
                    </div>
                </div>
            </div>
             <!--课程介绍-->
            <div class="course_con" v-show="current_index==3">
                <div>
                    <span>这里可以编辑本学期的课程噢</span>
                    <span class="edit iconfont icon-bianji"></span>
                </div>
                <!--<div class="course">-->
                    <!--<div class="course_name">JS入门基础</div>-->
                    <!--<div class="course_content"><span>内容:  </span>学习JavaScript入门编程很重要噢</div>-->
                    <!--<div class="course_time"><span>时间:  </span>本周六14：:0-16:00</div>-->
                <!--</div>-->
                <div class="course" v-for="item in courses">
                    <div class="course_name">{{item.name}}</div>
                    <div class="course_content"><span>内容:  </span>{{item.content}}</div>
                    <div class="course_time"><span>时间:  </span>{{item.time}}</div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: "",
            courses: [
                {
                    name: 'JS入门基础',
                    content: '学习JavaScript入门编程很重要噢',
                    time: '本周六14：:0-16:00',
                    id: 1
                },
                {
                    name: 'php入门教程',
                    content: 'php世界上最好的语言后哈哈哈哈哈哈后',
                    time: '本周六14：:0-16:00',
                    id: 2
                },
                {
                    name: 'node.js入门基础',
                    content: '学习JavaScript入门编程很重要噢',
                    time: '本周六14：:0-16:00',
                    id: 3
                }
            ],
            current_index: 1
        };
    },
    methods: {
        tabChange(index) {
            this.current_index = index
        }
    },
    onShow() {
        console.log(this.$root.$mp.query);
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
}
.details section{
    width:100%;
    height:52px;

}
.details section ul{
    width:100%;
    height:50px;
    overflow: hidden;
}
.details section ul li{
    width:33%;
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
    box-sizing: border-box;
    padding-left:12px;
    width:100%;
    height:100px;
    border: 1px solid #d0d0d0;
    margin-top:10px;
    color: #333333;
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
    width:100%;
    box-sizing: border-box;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    margin-top:10px;
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
    background-color: #cff;
    font-size:36px;
    line-height:120px;
    text-align: center;
}
</style>

