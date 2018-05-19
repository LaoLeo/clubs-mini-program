import type from '@/utils/mutitionsType'

export default {
    state: {
        club: {}
    },
    mutations: {
        [type.AddClub](state, data) {
            state.club = data
        }
    },
    actions: {}
}
