<script lang="ts">
  import { pointLight } from "$lib/store";
  import Section from "$lib/components/Section.svelte";
  import ColorPicker from "$lib/components/ColorPicker.svelte";
  import VectorPicker from "$lib/components/VectorPicker.svelte";
  import Slider from "$lib/components/Slider.svelte";
</script>

<Section title="Point light" on:reset={pointLight.reset}>
  <ColorPicker
    label="ambient"
    value={$pointLight.ambient}
    on:input={(e) =>
      pointLight.change({
        ambient: e.detail.value,
      })}
  />

  <ColorPicker
    label="diffuse"
    value={$pointLight.diffuse}
    on:input={(e) =>
      pointLight.change({
        diffuse: e.detail.value,
      })}
  />

  <ColorPicker
    label="specular"
    value={$pointLight.specular}
    on:input={(e) =>
      pointLight.change({
        specular: e.detail.value,
      })}
  />

  <VectorPicker
    label="position"
    value={$pointLight.position}
    on:input={(e) =>
      pointLight.change({
        position: e.detail.value,
      })}
  />

  <Slider
    label="attenuation1"
    min={0}
    max={10}
    step={0.1}
    value={$pointLight.attenuation1}
    on:input={(e) =>
      pointLight.change({
        attenuation1: e.detail.value,
      })}
  />

  <Slider
    label="attenuation2"
    min={0}
    max={10}
    step={0.1}
    value={$pointLight.attenuation2}
    on:input={(e) =>
      pointLight.change({
        attenuation2: e.detail.value,
      })}
  />
</Section>
