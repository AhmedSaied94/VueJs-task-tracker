<script>
import Button from "./Button.vue";
export default {
  name: "Header",
  props: {
    title: String,
    addForm: Boolean,
  },
  computed :{
    HomePage() {
      if (this.$route.path === '/') 
      return true
      else
      return false 
    }
  },
  components: { Button },
};
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      v-show="HomePage"
      @click="$emit('add-form')"
      :text="addForm ? 'Hide' : 'Add Task'"
      :color="addForm ? 'red' : 'green'"
    />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}
</style>
