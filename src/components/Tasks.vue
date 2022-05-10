<script>
import Task from "./Task.vue";
export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: { Task },
};
</script>

<template>
  <div v-for="task in tasks" :key="task.id">
    <Task
      @reminder="$emit('reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>
