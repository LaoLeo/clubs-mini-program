<template>
  <div>
      <h1>首页首页</h1>
      <button @click="add">+</button>
      <ul>
        <li v-for="item in list" :key="item.id">{{ item.name }}</li>
      </ul>
  </div>
</template>

<script>
  import store from '@/store'
  import type from '@/utils/mutitionsType'

  export default {
    data () {
      return {
        list: store.state.message.clubsList
      }
    },
    methods: {
      add() {
        store.commit(type.ADDCLUB)
      },
      changeTitle() {
        wx.setNavigationBarTitle({
          title: '首页'
        })
      }
    },
    created() {
      this.changeTitle()
    }
  }
</script>

<style scoped>

</style>
