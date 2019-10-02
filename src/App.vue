<template>
  <div id="app">
    <router-view/>
    <Footer />
    <Modal />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: 'app',
  components: {
    Footer,
    Modal
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
