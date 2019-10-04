<template>
  <div class="modal" v-bind:class="{'is-active':showModal}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{modalTitle}}</p>
      </header>
      <section class="modal-card-body">
        <div class="loading-overlay" v-if="modalLoading">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <TestForm v-else/>
      </section>
      <footer class="modal-card-foot">
        <div class="buttons">
          <button class="button button-primary" @click="submitTest()">Submit</button>
          <button class="button button-secondary" @click="closeModal()">Close</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import petgraphApi from '../api/petgraph.api';
import TestForm from '@/components/TestForm.vue';

@Component({
  components: {
    TestForm
  }
})
export default class Modal extends Vue {
  get showModal() {
    return this.$store.state.modal.modalActive;
  }

  get modalTitle() {
    return this.$store.state.modal.title;
  }

  get modalLoading() {
    return this.$store.state.modal.modalLoading;
  }

  private async submitTest() {
    this.$store.commit('setModalLoading', true);
    let response = await petgraphApi.addDiseaseToAnimal(this.$store.state.test.animal);
    let filterButton = document.getElementById('filterButton').click();
    this.$store.commit('setModalActive', false);
    this.$store.commit('setAnimal', '');
    this.$store.commit('setModalLoading', false);
  }

  private closeModal() {
    this.$store.commit('setModalActive', false);
    this.$store.commit('setAnimal', '');
  }
}
</script>

<style lang="scss" scoped>
.modal-card-foot {
  justify-content: center;
}

.modal-card-body {
  display: flex;
  justify-content: center;
}

.full-width-modal {
  width: calc(100vw - 40px);
}
</style>