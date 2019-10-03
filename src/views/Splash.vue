<template>
<div>
  <div class="splash">
    <div class="graph-block">
      <Graph/>
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
}
</script>
<style lang="scss">
  .splash {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100vh - 134px);
    width: 100%;
    padding: 0 40px;

    .graph-block {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>