<script lang="ts">
  import { currentAnimation, animationOptions } from "$lib/store";
  import Slider from "$lib/components/Slider.svelte";
  import Toggle from "$lib/components/Toggle.svelte";

  let className = "";
  export { className as class };

  $: currentValues = $animationOptions as any;

  function onInput(field: string) {
    return function (e: CustomEvent) {
      animationOptions.change({ [field]: e.detail.value });
    };
  }
</script>

<aside class={`container ${className}`}>
  {#each $currentAnimation.editOptions as option}
    {#if option.type === "slider"}
      <Slider
        label={option.name}
        min={option.min}
        max={option.max}
        step={option.step}
        value={currentValues[option.name]}
        on:input={onInput(option.name)}
      />
    {:else if option.type === "toggle"}
      <Toggle
        label={option.name}
        value={currentValues[option.name]}
        on:change={onInput(option.name)}
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
