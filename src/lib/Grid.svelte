<script lang="ts">
  import { derived } from "svelte/store";
  import { UIController } from "./UIController";
  import { activeDay, activeMonth, activeYear } from "./Stores";
  import { Dates } from "./Dates";
  import type { Options } from "./types";
  import { getContext } from "svelte";
  import DateButton from "./DateButton.svelte";

  const { size, onSelect, buttonBG, buttonBGActive, buttonLabelColor, buttonLabelColorActive } =
    getContext<Options>("options");

  export const daysInMonth = derived([activeMonth, activeYear], ([m, y]) => {
    return Dates.daysInMonth(m, y);
  });
  const firstDayInMonth = derived([activeMonth, activeYear], ([m, y]) => {
    return Dates.firstDayInMonth(m, y);
  });

  const grid = derived([firstDayInMonth, daysInMonth], ([f, t]) => {
    return UIController.grid(f, t - 1);
  });

  const onClick = (day: number) => {
    return () => {
      onSelect($activeYear, $activeMonth, day);
      activeDay.set(day);
    };
  };
</script>

{#each $grid as row}
  <div class="row">
    {#each row as day}
      <div
        class="date"
        class:active={day === $activeDay}
        style="
          min-width: {size}px; 
          min-height: {size}px;
          color: {day === $activeDay ? buttonLabelColorActive : buttonLabelColor}; 
          background: {day === $activeDay ? buttonBGActive : buttonBG};"
      >
        {#if day === ""}
          <div class="inactive" />
        {/if}
        {#if typeof day === "number"}
          <DateButton {day} onClick={onClick(day)} />
        {/if}
      </div>
    {/each}
  </div>
{/each}

<style lang="scss">
  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    & > .date {
      min-width: 30px;
      min-height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border-radius: 50%;
      overflow: hidden;
    }
  }
</style>
