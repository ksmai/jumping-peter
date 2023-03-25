<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let label = "";
  export let min = 0;
  export let max = 100;
  export let step = 1;
  export let value = max < min ? min : (max - min) / 2;

  function onInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const parsed = parseFloat(target.value);
    if (Number.isNaN(parsed)) {
      return;
    }
    value = parsed;
    dispatch("input", { value });
  }

  function displayNumber(n: number): number {
    return +(Math.round((n + "e+2") as any) + "e-2");
  }
</script>

<div class="slider">
  <label class="slider__label">
    {label}

    <input class="slider__text-input" type="text" on:input={onInput} {value} />
  </label>

  <div class="slider__container">
    <span class="slider__range slider__range--min">{displayNumber(min)}</span>
    <div class="slider__input-container">
      <input
        class="slider__input"
        type="range"
        {min}
        {max}
        {step}
        {value}
        on:input={onInput}
      />
    </div>
    <span class="slider__range slider__range--max">{displayNumber(max)}</span>
  </div>
</div>

<style lang="scss">
  .slider {
    &__label {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    &__text-input {
      width: 2rem;
      text-align: center;
      font-size: 0.7rem;
      color: #fff;
      background: none;
      border: 1px solid #fff;
    }

    &__input-container {
      margin: 0 0.3rem;
    }

    &__input {
      -webkit-appearance: none;
      appearance: none;
      background: transparent;
      cursor: pointer;
      width: 100%;

      &::-webkit-slider-runnable-track {
        background: var(--color-secondary-dimmed);
        height: 0.4rem;
        border-radius: 0.4rem;
      }

      &::-moz-range-track {
        background: var(--color-secondary-dimmed);
        height: 0.4rem;
        border-radius: 0.4rem;
      }

      &::-moz-range-progress {
        background: var(--color-secondary);
        height: 0.4rem;
        border-radius: 0.4rem;
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        margin-top: -0.3rem;
        background-color: var(--color-secondary);
        height: 1rem;
        width: 1rem;
        border-radius: 1rem;
      }

      &::-moz-range-thumb {
        border: none;
        background-color: var(--color-secondary);
        height: 1rem;
        width: 1rem;
        border-radius: 1rem;
      }
    }

    &__container {
      display: grid;
      grid-template-columns: 2rem 1fr 2rem;
      align-items: center;
      white-space: nowrap;
    }

    &__range {
      font-size: 0.7rem;

      &--min {
        text-align: right;
      }
    }
  }
</style>
