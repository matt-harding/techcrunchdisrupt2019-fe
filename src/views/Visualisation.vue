<template>
  <div>
    <div id="viz"></div>Cypher query:
    <textarea rows="4" cols="50" id="cypher"></textarea>
    <br />
    <input type="submit" value="Submit" id="reload" />
    <input type="submit" value="Stabilize" id="stabilize" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import * as NeoVis from "neovis.js";
const NeoVis = require('neovis.js');
@Component({
  components: {}
})
export default class Splash extends Vue {
  viz: any;
  draw() {
    var config = {
      container_id: "viz",
      server_url: "bolt://localhost:7687",
      server_user: "neo4j",
      server_password: "techcrunch",
      labels: {
        //"Character": "name",
        Character: {
          caption: "name",
          size: "pagerank",
          community: "community"
          //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
        }
      },
      relationships: {
        INTERACTS: {
          thickness: "weight",
          caption: false
        }
      },
      initial_cypher: "MATCH (n)-[r:INTERACTS]->(m) RETURN n,r,m"
    };
    this.viz = new NeoVis.default(config);
    this.viz.render();
    console.log(this.viz);
  }

  async mounted() {
      this.draw();
  }
}
</script>
<style lang="scss">
</style>