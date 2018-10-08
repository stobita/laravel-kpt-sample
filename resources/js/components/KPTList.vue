<template>
  <ul v-if="isDisplay" class="kpt-list">
    <draggable v-model="kptList" :move="itemMove">
      <div v-for="item in kptList" :key="item.order">
        <div class="kpt-item">
          {{item.content}}
        </div>
      </div>
    </draggable>
  </ul>
</template>

<script>
import draggable from "vuedraggable";
export default {
  props: ["statusKey"],
  components: {
    draggable
  },
  computed: {
    kptList() {
      return this.$store.getters.getKPT(this.statusKey);
    },
    kptList: {
      get() {
        return this.$store.getters.getKPT(this.statusKey);
      },
      set(value) {
        console.log(value);
        this.$store.dispatch("updateKPTList", { list: value });
      }
    },
    isDisplay() {
      return this.$store.state.displayStatus === this.statusKey;
    }
  },
  methods: {
    itemMove: (event, originalEvent) => {
      console.log("=============");
      console.log(event);
      console.log(originalEvent);
      console.log("=============");
    }
  }
};
</script>

<style>
.kpt-list {
  flex: 1;
  padding: 0;
  margin: 0;
}
</style>
