<template>
  <div class="container">
    <h1>To Do List App</h1>
    <Filters
      v-model="filteredTaskContent"
      :filteredTaskStatus="filteredTaskStatus"
      @onFilterTaskStatus="handleFilteredTaskStatus"
    />

    <div>
      <h2>Create To Do Task</h2>
      <TodoInput
        @onAddedTodoTask="handleAddedTodoTask"
      />

      <div>
        <Task
          v-for="(todoTask, index) in filteredTodoList"
          v-show="showTaskOnSelectedStatus(todoTask)"
          :key="index"
          :todoTask="todoTask"
          :index="index"
          @onEditTask="handleEditTask(todoTask, index)"
          @onDeleteTask="handleDeleteTask(index)"
          @onStatusChange="handleStatusChange(index)"
          @onEditedTodoTask="handleEditedTodoTask"
        />
      </div>
    </div>

  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput.vue'
import Task from '@/components/Task.vue'
import Filters from '@/components/Filters.vue'

export default {
  name: 'TodoListView',
  components: {
    TodoInput,
    Task,
    Filters
  },
  data: () => ({
    todoList: [],
    taskToBeEdited: null,
    filteredTaskContent: '',
    filteredTaskStatus: 'all'
  }),
  created () {
    this.retrievePreviousTodoList()
  },
  updated () {
    this.saveTodoList()
  },
  methods: {
    handleAddedTodoTask (todoTask) {
      this.todoList.push(todoTask)
    },
    handleEditedTodoTask (todoTaskEdited) {
      this.todoList.splice(todoTaskEdited.taskIndex, 1, {
        text: todoTaskEdited.text,
        isCompleted: todoTaskEdited.isCompleted
      })
    },
    handleDeleteTask (index) {
      this.todoList.splice(index, 1)
    },
    handleStatusChange (index) {
      this.todoList[index].isCompleted = !this.todoList[index].isCompleted
    },
    handleFilteredTaskStatus (status) {
      this.filteredTaskStatus = status
    },
    showTaskOnSelectedStatus (todoTask) {
      return this.filteredTaskStatus === 'all' ? true : (this.filteredTaskStatus === 'done' ? todoTask.isCompleted : !todoTask.isCompleted)
    },
    saveTodoList () {
      // Save To do list in storage to have the previous items created saved.
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
    },
    retrievePreviousTodoList () {
      const savedTodoList = JSON.parse(localStorage.getItem('todoList'))
      if (savedTodoList !== null) {
        this.todoList = savedTodoList
      }
    }
  },
  computed: {
    filteredTodoList () {
      return this.todoList
        .filter(task => task.text.toLowerCase().includes(this.filteredTaskContent.toLowerCase()))
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 1rem;

    @media (min-width: 600px) {
      margin: 0 auto;
      width: 500px;
    }

    @media (min-width: 920px) {
      width: 800px;
    }
  }
</style>
