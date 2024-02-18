<template>
  <div class="task-card">
    <div class="task-card__container d-flex justify-space-between">
      <label class="align-self-center">
        <div class="d-flex task-card__text-body" v-show="!taskEdit">
          <div class="align-self-center">
            <input class="task-card__checkbox" type="checkbox" :checked="todoTask.isCompleted" @change="$emit('onStatusChange')" />
          </div>
          <p class="task-card__text" :class="{'task-card__text--decoration-strikethrough': todoTask.isCompleted}">{{todoTask.text}}</p>
        </div>
        <input size="60" ref="editInput" class="task-card__edit-input" v-show="taskEdit" @keypress.enter="handleEditTask()" type="text">
      </label>

      <div class="d-flex">
        <div v-if="!taskEdit" class="d-flex flex-dir-column">
          <i class="material-icons material-symbols-outlined task-card__edit-icon" @click="handleShowEdit">&#xf88d;</i>
          <i class="material-icons material-symbols-outlined task-card__delete-icon" @click="$emit('onDeleteTask')">&#xe872;</i>
        </div>
        <Button v-else @click.native="handleEditTask" :buttonText="'Save'" :styles="'btn btn__save'" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'TaskCard',
    components: {
    Button
  },
  props: {
    todoTask: Object,
    index: Number
  },
  data: () => ({
    taskEdit: false
  }),
  methods: {
    handleShowEdit () {
      this.taskEdit = true
      this.$refs.editInput.value = this.todoTask.text

      this.$nextTick(function () {
        this.$refs.editInput.focus()
      })
    },
    handleEditTask () {
      this.$emit('onEditedTodoTask', {
        text: this.$refs.editInput.value,
        isCompleted: this.todoTask.isCompleted,
        taskIndex: this.index,
      })
      this.taskEdit = false
    }
  }
}
</script>


<style lang="scss" scoped>
  .task-card {
    min-height: 5rem;

    &__container {
      border-radius: 5px;
      background-color: #161E33;
      margin: 1rem 0;
      padding: 1rem;

      box-shadow: 0 20px 40px -16px rgb(0 0 0 / 15%)
    }

    &__text-body {
      cursor: pointer;
    }

    &__checkbox {
      margin-right: 0.8rem;
      width: 1rem;
      height: 1rem;
      cursor: pointer;
    }

    &__text {
      word-break: break-word;

      &--decoration-strikethrough {
        text-decoration: line-through white solid 2px;
      }
    }

    &__edit-icon {
      cursor: pointer;
      margin: 0 1.3rem;
      margin-bottom: 1.3rem;
      color: #3BC56E;
      font-size: 1.75rem;
    }

    &__delete-icon {
      cursor: pointer;
      margin-top: 2px;
      color: #C70039;
      font-size: 1.75rem;
    }

    &__edit-input-container {
      width: 600px;
    }

    &__edit-input {
      width: 100%;
      padding: 0.8rem;

      border-radius: 5px;

      &:focus {
        outline-color: #C70039;
      }
    }
  }
</style>>
