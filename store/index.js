import axios from 'axios'
import defaultData from '~/static/article.json'

export const state = () => ({
    //items: defaultData
    items: {}
})

export const mutations = {
    setItems (state, { items }) {
        state.items = items
    }
}

export const actions = {
    async fetchItems({ commit }) {
        // await axios.get('/article.json').then((response) => {
        await this.$axios.$get('https://jsondata.okiba.me/v1/json/4TRiv201127141519').then((response) => {
            commit('setItems', { items: response })
        })
    }
}

export const getters = {
    items: (state) => state.items,
    getCategories(state) {
        let categories = []
        for (const item in state.items) {
            const category = state.items[item].category
            if (categories.indexOf(category) == -1) {
                categories.push(category)
            }
        }
        return categories
    },
    getArticles(state) {
        return category => {
            let articleList = []
            for (const item in state.items) {
                const article = state.items[item]
                if (article.category === category) {
                    articleList.push(article)
                }
            }
            return articleList
        }
    },
    getSingle(state) {
        return aid => {
            let result = ''
            if (state.items) {
                for (const i in state.items) {
                    if (state.items[i].aid === aid) {
                        result = state.items[i]
                    }
                }
            } else {
                console.log('SSR failed')
            }
            return result
        }
    }
}