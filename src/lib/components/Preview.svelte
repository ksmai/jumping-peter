<script lang="ts">
  import { onMount } from "svelte";
  import { animator } from "$lib/store";

  let canvas: HTMLCanvasElement;
  let className = "";
  export { className as class };

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

<main class={className}>
  <canvas bind:this={canvas} style="transform: scaleY(-1)" />
</main>
