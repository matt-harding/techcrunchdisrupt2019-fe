<template>
  <div class="form">
    <div class="field">
      <label class="label">Test Type</label>
      <div class="control">
        <div class="select">
          <select>
            <option value>Select dropdown</option>
            <option value="distemper">Distemper</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">Test Date</label>
      <div class="control">
        <input class="input" type="date" />
      </div>
    </div>
    <div class="field">
      <label class="label">Outcome</label>
      <div class="control">
        <div class="control">
          <label class="radio">
            <input type="radio" name="testoutcome" />
            Pending
          </label>
          <label class="radio">
            <input type="radio" name="testoutcome" />
            Negative
          </label>
          <label class="radio" >
            <input type="radio" name="testoutcome" />
            Positive
          </label>
        </div>
      </div>
    </div>
      <div class="field">
      <label class="label">Results Date</label>
      <div class="control">
        <input class="input" type="date" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class TestForm extends Vue {
  async mounted() {}
}
</script>
<style lang="scss" scoped>
.form {
  height: calc(100vh - 200px);
  width: calc(100vw - 100px);
  background-color: white;
  color: black !important;
  padding: 2rem;
}
</style>
