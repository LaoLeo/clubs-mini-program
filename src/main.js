import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    // 这个字段走 app.json
    config: {
        pages: ['^pages/index/index', 'pages/club/club', 'pages/message/message', 'pages/mine/mine', 'pages/details/details', 'pages/personal/personal', 'pages/activity/activity', 'pages/comments/comments', 'pages/events/events', 'pages/clubEdit/clubEdit', 'pages/clubAdmin/clubAdmin', 'pages/myActivity/myActivity'], // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'Clubs',
            navigationBarTextStyle: 'black'
        },
        tabBar: {
            color: '#a9b7b7',
            selectedColor: '#d81e06',
            borderStyle: 'white',
            list: [{
                selectedIconPath: 'static/images/home_active.png',
                iconPath: 'static/images/home.png',
                pagePath: 'pages/index/index',
                text: '首页'
            }, {
                selectedIconPath: 'static/images/clubs_active.png',
                iconPath: 'static/images/clubs.png',
                pagePath: 'pages/club/club',
                text: '社团'
            }, {
                selectedIconPath: 'static/images/message_active.png',
                iconPath: 'static/images/message.png',
                pagePath: 'pages/message/message',
                text: '消息'
            }, {
                selectedIconPath: 'static/images/me_active.png',
                iconPath: 'static/images/me.png',
                pagePath: 'pages/mine/mine',
                text: '我的'
            }]
        }
    }
}
