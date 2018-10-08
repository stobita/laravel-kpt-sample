<template>
  <div class="kpt-label">
    <ul class="label-list">
      <li v-for="item in kptObjectList" class="label-item" v-bind:class="labelClass(item.key)">
        <div @click="switchStatus(item.key)">
          {{item.label}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import constants from "../constants";
export default {
  computed: {
    kptObjectList() {
      console.log(constants.STATUS);
      return Object.keys(constants.STATUS).map(key => {
        return {
          key: constants.STATUS[key].KEY,
          label: constants.STATUS[key].LABEL,
          className: constants.STATUS[key].CLASS
        };
      });
    }
  },
  methods: {
    switchStatus(key) {
      this.$store.dispatch("switchDisplayStatus", { key: key });
    },
    labelClass(key) {
      return {
        "keep-label": key === constants.STATUS.KEEP.KEY,
        "problem-label": key === constants.STATUS.PROBLEM.KEY,
        "try-label": key === constants.STATUS.TRY.KEY,
        active: key === this.$store.state.displayStatus
      };
    }
  }
};
</script>

<style lang="scss">
.label-list {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  .label-item {
    flex: 1;
    text-align: center;
    padding: 16px;
    font-weight: bold;
  }
}
</style>
