<script lang="ts">
  import { onMount } from "svelte";
  import { animator, gifOptions } from "$lib/store";
  import Slider from "$lib/components/Slider.svelte";

  let canvas: HTMLCanvasElement;
  let className = "";
  export { className as class };

  onMount(() => {
    animator.changeCanvas(canvas);
    animator
      .renderFrame(0)
      .catch((e) => console.error(`Animation failed: ${e}`));
  });

  function onInput(e: CustomEvent) {
    animator
      .renderFrame(e.detail.value)
      .catch((e) => console.error(`Animation failed: ${e}`));
  }
</script>

<main class={`preview ${className}`}>
  <div class="preview__container">
    <canvas
      class="preview__canvas"
      bind:this={canvas}
      style="transform: scaleY(-1)"
    />
  </div>

  <Slider
    min={0}
    max={$gifOptions.totalFrames - 1}
    step={1}
    value={$animator.frame}
    on:input={onInput}
  />
</main>

<style lang="scss">
  .preview {
    padding: 16px;
    display: grid;
    grid-template-rows: 1fr 2rem;
    align-items: center;
    gap: 32px;
    min-width: 0;
    min-height: 0;

    &__container {
      width: 100%;
      height: 100%;
      border: 1px solid #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      min-width: 0;
      min-height: 0;
    }

    &__canvas {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
</style>
