<template>
<div>
  <div class="splash">
    <div class="logo-block">
      <Graph/>
      <button class="button" v-on:click="openModal()"> Add Report</button>
    </div>
  </div>
  <Modal/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Graph from '@/components/Graph.vue';
import Modal from '@/components/Modal.vue';
import api from '@/api/api';

@Component({
  components: {
    Graph,
    Modal
  },
})
export default class Splash extends Vue {
  private openModal() {
    this.$store.commit("setModalTitle", "Disease Reporting");
    this.$store.commit("setModalActive", true);
  }
}
</script>
<style lang="scss">
  .splash {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('./../assets/splash_bg.jpg');
    color: white;
    padding: 0 40px;

    .logo-block {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 64px;
        line-height: 1.2em;
      }
    }

    .splash-description {
      font-size: 20px;
      margin-top: 25px;
      max-width: 600px;
    }
  }
</style>