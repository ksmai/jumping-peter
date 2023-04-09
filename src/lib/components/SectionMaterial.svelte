<script lang="ts">
  import { material } from "$lib/store";
  import Section from "$lib/components/Section.svelte";
  import ColorPicker from "$lib/components/ColorPicker.svelte";
  import Slider from "$lib/components/Slider.svelte";
</script>

<Section title="Material" on:reset={material.reset}>
  <ColorPicker
    label="specular"
    value={$material.specular}
    on:input={(e) =>
      material.change({
        specular: e.detail.value,
      })}
  />

  <Slider
    label="shininess"
    min={0}
    max={100}
    step={0.1}
    value={$material.shininess}
    on:input={(e) => material.change({ shininess: e.detail.value })}
  />
</Section>
