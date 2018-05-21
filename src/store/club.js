import type from '@/utils/mutitionsType'
import * as API from '@/utils/api'
import { showErrorModel } from '@/utils'

export default {
    state: {
        info: {},
        activities: [],
        clubs: [],
        clubsJoin: [],
        clubsRecommend: []
    },
    mutations: {
        [type.AddClub](state, data) {
            state.info = data
        },
        [type.CreateActivity](state, data) {
            state.activities.unshift(data)
        },
        [type.GetClubsList](state, data) {
            state.clubs = data.clubsList
        },
        [type.GetClubsRelateSelf](state, data) {
            state.clubsJoin = data.clubs_join
            state.info = data.clubs_own
        },
        [type.GetClubsRecommend](state, data) {
            state.clubsRecommend = data.clubs_recommend
        }
    },
    actions: {
        [type.GetClubsList]({commit}, cb) {
            API.request(
                'get',
                API.getClubList,
                {
                    page: 1,
                    column: 10
                }
            ).then(res => {
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }
                commit(type.GetClubsList, res.data)
                cb && cb(res.data)
            })
        },
        [type.GetClubsRelateSelf]({commit}, cb) {
            API.request(
                'get',
                API.getClubsRelateSelf
            ).then(res => {
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }
                commit(type.GetClubsRelateSelf, res.data)
                cb && cb(res.data)
            })
        },
        [type.GetClubsRecommend]({commit}, cb) {
            API.request(
                'get',
                API.getClubsRecommend
            ).then(res => {
                if (res.code !== 200) {
                    showErrorModel(res.code, res.msg)
                    return
                }
                commit(type.GetClubsRecommend, res.data)
                cb && cb(res.data)
            })
        }
    }
}
