export interface GeneralState {
  testData: [];
}

export interface ModalState {
    modalActive: boolean;
    title: string;
    modalLoading: boolean;
}

export interface RootState {
    general: GeneralState;
    modal: ModalState;
}