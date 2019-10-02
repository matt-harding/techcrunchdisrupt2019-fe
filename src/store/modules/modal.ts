import { MutationTree, ActionTree, Module } from 'vuex';
import { RootState, ModalState } from './../types';

function initialState(): ModalState {
    return {
        modalActive: false,
        title: '',
        modalLoading: false,
    };
}

const state: ModalState = initialState();

const mutations: MutationTree<ModalState> = {
    setModalActive(modalState, modalActive: boolean) {
        modalState.modalActive = modalActive;
    },
    setModalTitle(modalState, title: string) {
        modalState.title = title;
    },
    setModalLoading(modalState, isLoading: boolean) {
        modalState.modalLoading = isLoading;
    }
};

const actions: ActionTree<ModalState, RootState> = {
};

export const modal: Module<ModalState, RootState> = {
    state,
    mutations,
    actions
};
