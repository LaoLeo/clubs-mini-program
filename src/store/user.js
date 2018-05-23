import type from '@/utils/mutitionsType'
import { TOKEN } from '@/utils/config'
import * as API from '@/utils/api'
import { showErrorModel } from '@/utils'

export default {
    state: {
        user: {},
        isClubOwner: false,
        activities: [],
        activities_total: 0,
        participate_activities: [],
        dynamics: [],
        myDynamics: [],
        token: ''
    },
    mutations: {
        [type.EDITUSER](state, data) {
            state.user = Object.assign({}, state.user, data)

            state.isClubOwner = state.user.clubs_own && state.user.clubs_own[0]
        },
        // [type.AddClub](state, data) {
        //     state.user.clubs_own.push(data)
        // },
        [type.SaveXAccessToken](state, token) {
            state.token = token
            try {
                wx.setStorageSync(TOKEN, token)
            } catch (e) {
                console.log('token存储失败,err：' + e)
            }
        },
        [type.GetActivities](state, data) {
            state.activities = data.activities
            state.activities_total = data.total
        },
        [type.GetParticipateActivities](state, data) {
            state.participate_activities = data.activities
        },
        [type.GetDynamics](state, data) {
            state.dynamics = data.dynamics
        },
        [type.CreateDynamic](state, data) {
            state.dynamics.unshift(data.dynamic)
            state.myDynamics.unshift(data.dynamic)
        },
        [type.GetMyDynamic](state, data) {
            state.myDynamics = data.dynamics
        }
    },
    actions: {
        [type.GetActivities]({commit}, cb) {
            API.request(
                'get',
                API.getActivities,
                {
                    page: 1,
                    column: 100
                }
            ).then(res => {
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }
                commit(type.GetActivities, res.data)
                cb && cb(res.data)
            })
        },
        [type.GetParticipateActivities]({commit}, cb) {
            API.request(
                'get',
                API.applicated,
                {
                    page: 1,
                    column: 10
                }
            ).then(res => {
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }
                commit(type.GetParticipateActivities, res.data)
                cb && cb(res.data)
            })
        },
        [type.GetDynamics]({commit}, cb) {
            API.request(
                'get',
                API.getDynamics,
                {
                    page: 1,
                    column: 100
                }
            ).then(res => {
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }
                commit(type.GetDynamics, res.data)
                cb && cb(res.data)
            })
        },
        [type.CreateDynamic]({commit}, data) {
            API.request(
                'post',
                API.createDynamic,
                {
                    text: data.text,
                    posters: data.posters
                }
            ).then(res => {
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }
                commit(type.CreateDynamic, res.data)
                data.cb && data.cb(res.data)
            })
        },
        [type.GetMyDynamic]({commit, state}, cb) {
            if (state.myDynamics.length > 0) return

            API.request(
                'get',
                API.getMyDynamic
            ).then(res => {
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }
                commit(type.GetMyDynamic, res.data)
                cb && cb(res.data)
            })
        }
    }
}
