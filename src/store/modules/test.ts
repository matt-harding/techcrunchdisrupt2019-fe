import { MutationTree, ActionTree, Module } from 'vuex';
import { RootState, TestState } from './../types';

function initialState(): TestState {
    return {
        animal: '',
        type: '',
        testDate: new Date(),
        resultDate: new Date(),
        outcome: ''
    };
}

const state: TestState = initialState();

const mutations: MutationTree<TestState> = {
    setAnimal(testState, animal: string) {
        testState.animal = animal;
    }
};

const actions: ActionTree<TestState, RootState> = {
};

export const test: Module<TestState, RootState> = {
    state,
    mutations,
    actions
};
