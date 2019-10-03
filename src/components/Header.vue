<template>
  <div class="header">
    <a class="header-logo-link" href target="_blank">
      <img src="./../assets/Pawgraphlogo.svg" alt="Project name logo" />
    </a>
    <nav class="header-nav">
      <button class="button" v-on:click="openModal()">Add Report</button>
    </nav>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Header extends Vue {
  private openModal() {
    this.$store.commit("setModalTitle", "Disease Reporting");
    this.$store.commit("setModalActive", true);
  }
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  border-top: 1px solid #dcdcdc;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  background-color: transparent;

  .header-logo-link {
    display: flex;
    align-items: center;
    height: 100%;
    color: red;

    img {
      height: 16px;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  .header-nav {
    a {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>