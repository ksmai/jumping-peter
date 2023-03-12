<script lang="ts">
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import type { AnimationRequestGif } from "$lib/animator";
  import { Animator } from "$lib/animator";
  import { getDefaultOptions } from "$lib/options";

  let generating = false;
  let canvas: HTMLCanvasElement;

  const defaultImageUrl = `${base}/favicon.png`;

  onMount(() => {
    const animator = new Animator(canvas);
    animator.animate({
      gif: {
        width: 64,
        height: 64,
        delayMs: 100,
        totalFrames: 20,
        imageUrl: defaultImageUrl,
      },
      animation: {
        name: 'expanding',
        minScale: 0.1,
        maxScale: 5,
        alternate: false,
      },
    }, (frame) => {
      console.log(`frame ${frame} ok`);
    }).then((result) => {
      console.log('anmiation done', result);
    }).catch((e) => console.error(`Animation failed: ${e}`));

  });



  function onAnimationChange(e: Event) {
    const target = e.target as HTMLInputElement;

    if (target.value === data.animation.name) {
      return;
    }

    const selected = animations.find((x) => x.name === target.value);
    if (!selected) {
      return;
    }
    selectedAnimation = selected;
    data.animation = {
      ...selected.defaults,
      name: target.value,
    } as any;
  }

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


<canvas bind:this={canvas} style="transform: scaleY(-1)"></canvas>

<style>
  .image__label {
    border: 1px solid #222;
    padding: 16px;
    display: flex;
    cursor: pointer;
    align-items: center;
    margin-bottom: 24px;
  }

  .image__preview {
    display: block;
    width: 2rem;
    max-width: 100%;
    margin-right: 1rem;
  }

  .image__input {
    display: none;
  }

  .separator {
    margin-top: 64px;
    margin-bottom: 64px;
    border-bottom: 1px solid #222;
  }

  .input-container {
    margin-bottom: 24px;
  }

  .result-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 90%;
    max-height: 90vh;
  }

  .gif-preview {
    max-width: 100%;
    margin-bottom: 24px;
  }

  :global(.generate-button) {
    display: block;
    text-align: center;
    width: 100%;
    display: block;
    max-width: none;
  }

  .error {
    color: red;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .demo {
    width: 48px;
  }
</style>
