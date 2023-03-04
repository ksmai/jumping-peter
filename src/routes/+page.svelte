<script lang="ts">
  import { onMount } from "svelte";
  import type { WorkerData, WorkerResult } from "../lib/worker";

  let result: WorkerResult | undefined;
  let worker: Worker | undefined;
  let id = 0;

  onMount(async () => {
    const { default: Worker } = await import("../lib/worker?worker");
    worker = new Worker();
    worker.onmessage = (e) => {
      result = e.data;
    };
  });

  function onImageChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) {
      return;
    }
    const data: WorkerData = {
      id: ++id,
      gif: {
        width: 500,
        height: 500,
        delayMs: 20,
        imageUrl: URL.createObjectURL(file),
      },
      animation: {
        name: 'extreme-speed',
        totalFrames: 10,
      },
    };

    worker?.postMessage(data);
  }
</script>

<input type="file" on:change={onImageChange} />

{#if result?.type === "success"}
  <img src={result.dataUri} alt="gif" />
{:else if result?.type === "error"}
  <p>Error: {result.error}</p>
{:else}
  <p>Waiting for input...</p>
{/if}

<style>
  canvas {
    display: block;
  }
</style>
