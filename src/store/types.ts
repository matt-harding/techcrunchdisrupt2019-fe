export interface NodesState {
  graphNodes: [];
}

export interface ModalState {
    modalActive: boolean;
    title: string;
    modalLoading: boolean;
}

export interface TestState {
  animal: string;
  type: string;
  testDate: Date;
  resultDate: Date;
  outcome: string;
}

export interface RootState {
    nodes: NodesState;
    modal: ModalState;
}