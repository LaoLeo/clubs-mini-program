import type from '@/utils/mutitionsType'
import { TOKEN } from '@/utils/config'

export default {
    state: {
        user: {},
        token: ''
    },
    mutations: {
        [type.EDITUSER](state, data) {
            state.user = Object.assign({}, state.user, data)
        },
        [type.SaveXAccessToken](state, token) {
            state.token = token
            try {
                wx.setStorageSync(TOKEN, token)
            } catch (e) {
                console.log('token存储失败,err：' + e)
            }
        }

    },
    actions: {}
}
