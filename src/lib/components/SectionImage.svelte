<script lang="ts">
  import { image } from "$lib/store";
  import Section from "$lib/components/Section.svelte";

  function onFileChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) {
      return;
    }
    image.change({ url: URL.createObjectURL(file) });
  }
</script>

<Section title="Image" on:reset={image.reset} expanded={true}>
  <label class="image">
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
</Section>

<style lang="scss">
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
    }

    &__preview {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
</style>
