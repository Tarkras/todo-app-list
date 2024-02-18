<template>
  <div class="d-flex flex-dir-column">
    <h2>Filter your tasks</h2>
    <div class="filters">
      <ul class="filters__list">
        <li class="filters__list-item" @click="selectTaskStatus('all')">
          <Button :styles="`btn btn__filter ${filteredTaskStatus === 'all' ? 'active' : ''}`" :buttonText="'All'" />
        </li>
        <li class="filters__list-item" @click="selectTaskStatus('done')">
          <Button :styles="`btn btn__filter ${filteredTaskStatus === 'done' ? 'active' : ''}`" :buttonText="'Done'" />
        </li>
        <li class="filters__list-item" @click="selectTaskStatus('pending')">
          <Button :styles="`btn btn__filter ${filteredTaskStatus === 'pending' ? 'active' : ''}`" :buttonText="'Pending'" />
        </li>
      </ul>

      <label for="filter-task">
        <input id="filter-task" name="filterTask" placeholder="Search your task" type="text" v-model="inputVal">
        <i class="material-icons material-symbols-outlined icon-search">&#xe8b6;</i>
        <button v-if="inputVal !== ''" class="icon-close" @click="deleteTextSearch">
          <i class="material-icons material-symbols-outlined ">&#xe5cd;</i>
        </button>
      </label>
    </div>

  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'FiltersComponent',
  components: {
    Button
  },
  props: {
    value: String,
    filteredTaskStatus: String
  },
  data: () => ({
    showDeleteButton: false
  }),
  methods: {
    selectTaskStatus (status) {
      this.$emit('onFilterTaskStatus', status)
    },
    deleteTextSearch () {
      this.inputVal = ''
    }
  },
  computed: {
    inputVal: {
      set (val) {
        this.$emit('input', val)
      },
      get () {
        return this.value
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .filters {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (min-width: 920px) {
      flex-direction: row;
    }

    &__list {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      width: 10rem;
      flex-direction: column;
      align-self: center;

      @media (min-width: 600px) {
        flex-direction: row;
        width: auto;
      }
    }

    &__list-item {
      margin-right: 0;
      margin-bottom: 1rem;

      @media (min-width: 600px) {
        margin-right: 1rem;
      }
    }
  }

  input {
    width: 100%;
    padding: 1rem 2.5rem;

    border-radius: 50px;

    &:focus {
      outline-color: #C70039;
    }
  }

  label {
    position: relative;
  }

  .icon-search {
    position: absolute;
    color: black;
    top: 0.8rem;
    left: 0.8rem;
  }

  .icon-close {
    position: absolute;
    cursor: pointer;
    color: black;
    top: 0.8rem;
    right: 0.8rem;
    background-color: transparent;
    border: none;
  }
</style>