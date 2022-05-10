<script>
export default {
  name: "AddTask",
  data() {
    return {
      name: "",
      day: "",
      reminder: false,
    };
  },
  props:{
    tasks: Array
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.name || !this.day) {
        alert("Please fill all data");
        return;
      }
      const newTask = {
        id:this.tasks.length > 0 ? this.tasks[this.tasks.length-1].id + 1 : 1,
        name: this.name,
        day: this.day,
        reminder: this.reminder,
      };
      this.$emit("add-task", newTask);
      this.name = "";
      this.day = "";
      this.reminder = false;
    },
  },
};
</script>

<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="name" name="name" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
