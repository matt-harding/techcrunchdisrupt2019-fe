import { MutationTree, ActionTree, Module } from 'vuex';
import { RootState, GeneralState } from './../types';

function initialState(): GeneralState {
    return {
        testData: []
    };
}

const state: GeneralState = initialState();

const mutations: MutationTree<GeneralState> = {
    setTestData(generalState, testData: any) {
        generalState.testData = testData;
    }
};

const actions: ActionTree<GeneralState, RootState> = {
};

export const general: Module<GeneralState, RootState> = {
    state,
    mutations,
    actions
};
