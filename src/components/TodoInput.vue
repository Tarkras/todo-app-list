<template>
  <div class="todo-input-container">
    <input ref="todoInput" type="text" placeholder="Add new task" @keypress.enter="addTodoTask()">
    <Button @click.native="addTodoTask" :styles="'btn btn__add'" :buttonText="'Add'" />
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'TodoInput',
  components: {
    Button
  },
  methods: {
    addTodoTask () {
      let input = this.$refs.todoInput

      if (input.value !== '') {
        this.$emit('onAddedTodoTask', {
          text: input.value,
          isCompleted: false
        })
      }
      input.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  input {
    width: 100%;
    padding: 1rem 0.5rem;

    border-bottom: 8px solid #161E33;
    border-radius: 5px;

    &:focus {
      outline-color: #C70039;
    }
  }

  .todo-input-container {
    display: flex;
    flex-direction: column;
    margin: 1rem 0 2rem 0;

    @media (min-width: 600px) {
      flex-direction: row;
    }
  }
</style>>
