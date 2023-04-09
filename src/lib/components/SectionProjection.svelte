<script lang="ts">
  import { projection } from "$lib/store";
  import Toggle from "$lib/components/Toggle.svelte";
  import Slider from "$lib/components/Slider.svelte";
  import Section from "$lib/components/Section.svelte";
</script>

<Section title="Projection" on:reset={projection.reset}>
  <Toggle
    label="perspective"
    value={$projection.perspective}
    on:input={(e) =>
      projection.change({
        perspective: e.detail.value,
      })}
  />

  <Slider
    label="left"
    min={-10}
    max={10}
    step={0.1}
    value={$projection.left}
    on:input={(e) =>
      projection.change({
        left: e.detail.value,
      })}
  />

  <Slider
    label="right"
    min={-10}
    max={10}
    step={0.1}
    value={$projection.right}
    on:input={(e) =>
      projection.change({
        right: e.detail.value,
      })}
  />

  <Slider
    label="bottom"
    min={-10}
    max={10}
    step={0.1}
    value={$projection.bottom}
    on:input={(e) =>
      projection.change({
        bottom: e.detail.value,
      })}
  />

  <Slider
    label="top"
    min={-10}
    max={10}
    step={0.1}
    value={$projection.top}
    on:input={(e) =>
      projection.change({
        top: e.detail.value,
      })}
  />

  <Slider
    label="near"
    min={0.1}
    max={10}
    step={0.1}
    value={$projection.near}
    on:input={(e) =>
      projection.change({
        near: e.detail.value,
      })}
  />

  <Slider
    label="far"
    min={0.1}
    max={10}
    step={0.1}
    value={$projection.far}
    on:input={(e) =>
      projection.change({
        far: e.detail.value,
      })}
  />
</Section>
