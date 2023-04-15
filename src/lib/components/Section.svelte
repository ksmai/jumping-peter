<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  export let title = "";
  export let expanded = true;

  const dispatch = createEventDispatcher();

  function toggleExpanded() {
    expanded = !expanded;
  }
</script>

<section class="section">
  <header class="section__header">
    <button class="section__expand" type="button" on:click={toggleExpanded}
      >[{expanded ? "-" : "+"}]</button
    >
    <h2
      class="section__heading"
      on:click={toggleExpanded}
      on:keypress={toggleExpanded}
    >
      {title}
    </h2>
    <button
      class="section__reset"
      type="button"
      on:click={() => dispatch("reset")}>Reset</button
    >
  </header>

  {#if expanded}
    <div class="section__content" transition:fade={{ duration: 250 }}>
      <slot />
    </div>
  {/if}
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
      border-bottom: 1px solid #fff;
      padding-bottom: 5px;
    }

    &__expand {
      background: none;
      border: none;
      cursor: pointer;
      color: inherit;
      font-family: monospace;
      margin-right: 8px;
      font-size: 1.1rem;
    }

    &__heading {
      font-weight: bold;
      text-transform: uppercase;
      flex: 1 1 auto;
      cursor: pointer;
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
