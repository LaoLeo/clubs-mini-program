<template>
  <div class="lists">
   <div class="list_item" v-for="item in list">
        <div class="left">
           <div class="club_img" :style="{backgroundImage:'url('+item.imgsrc+')'}"></div>
        </div>
        <div class="right">
            <div class="name">{{item.name}}</div>
            <div class="slogan">{{item.slogan}}</div>
        </div>
        <div class="follow" v-if="item.isfollow">关注</div>
        <div class="follow unfollow" v-else>已关注</div>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          {
            name: '信息技术协会(IT协会)',
            slogan: '学在其中，乐在其中，爱在其中',
            imgsrc: '../../static/images/clubsPic/it.jpg',
            isfollow: 1
          },
          {
            name: '跆拳道协会',
            slogan: '强身健体，锻炼技能，发展潜力',
            imgsrc: '../../static/images/clubsPic/taixie.jpg',
            isfollow: 1
          },
          {
            name: '师范技能协会',
            slogan: '提高师范技能，实现讲台梦想',
            imgsrc: '../../static/images/clubsPic/shixie.jpg',
            isfollow: 0
          },
          {
            name: '毽球协会',
            slogan: '学在其中，乐在其中，爱在其中',
            imgsrc: '../../static/images/clubsPic/jianqiu.jpg',
            isfollow: 0
          },
          {
            name: '轮滑协会',
            slogan: '跟花式轮滑谈场刺激的恋爱',
            imgsrc: '../../static/images/clubsPic/lunhua.jpg',
            isfollow: 1
          },
          {
            name: '自行车协会',
            slogan: '来一场收走就走的旅行',
            imgsrc: '../../static/images/clubsPic/btc.jpg',
            isfollow: 1
          },
          {
            name: '计算机协会',
            slogan: '提高师范技能，实现讲台梦想',
            imgsrc: '../../static/images/clubsPic/jixie.jpg',
            isfollow: 0
          },
          {
            name: '乒乓球',
            slogan: '提高师范技能，实现讲台梦想',
            imgsrc: '../../static/images/clubsPic/pingpang.jpg',
            isfollow: 1
          }
        ]
      }
    }
  }
</script>
<style scoped>
.lists{
   width:100%;

}
  .list_item{
    width:100%;
    height:80px;
    overflow:hidden;
    margin-top:10px;
    padding-right:12px;



  }
  .list_item .left{
    width:30%;
    height:100%;
    float:left;
        border-bottom:1px dotted #d0d0d0;

  }
  .list_item .left .club_img{
     width:60px;
     height:60px;
     background-size:100% 100%;
     background-position:center center;
     border-radius:50%;
     margin:10px auto;
     border:1px solid #d0d0d0;
  }

  .list_item .right{
    width:40%;
    height:100%;
    float:left;
    box-sizing:border-box;
    padding-top:10px;
        border-bottom:1px dotted #d0d0d0;
  }
  .list_item .right .name{
    width:140px;
   font-size:16px;
   color:#000;
   font-weight:bold;
   overflow:hidden;
  white-space:nowrap;
   text-overflow:ellipsis;
  }
  .list_item .right .slogan{
    width:150px;
   font-size:14px;
   color:#000;
   margin-top:16px;
     overflow:hidden;
  white-space:nowrap;
   text-overflow:ellipsis;

  }
.list_item  .follow{

float:right;
width:15%;
height:25px;
line-height:25px;
text-align:center;
font-size:12px;
border-radius:15px;
background:#d81e06;
color:#fff;
margin-top:26px;

margin-right:12px;
}
.list_item .unfollow{
  background:#ccc;
}

</style>

