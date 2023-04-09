<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let title = "";

  const dispatch = createEventDispatcher();
</script>

<section class="section">
  <header class="section__header">
    <h2 class="section__heading">{title}</h2>
    <button
      class="section__reset"
      type="button"
      on:click={() => dispatch("reset")}>Reset</button
    >
  </header>

  <div class="section__content">
    <slot />
  </div>
</section>

<style lang="scss">
  .section {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 16px;

    &__header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      border-bottom: 1px solid #fff;
      padding-bottom: 5px;
    }

    &__heading {
      font-weight: bold;
      text-transform: uppercase;
    }

    &__reset {
      background: none;
      border: none;
      box-shadow: none;
      cursor: pointer;
      text-decoration: underline;
      color: var(--color-fg-emphasis-medium);

      &:hover {
        color: var(--color-fg-emphasis-high);
      }
    }

    &__content {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      gap: 32px;
    }
  }
</style>
