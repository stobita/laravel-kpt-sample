<template>
  <div>
    <div v-for="item in keepList" class="keep">
      {{item.content}}
    </div>
    <div v-for="item in problemList" class="problem">
      {{item.content}}
    </div>
    <div v-for="item in tryList" class="try">
      {{item.content}}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.fetchKPT();
  },
  computed: {
    keepList() {
      console.log("&&&&&&&&");
      console.log(this.$store.getters.getKeep);
      console.log("88888888");
      return this.$store.getters.getKeep;
    },
    problemList() {
      return this.$store.getters.getProblem;
    },
    tryList() {
      return this.$store.getters.getTry;
    }
  },
  methods: {
    fetchKPT() {
      this.$store.dispatch("fetchKPT");
    }
  }
};
</script>
