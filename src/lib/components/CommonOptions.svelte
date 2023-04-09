<script lang="ts">
  import SectionImage from "$lib/components/SectionImage.svelte";
  import SectionOutput from "$lib/components/SectionOutput.svelte";
  import SectionCamera from "$lib/components/SectionCamera.svelte";
  import SectionProjection from "$lib/components/SectionProjection.svelte";
  import SectionMaterial from "$lib/components/SectionMaterial.svelte";
  import SectionDirectionalLight from "$lib/components/SectionDirectionalLight.svelte";
  import SectionPointLight from "$lib/components/SectionPointLight.svelte";
  import SectionSpotLight from "$lib/components/SectionSpotLight.svelte";

  let className = "";
  export { className as class };
</script>

<aside class={`container ${className}`}>
  <SectionImage />
  <SectionOutput />
  <SectionCamera />
  <SectionProjection />
  <SectionMaterial />
  <SectionDirectionalLight />
  <SectionPointLight />
  <SectionSpotLight />
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
