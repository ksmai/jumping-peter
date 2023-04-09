<script lang="ts">
  import { camera } from "$lib/store";
  import Section from "$lib/components/Section.svelte";
  import VectorPicker from "$lib/components/VectorPicker.svelte";
</script>

<Section title="Camera" on:reset={camera.reset}>
  <VectorPicker
    label="position"
    value={$camera.position}
    on:input={(e) =>
      camera.change({
        position: e.detail.value,
      })}
  />

  <VectorPicker
    label="lookAt"
    value={$camera.lookAt}
    on:input={(e) =>
      camera.change({
        lookAt: e.detail.value,
      })}
  />

  <VectorPicker
    label="up"
    value={$camera.up}
    on:input={(e) =>
      camera.change({
        up: e.detail.value,
      })}
  />
</Section>
