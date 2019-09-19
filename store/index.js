import Prismic from 'prismic-javascript'
import PrismicConfig from '~/prismic.config.js'

export const state = () => ({
  homepage: null
})

export const mutations = {
  SET_HOMEPAGE_DATA(state, homepage) {
    console.log(state)
    state.homepage = homepage
  },
}

export const actions = {
  async fetchHomepage({ commit }, req) {
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req })
    const document = await api.getSingle('homepage')
    commit('SET_HOMEPAGE_DATA', document)
  },
}
