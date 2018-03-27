import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '社团列表',
    // navigationBarBackgroundColor: '#eb3606',
    backgroundColor: '#eee',
    backgroundTextStyle: 'light'
  }
}
