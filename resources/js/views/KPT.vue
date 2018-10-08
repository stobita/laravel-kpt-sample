<template>
  <div>
    <KPTLabel/>
    <div @click="toggleKPTForm(!formActive)">
      <div v-if="!formActive">
        <font-awesome-icon icon="plus" />
      </div>
      <div v-else>
        <font-awesome-icon icon="times" />
      </div>
    </div>
    <div v-if="formActive">
      <KPTForm/>
    </div>
    <div >
      <div v-for="object in kptObjectList" class="kpt-container">
        <KPTList :statusKey="object.key"/>
      </div>
    </div>
  </div>
</template>

<script>
import KPTForm from "../components/KPTForm";
import KPTLabel from "../components/KPTLabel";
import KPTList from "../components/KPTList";
import constants from "../constants";
export default {
  created() {
    this.fetchKPT();
  },
  components: {
    KPTForm,
    KPTLabel,
    KPTList
  },
  computed: {
    kptObjectList() {
      return Object.keys(constants.STATUS).map(key => {
        return {
          key: constants.STATUS[key].KEY,
          label: constants.STATUS[key].LABEL,
          className: constants.STATUS[key].CLASS
        };
      });
    },
    formActive() {
      return this.$store.state.formActive;
    }
  },
  methods: {
    fetchKPT() {
      this.$store.dispatch("fetchKPT");
    },
    toggleKPTForm(active) {
      console.log(active);
      this.$store.dispatch("toggleKPTForm", { active });
    }
  }
};
</script>

<style>
.kpt-container {
  display: flex;
}
.kpt-item {
  border: 1px solid $border-grey;
}
</style>
