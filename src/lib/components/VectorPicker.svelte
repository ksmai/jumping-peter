<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Slider from "$lib/components/Slider.svelte";

  export let label = "";
  export let value: readonly [number, number, number] = [0, 0, -1];

  const dispatch = createEventDispatcher();

  function onInput(index: 0 | 1 | 2, next: number) {
    const newValue = [...value];
    newValue[index] = next;
    dispatch("input", { value: newValue });
  }
</script>

<Slider
  label={`${label}X`}
  min={-10}
  max={10}
  step={0.01}
  value={value[0]}
  on:input={(e) => onInput(0, e.detail.value)}
/>

<Slider
  label={`${label}Y`}
  min={-10}
  max={10}
  step={0.01}
  value={value[1]}
  on:input={(e) => onInput(1, e.detail.value)}
/>

<Slider
  label={`${label}Z`}
  min={-10}
  max={10}
  step={0.01}
  value={value[2]}
  on:input={(e) => onInput(2, e.detail.value)}
/>
