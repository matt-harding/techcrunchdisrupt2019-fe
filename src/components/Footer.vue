<template>  
  <div class="footer" :class="{'footer--fixed' : isFixed}">
    <a class="footer-logo-link" href="" target="_blank">
      <img src="./../assets/tc-disrupt.png" alt="Project name logo" />
    </a>
    <nav class="footer-nav">
      <a target="_blank" href="">
        By Jessica, Tuan &amp; Matt
      </a>
    </nav>
  </div>
</template>

<script lang="ts">

import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class Footer extends Vue {
  get isFixed() {
    return this.$route.name === 'splash' || this.$route.name === 'home';
  }
}

</script>

<style scoped lang="scss">
  .footer {
    width: 100%;
    border-top: 1px solid #dcdcdc;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 22px;
    background-color: #90A442;

    &--fixed {
      position: fixed;
      bottom: 0;
      border-color: rgba(255, 255, 255, .3);

      .footer-nav {
        a {
          color: white;

          &:hover {
            opacity: .6;
          }
        }
      }
    }

    .footer-logo-link {
      display: flex;
      align-items: center;
      height: 100%;
      color: #fff;

      img {
        height: 16px;
      }

      &:hover {
        opacity: .8;
      }
    }

    .footer-nav {
      a {
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>