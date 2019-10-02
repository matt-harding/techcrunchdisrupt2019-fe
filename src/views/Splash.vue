<template>
  <div class="splash">
    <div class="logo-block">
      <h1>Techcrunch Disrupt 2019</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import api from '@/api/api';

@Component({
  components: {
  },
})
export default class Splash extends Vue {
  
  get testData() {
    return this.$store.state.general.testData;
  }

  async mounted () {
    const apiPath = process.env.VUE_APP_BACKEND_URL || '';
    let data = await api.getTestData(apiPath);
    this.$store.commit('setTestData', data);
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