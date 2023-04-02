<script lang="ts">
  import { imageOptions, animations } from "$lib/store";
  import Slider from "$lib/components/Slider.svelte";

  let className = "";
  export { className as class };

  function onFileChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) {
      return;
    }
    imageOptions.changeImage(file);
  }
</script>

<aside class={`container ${className}`}>
  <label class="image">
    Select image

    <input
      class="image__input"
      type="file"
      accept="image/*"
      on:input={onFileChange}
    />

    <div class="image__container">
      <img class="image__preview" src={$imageOptions.url} alt="source" />
    </div>
  </label>

  <Slider
    label="width"
    min={1}
    max={1024}
    step={1}
    value={$imageOptions.width}
    on:input={(e) => imageOptions.change({ width: e.detail.value })}
  />

  <Slider
    label="height"
    min={1}
    max={1024}
    step={1}
    value={$imageOptions.height}
    on:input={(e) => imageOptions.change({ height: e.detail.value })}
  />

  <Slider
    label="clearRed"
    min={0}
    max={1}
    step={0.01}
    value={$imageOptions.clearRed}
    on:input={(e) => imageOptions.change({ clearRed: e.detail.value })}
  />

  <Slider
    label="clearGreen"
    min={0}
    max={1}
    step={0.01}
    value={$imageOptions.clearGreen}
    on:input={(e) => imageOptions.change({ clearGreen: e.detail.value })}
  />

  <Slider
    label="clearBlue"
    min={0}
    max={1}
    step={0.01}
    value={$imageOptions.clearBlue}
    on:input={(e) => imageOptions.change({ clearBlue: e.detail.value })}
  />

  <Slider
    label="delayMs"
    min={20}
    max={1000}
    step={10}
    value={$animations.current.FrameOptions.delayMs}
    on:input={(e) => animations.changeFrameOptions({ delayMs: e.detail.value })}
  />

  <Slider
    label="totalFrames"
    min={1}
    max={1000}
    step={1}
    value={$animations.current.FrameOptions.totalFrames}
    on:input={(e) =>
      animations.changeFrameOptions({ totalFrames: e.detail.value })}
  />
</aside>

<style lang="scss">
  .container {
    padding: 16px;
    overflow-y: auto;

    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 32px;
    justify-items: stretch;
  }

  .image {
    cursor: pointer;

    &__input {
      display: none;
    }

    &__container {
      height: 120px;
      padding: 8px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #fff;
      margin-top: 8px;
    }

    &__preview {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
</style>
