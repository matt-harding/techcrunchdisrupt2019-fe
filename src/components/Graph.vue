<template>
<div>
    <div id="viz"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
const NeoVis = require('neovis.js');

@Component({
  components: {}
})
export default class Graph extends Vue {
  public viz: any;
  public draw() {
    const config = {
      container_id: 'viz',
      server_url: 'bolt://localhost:7687',
      server_user: 'neo4j',
      server_password: 'techcrunch',
      labels: {
        Character: {
          caption: 'id',
          size: 'centrality'
        }
      },
      // relationships: {
      //   INTERACTS: {
      //     thickness: "weight",
      //     caption: false
      //   }
      // },
      initial_cypher: 'MATCH (n)-[r:LINK]->(m) RETURN n,r,m'
    };
    this.viz = new NeoVis.default(config);
    this.viz.registerOnEvent('completed', this.render_completed);
    this.viz.render();
  }

  public render_completed(stats: any) {
    this.$store.commit('setNodes', this.viz._nodes);
    console.log('Completed with', stats.record_count, 'records');
  }

  get nodes() {
    return this.$store.state.nodes.graphNodes;
  }

  public async mounted() {
    this.draw();
  }
}
</script>
<style lang="scss">
  #viz {
    border: 2px solid #dcdcdc;
    max-height: calc(100vh - 150px);
  }
</style>