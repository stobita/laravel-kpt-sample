<template>
  <div class="kpt-form">
    <input v-model="formContent" type="text" name="content" class="form-input">
    <button @click="postKPT">追加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formContent: ""
    };
  },
  methods: {
    postKPT() {
      this.$store.dispatch("postKPT", { content: this.formContent });
    }
  }
};
</script>

<style lang="scss">
.status-list {
  display: flex;
  flex-direction: row;
  padding: 0;
}
</style>
