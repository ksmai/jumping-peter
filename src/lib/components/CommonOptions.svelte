<script lang="ts">
  import { image, output } from "$lib/store";
  import Slider from "$lib/components/Slider.svelte";

  let className = "";
  export { className as class };

  function onFileChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) {
      return;
    }
    image.change({ url: URL.createObjectURL(file) });
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
      <img class="image__preview" src={$image.url} alt="source" />
    </div>
  </label>

  <Slider
    label="width"
    min={1}
    max={1024}
    step={1}
    value={$output.width}
    on:input={(e) => output.change({ width: e.detail.value })}
  />

  <Slider
    label="height"
    min={1}
    max={1024}
    step={1}
    value={$output.height}
    on:input={(e) => output.change({ height: e.detail.value })}
  />

  <Slider
    label="clearR"
    min={0}
    max={1}
    step={0.01}
    value={$output.clear[0]}
    on:input={(e) =>
      output.change({
        clear: [e.detail.value, $output.clear[1], $output.clear[2]],
      })}
  />

  <Slider
    label="clearG"
    min={0}
    max={1}
    step={0.01}
    value={$output.clear[1]}
    on:input={(e) =>
      output.change({
        clear: [$output.clear[0], e.detail.value, $output.clear[2]],
      })}
  />

  <Slider
    label="clearB"
    min={0}
    max={1}
    step={0.01}
    value={$output.clear[2]}
    on:input={(e) =>
      output.change({
        clear: [$output.clear[0], $output.clear[1], e.detail.value],
      })}
  />

  <Slider
    label="delayMs"
    min={20}
    max={1000}
    step={10}
    value={$output.delayMs}
    on:input={(e) => output.change({ delayMs: e.detail.value })}
  />

  <Slider
    label="totalFrames"
    min={1}
    max={1000}
    step={1}
    value={$output.totalFrames}
    on:input={(e) => output.change({ totalFrames: e.detail.value })}
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
