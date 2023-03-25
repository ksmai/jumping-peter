<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import GifOptions from "$lib/components/GifOptions.svelte";
  import AnimationOptions from "$lib/components/AnimationOptions.svelte";
  import Animations from "$lib/components/Animations.svelte";
  import Preview from "$lib/components/Preview.svelte";
</script>

<div class="grid">
  <Header class="header" />
  <Animations class="animations" />
  <GifOptions class="gif-options" />
  <AnimationOptions class="animation-options" />
  <Preview class="preview" />
</div>

<style lang="scss">
  .grid {
    width: 100%;
    background-color: var(--color-bg-dp-00);
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "animations"
      "gif-options"
      "animation-options"
      "preview";
    gap: 16px;

    @media (min-width: 64rem) {
      width: 100vw;
      height: 100vh;
      grid-template-rows: auto 1fr 10rem;
      grid-template-columns: 15rem 1fr 15rem;
      grid-template-areas:
        "header      header     header           "
        "gif-options preview    animation-options"
        "gif-options animations animation-options";
      gap: 8px;
    }
  }

  * > :global(.header) {
    grid-area: header;
    background-color: var(--color-bg-dp-04);
  }

  * > :global(.animations) {
    grid-area: animations;
    background-color: var(--color-bg-dp-01);
  }

  * > :global(.gif-options) {
    grid-area: gif-options;
    background-color: var(--color-bg-dp-01);
  }

  * > :global(.animation-options) {
    grid-area: animation-options;
    background-color: var(--color-bg-dp-01);
  }

  * > :global(.preview) {
    grid-area: preview;
    background-color: var(--color-bg-dp-01);
  }
</style>
