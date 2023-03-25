<script lang="ts">
  let className = "";
  export { className as class };
</script>

<header class={`header ${className}`}>
  <img class="logo" src="/demo-jumping.gif" alt="" />
  <h1 class="title">Jumping Peter</h1>

  <p class="subtitle">generate gif emojis</p>

  <a
    class="contribute"
    href="https://github.com/ksmai/jumping-peter"
    target="_blank"
    rel="noreferrer">Contribute</a
  >
</header>

<style>
  .header {
    display: flex;
    align-items: baseline;
    height: 100%;
    width: 100%;
    padding: 8px 16px;
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

  .contribute {
    color: var(--color-fg-emphasis-medium);
  }

  .contribute:hover {
    color: var(--color-fg-emphasis-high);
  }
</style>
