<template>
  <div>aaa</div>
</template>

<script>
export default {
  created() {
    this.fetchKPT()
  },
  methods: {
    fetchKPT() {
      this.$store.dispatch('fetchKPT')
    }
  }
}

</script>
