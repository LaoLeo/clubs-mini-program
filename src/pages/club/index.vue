<template>
  <div class="lists">
    <div class="list_title">
      <div>我的社团</div>
    </div>
    <div class="list_item">
        <div class="left"></div>
        <div class="right"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style scoped>
.lists{
   width:100%;
   border:1px solid #000;
  padding-left:50rpx;

}
.list_title{
    color:#d81e06;
    font-size:30rpx;
    font-weight:bolder;

  }
  .list_item{
    width:100%;
    height:100px;
    border:1px solid red;
  }
</style>
