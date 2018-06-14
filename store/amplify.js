export const state = () => ({
  username: ''
})

export const mutations = {
  SET_USERNAME: (state, username) => state.username = username,
  CLEAR_USERNAME: (state) => state.username = ''
}

export const actions = {
  setUsername: (context, username) => context.commit('SET_USERNAME', username),
  clearUsername: (context) => context.commit('CLEAR_USERNAME')
}

export const getters = {
  username: (state) => state.username
}
