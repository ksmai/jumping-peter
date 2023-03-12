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
  import type { AnimationRequest } from "$lib/animator";
  import * as animator from "$lib/animator";
  import { getDefaultOptions } from "$lib/options";
  import { JumpingEditOptions } from "$lib/animations/jumping";
  import { ExtremeSpeedEditOptions } from "$lib/animations/extreme-speed";
  import { SpinningEditOptions } from "$lib/animations/spinning";
  import { ExcitedEditOptions } from "$lib/animations/excited";
  import { ExpandingEditOptions } from "$lib/animations/expanding";

  let generating = false;
  let canvas: HTMLCanvasElement;

  const defaultImageUrl = `${base}/favicon.png`;

  onMount(() => {
    animator.init(canvas);
    animator.animate({
      gif: {
        width: 128,
        height: 128,
        delayMs: 1000,
        totalFrames: 4,
        imageUrl: defaultImageUrl,
      },
      animation: getDefaultOptions(SpinningEditOptions),
    }, (frame) => {
      console.log(`frame ${frame} ok`);
    }).then((result) => {
      console.log('anmiation done', result);
    }).catch((e) => console.error(`Animation failed: ${e}`));

    animator.renderFrame({
      gif: {
        width: 128,
        height: 128,
        delayMs: 1000,
        totalFrames: 4,
        imageUrl: defaultImageUrl,
      },
      frame: 0,
      animation: getDefaultOptions(SpinningEditOptions),
    }).then((result) => {
      console.log('anmiation done', result);
    }).catch((e) => console.error(`Animation failed: ${e}`));
  });

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
    {
      name: "spinning",
      text: "Spinning",
      options: SpinningEditOptions,
      defaults: getDefaultOptions(SpinningEditOptions),
    },
    {
      name: "excited",
      text: "Excited",
      options: ExcitedEditOptions,
      defaults: getDefaultOptions(ExcitedEditOptions),
    },
    {
      name: "expanding",
      text: "Expanding",
      options: ExpandingEditOptions,
      defaults: getDefaultOptions(ExpandingEditOptions),
    },
  ] as const;

  let selectedAnimation: (typeof animations)[number] = animations[2];

  const data: AnimationRequest = {
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

<Grid fullWidth padding>
  <canvas bind:this={canvas}></canvas>
  <Row>
    <Column>
      <h1 class="title">
        <img
          class="demo"
          src={`${base}/demo-${selectedAnimation.name}.gif`}
          alt=""
        />
        jumping-peter v0.0.1
        <img
          class="demo"
          src={`${base}/demo-${selectedAnimation.name}.gif`}
          alt=""
        />
      </h1>
    </Column>
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
        >Generate</Button>

      <div class="separator" />
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

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .demo {
    width: 48px;
  }
</style>
