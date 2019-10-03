export interface NodesState {
  graphNodes: [];
}

export interface ModalState {
    modalActive: boolean;
    title: string;
    modalLoading: boolean;
}

export interface RootState {
    nodes: NodesState;
    modal: ModalState;
}