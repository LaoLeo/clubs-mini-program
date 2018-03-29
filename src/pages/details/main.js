import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '社团详情',
    backgroundColor: '#eee',
    backgroundTextStyle: 'light'
  }
}
