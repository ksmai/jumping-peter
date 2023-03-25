<script lang="ts">
  import { gifOptions } from "$lib/store";
  import Slider from "$lib/components/Slider.svelte";

  let className = "";
  export { className as class };

  function onFileChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) {
      return;
    }
    gifOptions.changeImage(file);
  }

  function onInput(field: string) {
    return function (e: CustomEvent) {
      gifOptions.change({ [field]: e.detail.value });
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
      <img class="image__preview" src={$gifOptions.imageUrl} alt="source" />
    </div>
  </label>

  <Slider
    label="Output width"
    min={1}
    max={1024}
    step={1}
    value={$gifOptions.width}
    on:input={onInput("width")}
  />

  <Slider
    label="Output height"
    min={1}
    max={1024}
    step={1}
    value={$gifOptions.height}
    on:input={onInput("height")}
  />

  <Slider
    label="Delay ms"
    min={20}
    max={1000}
    step={10}
    value={$gifOptions.delayMs}
    on:input={onInput("delayMs")}
  />

  <Slider
    label="Total frames"
    min={1}
    max={1000}
    step={1}
    value={$gifOptions.totalFrames}
    on:input={onInput("totalFrames")}
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
