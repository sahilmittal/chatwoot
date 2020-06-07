import Vue from 'vue';
import types from '../../mutation-types';
import getters from './getters';
import actions from './actions';

const state = {
  records: {},
  uiFlags: {
    isFetching: false,
  },
};

// mutations
const mutations = {
  [types.ADD_CONVERSATION]($state, conversation) {
    Vue.set($state.records, conversation.id, conversation);
  },
  [types.UPDATE_CONVERSATION]($state, conversation) {
    Vue.set($state.records, conversation.id, conversation);
  },
  [types.SET_ALL_CONVERSATION]($state, conversationList) {
    conversationList.forEach(conversation => {
      Vue.set($state.records, conversation.id, conversation);
    });
  },
  [types.SET_CONVERSATION_UI_FLAG]($state, { isFetching }) {
    Vue.set($state.uiFlags, 'isFetching', isFetching);
  },
  [types.RESET_CONVERSATION]($state) {
    $state.records = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
