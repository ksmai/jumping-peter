<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import {
    animator,
    imageOptions,
    frameOptions,
    animationOptions,
    currentAnimation,
  } from "$lib/store";
  import Slider from "$lib/components/Slider.svelte";
  import Toggle from "$lib/components/Toggle.svelte";
  import type { AnimationResultGifSuccess } from "$lib/animator";

  let canvas: HTMLCanvasElement;

  let className = "";
  export { className as class };

  let debugMode = false;
  let result: Promise<AnimationResultGifSuccess> | null = null;

  function updateFrame() {
    animator.renderFrame().catch((e) => {
      console.error(`renderFrame failed: ${e}`);
      throw e;
    });
  }

  function updateAnimation() {
    result = animator.animate().catch((e) => {
      console.error(`animate failed: ${e}`);
      throw e;
    });
  }

  $: {
    $imageOptions;
    $frameOptions;
    $animationOptions;
    $currentAnimation;

    if (browser) {
      if (debugMode) {
        updateFrame();
      } else {
        updateAnimation();
      }
    }
  }

  onMount(() => {
    animator.changeCanvas(canvas);
    updateAnimation();
  });

  function onInput(e: CustomEvent) {
    animator
      .renderFrame(e.detail.value)
      .catch((e) => console.error(`Animation failed: ${e}`));
  }

  function onChangeDebugMode(e: CustomEvent) {
    debugMode = e.detail.value;
  }
</script>

<main
  class={`preview ${className}`}
  class:preview--debug={debugMode}
  class:preview--no-debug={!debugMode}
>
  <div class="preview__debug-input">
    <Toggle
      label="Debug Mode"
      value={debugMode}
      on:change={onChangeDebugMode}
    />
  </div>

  {#if !debugMode && result}
    <div class="preview__container preview__container--no-debug">
      {#await result}
        <div class="preview__loading">
          <p>Generating...</p>
          <p>[{$animator.frame} / {$frameOptions.totalFrames}]</p>
          <progress
            class="preview__progress"
            max={$frameOptions.totalFrames}
            value={$animator.frame}
          />
        </div>
      {:then { dataUri }}
        <div class="preview__image-container">
          <img class="preview__image" src={dataUri} alt="generated gif" />
        </div>
        <a
          class="preview__download-button"
          download="jumping_peter.gif"
          href={dataUri}>Download</a
        >
      {:catch error}
        <p class="preview__error">An error has occurred: {error}</p>
      {/await}
    </div>
  {/if}

  <div class="preview__container preview__container--debug">
    <div class="preview__image-container">
      <canvas
        class="preview__image"
        bind:this={canvas}
        style="transform: scaleY(-1)"
      />
    </div>

    <Slider
      min={0}
      max={$frameOptions.totalFrames - 1}
      step={1}
      value={$animator.frame}
      on:input={onInput}
    />
  </div>
</main>

<style lang="scss">
  .preview {
    padding: 16px;
    display: grid;
    grid-template-rows: 1.5rem 1fr;
    align-items: center;
    gap: 16px;
    min-width: 0;
    min-height: 0;

    &__debug-input {
      width: 10rem;
      justify-self: end;
    }

    &__container {
      display: grid;
      grid-template-rows: 1fr 2.5rem;
      gap: 32px;
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
    }

    &__container--debug {
      display: none;
    }

    &--debug &__container--debug {
      display: grid;
    }

    &__image-container {
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

    &__image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    &__loading {
      font-size: 1rem;
      display: grid;
      gap: 16px;
      grid-auto-rows: max-content;
      align-content: center;
      justify-items: center;
    }

    &__progress {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: none;
      width: 100%;
      height: 24px;
      background-color: var(--color-primary-dimmed);
      border-radius: 12px;

      &::-webkit-progress-bar {
        background-color: var(--color-primary-dimmed);
        border-radius: 12px;
      }

      &::-webkit-progress-value {
        background-color: var(--color-primary);
        border-radius: 12px;
      }

      &::-moz-progress-bar {
        background-color: var(--color-primary);
        border-radius: 12px;
      }
    }

    &__download-button {
      display: block;
      background: var(--color-primary);
      color: #fff;
      border: none;
      padding: 0.5rem 0.75rem;
      border-radius: 3px;
      cursor: pointer;
      position: relative;
      font-size: 1rem;
      text-decoration: none;
      text-align: center;
      align-self: center;

      &::after {
        display: none;
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      &:hover::after {
        display: block;
        background-color: rgba(255, 255, 255, 0.04);
      }

      &:focus {
        outline: 1px solid #fff;
      }

      &:focus::after {
        display: block;
        background-color: rgba(255, 255, 255, 0.12);
      }

      &:active::after {
        display: block;
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    &__error {
      color: var(--color-error);
      align-self: center;
      justify-self: center;
    }
  }
</style>
