<script lang="ts">
  import { base } from "$app/paths";
  import Nav from "$lib/components/Nav.svelte";
  import GifOptions from "$lib/components/GifOptions.svelte";
  import AnimationOptions from "$lib/components/AnimationOptions.svelte";
  import Animations from "$lib/components/Animations.svelte";
  import Preview from "$lib/components/Preview.svelte";

  const defaultImageUrl = `${base}/favicon.png`;

  function onImageChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) {
      return;
    }

    if (data.gif.imageUrl !== defaultImageUrl) {
      URL.revokeObjectURL(data.gif.imageUrl);
    }
    data.gif.imageUrl = URL.createObjectURL(file);
  }
</script>

<div class="grid">
  <nav class="nav">
    <Nav />
  </nav>

  <aside class="animations">
    <Animations />
  </aside>

  <aside class="gif-options">
    <GifOptions />
  </aside>

  <aside class="animation-options">
    <AnimationOptions />
  </aside>

  <main class="preview">
    <Preview />
  </main>
</div>

<style>
  .grid {
    width: 100vw;
    height: 100vh;
    background-color: var(--color-bg-dp-00);
    display: grid;
    grid-template-rows: 2.2rem 1fr 10rem;
    grid-template-columns: 15rem 1fr 15rem;
    grid-template-areas:
      "nav         nav        nav              "
      "gif-options preview    animation-options"
      "gif-options animations animation-options";
    gap: 8px;
  }

  .nav {
    grid-area: nav;
    background-color: var(--color-bg-dp-04);
  }

  .animations {
    grid-area: animations;
    background-color: var(--color-bg-dp-01);
  }

  .gif-options {
    grid-area: gif-options;
    background-color: var(--color-bg-dp-01);
  }

  .animation-options {
    grid-area: animation-options;
    background-color: var(--color-bg-dp-01);
  }

  .preview {
    grid-area: preview;
    background-color: var(--color-bg-dp-01);
  }
</style>
