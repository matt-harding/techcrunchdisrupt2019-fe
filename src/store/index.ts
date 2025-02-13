// Useful reference: https://codeburst.io/vuex-and-typescript-3427ba78cfa8
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';

/** Import Modules */
import { modal } from './modules/modal';
import { nodes } from './modules/nodes';
import { test } from './modules/test';
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    nodes,
    modal,
    test
  }
};

export default new Vuex.Store<RootState>(store);
