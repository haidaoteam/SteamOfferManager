
const state = {
  login_type: '',
  newOfferMsgs: '',
  tradeConfirmedMsgs: '',
  allInformation: '',
  loginId: '',
  time: '',
  sendOffer: '',
  sendTime: '',
}

const actions = {


  login({ commit }, typeLogin) {
    commit('LOGIN_TYPE', typeLogin)
  },
  loginId({ commit }, loginId) {
    commit('LOGIN_ID', loginId)
  },
  newOffer({ commit }, offerMsg) {
    commit('NEW_OFFER', offerMsg)
  },
  tradeConfirmed({ commit }, confirmedMsg) {
    commit('TRADE_CONFIRMED', confirmedMsg)
  },
  information({ commit }, allInformation) {
    commit('ALL_INFORMATION', allInformation)
  },
  offerTime({ commit }, time) {
    commit('OFFER_TIME', time)
  },
  sendQuotation({ commit }, sendType) {
    commit('SEND_QUOTATION', sendType)
  },
  sendtime({ commit }, sendTime) {
    commit('SEND_TIME', sendTime)
  },


}
const mutations = {
  LOGIN_TYPE(state, typeLogin) {
    state.login_type = typeLogin
  },
  NEW_OFFER(state, offerMsg) {
    state.newOfferMsgs = offerMsg
  },
  TRADE_CONFIRMED(state, confirmedMsg) {
    state.tradeConfirmedMsgs = confirmedMsg
  },
  ALL_INFORMATION(state, allInformation) {
    state.allInformation = allInformation
  },
  LOGIN_ID(state, loginId) {
    state.loginId = loginId
  },
  OFFER_TIME(state, time) {
    state.time = time
  },
  SEND_QUOTATION(state, sendOffer) {
    state.sendOffer = sendOffer
  },
  SEND_TIME(state, sendTime) {
    state.sendTime = sendTime
  },
 
}

const getters = {
  loginType(state) {
    return state.login_type
  },
  newOfferMsg(state) {
    return state.newOfferMsgs
  },
  tradeConfirmedMsg(state) {
    return state.tradeConfirmedMsgs
  },
  allInformations(state) {
    return state.allInformation
  },
  getloginid(state) {
    return state.loginId
  },
  gettime(state) {
    return state.time
  },
  sendoffer(state) {
    return state.sendOffer
  },
  sendtime(state) {
    return state.sendTime
  },
 

}
export default {
  state,
  mutations,
  actions,
  getters
}
