<script lang="ts">
  import { spotLight } from "$lib/store";
  import Section from "$lib/components/Section.svelte";
  import ColorPicker from "$lib/components/ColorPicker.svelte";
  import VectorPicker from "$lib/components/VectorPicker.svelte";
  import Slider from "$lib/components/Slider.svelte";
</script>

<Section title="Spot light" on:reset={spotLight.reset}>
  <ColorPicker
    label="ambient"
    value={$spotLight.ambient}
    on:input={(e) =>
      spotLight.change({
        ambient: e.detail.value,
      })}
  />

  <ColorPicker
    label="diffuse"
    value={$spotLight.diffuse}
    on:input={(e) =>
      spotLight.change({
        diffuse: e.detail.value,
      })}
  />

  <ColorPicker
    label="specular"
    value={$spotLight.specular}
    on:input={(e) =>
      spotLight.change({
        specular: e.detail.value,
      })}
  />

  <VectorPicker
    label="position"
    value={$spotLight.position}
    on:input={(e) =>
      spotLight.change({
        position: e.detail.value,
      })}
  />

  <VectorPicker
    label="direction"
    value={$spotLight.direction}
    on:input={(e) =>
      spotLight.change({
        direction: e.detail.value,
      })}
  />

  <Slider
    label="innerDegrees"
    min={0}
    max={360}
    step={1}
    value={$spotLight.innerDegrees}
    on:input={(e) =>
      spotLight.change({
        innerDegrees: e.detail.value,
      })}
  />

  <Slider
    label="outerDegrees"
    min={0}
    max={360}
    step={1}
    value={$spotLight.outerDegrees}
    on:input={(e) =>
      spotLight.change({
        outerDegrees: e.detail.value,
      })}
  />

  <Slider
    label="attenuation1"
    min={0}
    max={10}
    step={0.01}
    value={$spotLight.attenuation1}
    on:input={(e) =>
      spotLight.change({
        attenuation1: e.detail.value,
      })}
  />

  <Slider
    label="attenuation2"
    min={0}
    max={10}
    step={0.01}
    value={$spotLight.attenuation2}
    on:input={(e) =>
      spotLight.change({
        attenuation2: e.detail.value,
      })}
  />
</Section>
