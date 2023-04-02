<script lang="ts">
  import { animations } from "$lib/store";
  import Slider from "$lib/components/Slider.svelte";
  import Toggle from "$lib/components/Toggle.svelte";

  let className = "";
  export { className as class };
</script>

<aside class={`container ${className}`}>
  {#each $animations.current.editOptions as option}
    {#if option.type === "slider"}
      <Slider
        label={option.name}
        min={option.min}
        max={option.max}
        step={option.step}
        value={option.value}
        on:input={(e) => animations.changeEditOptions(option, e.detail.value)}
      />
    {:else if option.type === "toggle"}
      <Toggle
        label={option.name}
        value={option.value}
        on:change={(e) => animations.changeEditOptions(option, e.detail.value)}
      />
    {/if}
  {/each}
</aside>

<style lang="scss">
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    row-gap: 32px;
    padding: 16px;
  }
</style>
