<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import CommonOptions from "$lib/components/CommonOptions.svelte";
  import AnimationOptions from "$lib/components/AnimationOptions.svelte";
  import Animations from "$lib/components/Animations.svelte";
  import Preview from "$lib/components/Preview.svelte";

  const title = "Jumping Peter";
  const description =
    "With Jumping Peter you can generate custom GIF emojis from images, with dozens of pre-built animations and effects";
  const url = "https://ksmai.github.io/jumping-peter";
  const image = "https://ksmai.github.io/jumping-peter/favicon.png";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />

  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />

  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={image} />
</svelte:head>

<div class="grid">
  <Header class="header" />
  <Animations class="animations" />
  <CommonOptions class="common-options" />
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
      "common-options"
      "animation-options"
      "preview";
    gap: 32px;

    @media (min-width: 64rem) {
      width: 100vw;
      height: 100vh;
      grid-template-rows: auto 1fr 12rem;
      grid-template-columns: 9rem 2fr 6fr 2fr 9rem;
      grid-template-areas:
        "header         header         header     header            header"
        "common-options common-options preview    animation-options animation-options"
        "common-options common-options animations animation-options animation-options";
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

  * > :global(.common-options) {
    grid-area: common-options;
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
