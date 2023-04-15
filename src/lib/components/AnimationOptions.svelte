<script lang="ts">
  import { animations, effects } from "$lib/store";
  import Slider from "$lib/components/Slider.svelte";
  import Toggle from "$lib/components/Toggle.svelte";
  import Section from "$lib/components/Section.svelte";

  let className = "";
  export { className as class };
</script>

<aside class={`container ${className}`}>
  <Section
    title={$animations.current.name}
    on:reset={animations.resetEditOptions}
    expanded={true}
  >
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
          on:change={(e) =>
            animations.changeEditOptions(option, e.detail.value)}
        />
      {/if}
    {/each}
  </Section>

  <Section title="Effects" on:reset={effects.reset} expanded={false}>
    {#each $effects as effect}
      <Toggle
        label={effect.type}
        value={effect.enabled}
        on:change={(e) => effects.change(effect.type, e.detail.value)}
      />
    {/each}
  </Section>
</aside>

<style lang="scss">
  .container {
    padding: 16px;
    overflow-y: auto;

    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 48px;
    justify-items: stretch;
  }
</style>
