import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        navigationBarTitleText: '活动详情',
        // navigationBarBackgroundColor: '#eb3606',
        backgroundColor: '#eee',
        backgroundTextStyle: 'light'
    }
}
