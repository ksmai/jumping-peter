<script lang="ts">
  import { imageOptions, frameOptions } from "$lib/store";
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

  function onInputImage(field: string) {
    return function (e: CustomEvent) {
      imageOptions.change({ [field]: e.detail.value });
    };
  }

  function onInputFrame(field: string) {
    return function (e: CustomEvent) {
      frameOptions.change({ [field]: e.detail.value });
    };
  }
</script>

<aside class={`container ${className}`}>
  <label class="image">
    Upload image

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
    on:input={onInputImage("width")}
  />

  <Slider
    label="height"
    min={1}
    max={1024}
    step={1}
    value={$imageOptions.height}
    on:input={onInputImage("height")}
  />

  <Slider
    label="delayMs"
    min={20}
    max={1000}
    step={10}
    value={$frameOptions.delayMs}
    on:input={onInputFrame("delayMs")}
  />

  <Slider
    label="totalFrames"
    min={1}
    max={1000}
    step={1}
    value={$frameOptions.totalFrames}
    on:input={onInputFrame("totalFrames")}
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
  }

  .image {
    cursor: pointer;

    &__input {
      display: none;
    }

    &__container {
      width: 100%;
      height: 100px;
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
