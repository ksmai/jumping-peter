<script lang="ts">
  import { onMount } from "svelte";
  import { animator } from "$lib/store";

  let canvas: HTMLCanvasElement;

  onMount(() => {
    animator.changeCanvas(canvas);
    animator
      .renderFrame(6)
      .then((result) => {
        console.log("anmiation done", result);
      })
      .catch((e) => console.error(`Animation failed: ${e}`));
  });
</script>

<canvas bind:this={canvas} style="transform: scaleY(-1)" />
