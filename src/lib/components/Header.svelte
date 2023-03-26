<script lang="ts">
  import { base } from "$app/paths";

  let className = "";
  export { className as class };
</script>

<header class={`header ${className}`}>
  <img class="logo" src={`${base}/demo-jumping.gif`} alt="" />
  <h1 class="title">Jumping Peter</h1>

  <p class="subtitle">generate gif emojis</p>

  <a
    class="contribute"
    href="https://github.com/ksmai/jumping-peter"
    target="_blank"
    rel="noreferrer">Contribute</a
  >
</header>

<style lang="scss">
  .header {
    display: flex;
    align-items: baseline;
    height: 100%;
    width: 100%;
    padding: 12px 16px;
    white-space: nowrap;

    &::before {
      display: inline-block;
      height: 100%;
      content: "";
    }
  }

  .logo {
    height: 1.8rem;
    margin-right: 0.8rem;
    align-self: center;
  }

  .title {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  .subtitle {
    font-size: 1rem;
    color: var(--color-fg-emphasis-medium);
    display: none;

    @media (min-width: 64rem) {
      display: block;
    }
  }

  .contribute {
    display: block;
    margin-left: auto;
    color: var(--color-fg-emphasis-medium);

    &:hover {
      color: var(--color-fg-emphasis-high);
    }
  }
</style>
