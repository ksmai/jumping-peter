<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let label = "";
  export let value = false;

  function onChange(e: Event) {
    const target = e.target as HTMLInputElement;
    value = Boolean(target.checked);
    dispatch("change", { value });
  }
</script>

<div class="toggle">
  {label}
  <label class="toggle__label" class:toggle__label--active={value}>
    <input
      class="toggle__checkbox"
      type="checkbox"
      checked={value}
      on:change={onChange}
    />
  </label>
</div>

<style lang="scss">
  .toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__checkbox {
      display: none;
    }

    &__label {
      background-color: var(--color-secondary-dimmed);
      width: 2rem;
      height: 1rem;
      border-radius: 1rem;
      position: relative;
      cursor: pointer;

      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 1.5rem;
        background-color: var(--color-disabled);
        top: -0.25rem;
        left: -0.25rem;
        z-index: 1;
        transition: transform 0.1s ease-in-out;
      }

      &--active::after {
        transform: translateX(1rem);
        background-color: var(--color-secondary);
      }
    }
  }
</style>
