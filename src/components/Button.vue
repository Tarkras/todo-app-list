<template>
  <button :class="styles">
    <span class="btn__text">
      {{buttonText}}
    </span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'GenericButton',
  props: {
    buttonText: String,
    styles: String
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    margin-left: 1rem;
    cursor: pointer;
    background-color: #161E33;
    border: none;
    border-radius: 5px;
    box-shadow: 0 20px 40px -16px rgb(0 0 0 / 15%);
    padding: 1rem 3rem;

    &__text {
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 800;
      color:white;
    }

    &__add {
      margin-left: 0;
      margin-top: 0.5rem;
      align-self: center;
      width: 7.875rem;

      &:hover {
        background-color: #0D111D;
      }

      @media (min-width: 600px) {
        margin-left: 1rem;
        margin-top: 0;
      }
    }

    &__save {
      background-color: #3BC56E;

      &:hover {
        background-color: #46E380;
      }
    }

    &__filter {
      padding: 1rem 3rem;
      margin-left: 0;
      align-self: center;
      width: 100%;
      border-bottom: 3px solid #161E33;

      &:hover {
        background-color: #0D111D;
      }
    }
  }

  .btn__save .btn__text {
    color: #2B3B63;
  }

  .active {
    background-color: #0D111D;
    border-bottom: 3px solid #C70039;
  }
</style>>
