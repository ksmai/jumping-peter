<script lang="ts">
  import { animator } from "$lib/store";

  function onDownload() {
    animator
      .animate()
      .then(({ dataUri }) => {
        const a = document.createElement("a");
        a.href = dataUri;
        a.download = "jumping_peter.gif";
        a.click();
      })
      .catch((e) => console.error(e));
  }
</script>

<div class="container">
  <header class="header">
    <img class="logo" src="/demo-jumping.gif" alt="" />
    <h1 class="title">Jumping Peter</h1>

    <p class="subtitle">Generate GIF emojis</p>
  </header>

  <button
    class="download"
    type="button"
    on:click={onDownload}
    disabled={$animator.running}>Download</button
  >

  <a
    class="contribute"
    href="https://github.com/ksmai/jumping-peter"
    target="_blank">Contribute</a
  >
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
  }

  .header {
    display: flex;
    align-items: baseline;
    flex: 1;
    white-space: nowrap;
  }

  .logo {
    height: 1.2rem;
    margin-right: 0.8rem;
  }

  .title {
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }

  .subtitle {
    flex: 1 1 auto;
    font-size: 0.8rem;
    color: var(--color-fg-emphasis-medium);
  }

  .download {
    margin-right: 1rem;
    background: var(--color-primary);
    color: #fff;
    border: none;
    padding: 0.25rem 0.75rem;
    border-radius: 3px;
    font-size: 0.8rem;
    cursor: pointer;
  }

  .download:disabled {
    background-color: var(--color-container-disabled);
    color: var(--color-fg-disabled);
    cursor: not-allowed;
  }

  .contribute {
    color: var(--color-fg-emphasis-medium);
    font-size: 0.8rem;
  }

  .contribute:hover {
    color: var(--color-fg-emphasis-high);
  }
</style>
