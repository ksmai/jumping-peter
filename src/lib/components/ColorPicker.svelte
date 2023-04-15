<script lang="ts">
  import { createEventDispatcher } from "svelte";

  type Color = readonly [number, number, number];

  export let label = "";
  export let value: Color = [1, 1, 1];

  function toHex(x: number): string {
    return Math.floor(x * 255)
      .toString(16)
      .padStart(2, "0");
  }

  function toInputValue(color: Color): string {
    return `#${color.map(toHex).join("")}`;
  }

  function toNumber(hex: string): number {
    return parseInt(hex, 16) / 255;
  }

  function fromInputValue(value: string): Color {
    return [
      toNumber(value.slice(1, 3)),
      toNumber(value.slice(3, 5)),
      toNumber(value.slice(5, 7)),
    ];
  }

  $: inputValue = toInputValue(value);

  const dispatch = createEventDispatcher();

  function onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    value = fromInputValue(target.value);
    dispatch("input", { value });
  }
</script>

<label class="color-picker"
  >{label}
  <input type="color" on:change={onChange} value={inputValue} />
</label>

<style lang="scss">
  .color-picker {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
</style>
