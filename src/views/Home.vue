<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";
export default {
    name:'Home',
    components:{
        Tasks,
        AddTask
    },
    props:{
        addForm:Boolean
    },
    data(){
        return {
            tasks: [],
        }
    },
    async created() {
        this.tasks = await this.fetchTasks()
    },
    methods:{
        async fetchTasks() {
        const res = await fetch('http://localhost:5500/tasks')
        const data = await res.json()
        return data
        },

        async fetchTask(id) {
        const res = await fetch(`http://localhost:5500/tasks/${id}`)
        const data = await res.json()
        return data
        },

        async deleteTask(id) {
        const res = await fetch(`http://localhost:5500/tasks/${id}`,{
            method:"DELETE",
            headers:{
            "Content-type":"application/json"
            }
        })
        // this.tasks = await this.fetchTasks()
        res.status === 200 ? this.tasks = this.tasks.filter(task => task.id !== id) :
        alert('deleting error')
        },
        async changeReminder(id) {
        // this.tasks.map(
        //   (task) =>
        //     (task.reminder = task.id === id ? !task.reminder : task.reminder)
        // );
        const task = await this.fetchTask(id)
        const updatedTask = {...task, reminder:!task.reminder}
        const res = await fetch(`http://localhost:5500/tasks/${id}`,{
            method:"PUT",
            headers:{
            "Content-type":"application/json"
            },
            body:JSON.stringify(updatedTask)
        })
        res.status === 200 ?
        this.tasks = await this.fetchTasks() :
        alert('updating failed')
        },
        async addTask(nt) {
        
        const res = await fetch('http://localhost:5500/tasks', {
            method:"POST",
            headers:{
            "Content-type":"application/json"
            },
            body:JSON.stringify(nt)
        })
        const data = await res.json()
        this.tasks = [...this.tasks, data]
        this.$emit('add-form')
        },
    },
    emits: ["delete-task", "reminder", 'add-task'],
    
}
</script>

<template>
    <AddTask :tasks="tasks" @add-task="addTask" v-if="addForm === true" />
    <Tasks
      @reminder="changeReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
</template>

