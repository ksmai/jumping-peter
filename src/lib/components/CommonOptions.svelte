<script lang="ts">
  import SectionImage from "$lib/components/SectionImage.svelte";
  import SectionOutput from "$lib/components/SectionOutput.svelte";

  let className = "";
  export { className as class };
</script>

<aside class={`container ${className}`}>
  <SectionImage />
  <SectionOutput />
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
