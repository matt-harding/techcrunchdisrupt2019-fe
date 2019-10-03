import { MutationTree, ActionTree, Module } from 'vuex';
import { RootState, NodesState } from './../types';

function initialState(): NodesState {
    return {
        graphNodes: []
    };
}

const state: NodesState = initialState();

const mutations: MutationTree<NodesState> = {
    setNodes(nodesState, graphNodes: []) {
        nodesState.graphNodes = graphNodes;
    }
};

const actions: ActionTree<NodesState, RootState> = {
};

export const nodes: Module<NodesState, RootState> = {
    state,
    mutations,
    actions
};
