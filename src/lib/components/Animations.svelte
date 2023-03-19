<script lang="ts">
  import { animations } from "$lib/animations";
  import { currentAnimation, animator } from "$lib/store";

  function onChange(name: (typeof animations)[number]["name"]) {
    if (name !== $currentAnimation.name) {
      currentAnimation.change(name);
      animator.renderFrame($animator.frame);
    }
  }
</script>

<div class="container">
  {#each animations as { name } (name)}
    <button
      type="button"
      class="option"
      class:option--selected={name === $currentAnimation.name}
      on:click={() => onChange(name)}
    >
      <img class="image" src={`/demo-${name}.gif`} alt={name} />
      <span>{name}</span>
    </button>
  {/each}
</div>

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
