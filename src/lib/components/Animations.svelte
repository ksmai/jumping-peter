<script lang="ts">
  import { base } from "$app/paths";
  import { animations } from "$lib/store";

  let className = "";
  export { className as class };
</script>

<aside class={`container ${className}`}>
  {#each $animations.animations as animation (animation.Name)}
    <button
      type="button"
      class="option"
      class:option--selected={animation === $animations.current}
      on:click={() => animations.changeCurrentAnimation(animation)}
    >
      <img
        class="image"
        src={`${base}/demo-${animation.Name}.gif`}
        alt={animation.Name}
      />
      <span>{animation.Name}</span>
    </button>
  {/each}
</aside>

<style>
  .container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
    gap: 16px;
    padding: 16px;
  }

  .option {
    cursor: pointer;
    background-color: var(--color-bg-dp02);
    border: 2px solid var(--color-fg-disabled);
    border-radius: 12px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-fg-emphasis-high);
    font-size: inherit;
  }

  .option--selected {
    border-color: var(--color-fg-emphasis-high);
  }

  .option:hover,
  .option:active,
  .option:focus {
    border-color: var(--color-fg-emphasis-high);
    background-color: var(--color-bg-dp04);
  }

  .image {
    max-width: 100%;
    margin-bottom: 8px;
  }
</style>
