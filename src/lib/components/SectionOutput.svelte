<script lang="ts">
  import { output } from "$lib/store";
  import Section from "$lib/components/Section.svelte";
  import ColorPicker from "$lib/components/ColorPicker.svelte";
  import Slider from "$lib/components/Slider.svelte";
</script>

<Section title="Output" on:reset={output.reset} expanded={true}>
  <Slider
    label="width"
    min={1}
    max={1024}
    step={1}
    value={$output.width}
    on:input={(e) => output.change({ width: e.detail.value })}
  />

  <Slider
    label="height"
    min={1}
    max={1024}
    step={1}
    value={$output.height}
    on:input={(e) => output.change({ height: e.detail.value })}
  />

  <Slider
    label="delayMs"
    min={20}
    max={1000}
    step={10}
    value={$output.delayMs}
    on:input={(e) => output.change({ delayMs: e.detail.value })}
  />

  <Slider
    label="totalFrames"
    min={1}
    max={1000}
    step={1}
    value={$output.totalFrames}
    on:input={(e) => output.change({ totalFrames: e.detail.value })}
  />

  <Slider
    label="quality"
    min={1}
    max={30}
    step={1}
    value={$output.quality}
    on:input={(e) => output.change({ quality: e.detail.value })}
  />

  <ColorPicker
    label="clear"
    value={$output.clear}
    on:input={(e) =>
      output.change({
        clear: e.detail.value,
      })}
  />
</Section>
