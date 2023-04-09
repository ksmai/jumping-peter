<script lang="ts">
  import { directionalLight } from "$lib/store";
  import Section from "$lib/components/Section.svelte";
  import ColorPicker from "$lib/components/ColorPicker.svelte";
  import VectorPicker from "$lib/components/VectorPicker.svelte";
</script>

<Section title="Directional light" on:reset={directionalLight.reset}>
  <ColorPicker
    label="ambient"
    value={$directionalLight.ambient}
    on:input={(e) =>
      directionalLight.change({
        ambient: e.detail.value,
      })}
  />

  <ColorPicker
    label="diffuse"
    value={$directionalLight.diffuse}
    on:input={(e) =>
      directionalLight.change({
        diffuse: e.detail.value,
      })}
  />

  <ColorPicker
    label="specular"
    value={$directionalLight.specular}
    on:input={(e) =>
      directionalLight.change({
        specular: e.detail.value,
      })}
  />

  <VectorPicker
    label="direction"
    value={$directionalLight.direction}
    on:input={(e) =>
      directionalLight.change({
        direction: e.detail.value,
      })}
  />
</Section>
