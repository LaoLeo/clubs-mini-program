import type from '@/utils/mutitionsType'

export default {
    state: {
        clubsList: [{
            id: '1001',
            name: 'IT协会'
        }]
    },
    mutations: {
        [type.AddClub](state) {
            state.clubsList.push({
                id: 1002,
                name: '星星文学社'
            })
        }
    },
    actions: {}
}
