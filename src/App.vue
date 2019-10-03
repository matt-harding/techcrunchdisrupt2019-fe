<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
    <Modal/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Modal from '@/components/Modal.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Modal,
    Footer
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
