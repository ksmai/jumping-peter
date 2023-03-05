<script lang="ts">
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import "carbon-components-svelte/css/g10.css";
  import {
    Grid,
    Row,
    Column,
    Slider,
    Select,
    SelectItem,
    Button,
    Link,
    Loading,
  } from "carbon-components-svelte";
  import type { WorkerData, WorkerResult } from "$lib/worker";
  import { getDefaultOptions } from "$lib/options";
  import { ExtremeSpeedEditOptions } from "$lib/animations/extreme-speed";
  import { JumpingEditOptions } from "$lib/animations/jumping";

  let result: WorkerResult | undefined;
  let worker: Worker | undefined;
  let generating = false;

  const defaultImageUrl = `${base}/favicon.png`;

  const animations = [
    {
      name: "jumping",
      text: "Jumping",
      options: JumpingEditOptions,
      defaults: getDefaultOptions(JumpingEditOptions),
    },
    {
      name: "extreme-speed",
      text: "Extreme speed",
      options: ExtremeSpeedEditOptions,
      defaults: getDefaultOptions(ExtremeSpeedEditOptions),
    },
  ] as const;

  let selectedAnimation: (typeof animations)[number] = animations[0];

  const data: WorkerData = {
    id: 0,
    gif: {
      width: 128,
      height: 128,
      delayMs: 20,
      totalFrames: 60,
      imageUrl: defaultImageUrl,
    },
    animation: {
      ...selectedAnimation.defaults,
      name: selectedAnimation.name,
    } as any,
  };

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

  onMount(async () => {
    const { default: Worker } = await import("../lib/worker?worker");
    worker = new Worker();
    worker.onmessage = (e) => {
      if (e.data.id === data.id) {
        result = e.data;
        generating = false;
      }
    };
  });

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

  function onGenerate() {
    if (!generating) {
      data.id += 1;
      generating = true;
      worker?.postMessage(data);
    }
  }
</script>

<Grid fullWidth padding>
  <Row>
    <Column>jumping-peter v0.0.1</Column>
  </Row>

  <Row>
    <Column sm={4} md={8} lg={8}>
      <label class="image__label input-container" for="image-input">
        <img src={data.gif.imageUrl} alt="" class="image__preview" />
        <input
          id="image-input"
          class="image__input"
          type="file"
          accept={".jpg,.jpeg,.png,.gif"}
          on:change={onImageChange}
        />
        <span class="image__instruction">Upload an image</span>
      </label>

      <div class="input-container">
        <Slider
          light
          labelText="Output GIF width"
          min={16}
          max={128}
          maxLabel="128px"
          step={16}
          bind:value={data.gif.width}
          fullWidth
        />
      </div>

      <div class="input-container">
        <Slider
          light
          labelText="Output GIF height"
          min={16}
          max={128}
          maxLabel="128px"
          step={16}
          bind:value={data.gif.height}
          fullWidth
        />
      </div>

      <div class="input-container">
        <Slider
          light
          labelText="Milliseconds between frames"
          min={20}
          max={200}
          maxLabel="200ms"
          step={20}
          bind:value={data.gif.delayMs}
          fullWidth
        />
      </div>

      <div class="input-container">
        <Slider
          light
          labelText="Number of frames"
          min={1}
          max={500}
          bind:value={data.gif.totalFrames}
          step={1}
          fullWidth
        />
      </div>

      <div class="separator" />

      <div class="input-container">
        <Select
          light
          labelText="Animation"
          selected={data.animation.name}
          on:change={onAnimationChange}
        >
          {#each animations as animation (animation.name)}
            <SelectItem value={animation.name} text={animation.text} />
          {/each}
        </Select>
      </div>

      {#each selectedAnimation.options as options}
        {#if options.type === "slider"}
          <div class="input-container">
            <Slider
              light
              labelText={options.label}
              min={options.min}
              max={options.max}
              step={options.step}
              bind:value={data.animation[options.name]}
              fullWidth
            />
          </div>
        {/if}
      {/each}

      <Button
        class="generate-button"
        on:click={onGenerate}
        disabled={generating}>Generate</Button
      >

      <div class="separator" />
    </Column>

    <Column sm={4} md={8} lg={8}>
      <div class="result-container">
        {#if generating}
          <Loading withOverlay={false} />
        {:else if result?.type === "success"}
          <img class="gif-preview" src={result.dataUri} alt="gif" />
          <Link href={result.dataUri} download="jumping-peter.gif"
            >Download</Link
          >
        {:else if result?.type === "error"}
          <p class="error">Failed: {result.error}</p>
        {/if}
      </div>
    </Column>
  </Row>
</Grid>

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
</style>
