<template>
  <div style="height: calc(100vh - 134px);">
    <nav class="level">
      <!-- Left side -->
      <div class="level-left">
        <p class="level-item">
          <button class="button button-primary" v-on:click="filterGraph()">
            <span class="icon">
              <i class="material-icons">bug_report</i>
            </span>
            <span>Filter For Infection Risk</span>
          </button>
        </p>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <p class="level-item">
          <button class="button button-secondary" v-on:click="stabilizeGraph()">
            <span class="icon">
              <i class="material-icons">grain</i>
            </span>
            <span>Stabilize</span>
          </button>
        </p>
      </div>
    </nav>
    <div id="viz"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import petgraphApi from '../api/petgraph.api';
const NeoVis = require("neovis.js");

@Component({
  components: {}
})
export default class Graph extends Vue {
  public viz: any;
  public draw() {
    const config = {
      container_id: "viz",
      server_url: "bolt://localhost:7687",
      server_user: "neo4j",
      server_password: "techcrunch",
      arrows: true,
      labels: {
        Animal: {
          caption: "name",
          size: "pagerank",
          community: "community"
        }
      },
      relationships: {
        LINKS: {
          thickness: "weight",
          caption: false
        }
      },
      initial_cypher: "MATCH p=()-->() RETURN p LIMIT 200"
    };
    this.viz = new NeoVis.default(config);
    this.viz.registerOnEvent("completed", this.render_completed);
    this.viz.render();
  }

  public render_completed(stats: any) {
    this.$store.commit("setNodes", this.viz._nodes);
  }

  stabilizeGraph() {
    this.viz.stabilize();
  }

  filterGraph() {
    this.viz.renderWithCypher("MATCH p=()-->() RETURN p LIMIT 200");
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
  max-height: calc(100vh - 200px);
}

.level {
  background-color: white;
  padding: 0;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
}

canvas {
  max-height: calc(100vh - 200px);
}

.vis-network {
  max-height: calc(100vh - 200px);
}
</style>