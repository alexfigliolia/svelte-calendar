<script lang="ts">
  import { setContext } from "svelte";
  import CalendarPane from "./CalendarPane.svelte";
  import MonthPane from "./MonthPane.svelte";
  import { activePane } from "./Stores";
  import YearPane from "./YearPane.svelte";
  import type { SelectFN } from "./types";

  export let tileSize = 30;
  export let onSelect: SelectFN;
  export let buttonBG = "#fff";
  export let buttonBGActive = "#000";
  export let buttonLabelColor = "#000";
  export let buttonLabelColorActive = "#fff";

  $: setContext("options", {
    onSelect,
    buttonBG,
    size: tileSize,
    buttonBGActive,
    buttonLabelColor,
    buttonLabelColorActive,
  });
</script>

<div class="calendar" style="width: {tileSize * 7}px;">
  <div class="pane calendar" class:active={$activePane === "calendar"}>
    <CalendarPane />
  </div>
  <div class="pane months" class:active={$activePane === "months"}>
    <MonthPane />
  </div>
  <div class="pane years" class:active={$activePane === "years"}>
    <YearPane />
  </div>
</div>

<style lang="scss">
  .calendar {
    width: 100%;
    position: relative;
    overflow: hidden;
    & > .pane {
      width: 100%;
      display: flex;
      flex-direction: column;
      &.calendar {
        transform: translateX(100%);
        opacity: 0;
        visibility: hidden;
        transition: transform 0.3s, opacity 0.3s, visibility 0s 0.3s;
        &.active {
          transform: translateX(0%);
          opacity: 1;
          visibility: visible;
          transition: transform 0.3s, opacity 0.3s, visibility 0s 0s;
        }
      }
      &.months,
      &.years {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transform: translateX(-100%);
        opacity: 0;
        visibility: hidden;
        transition: transform 0.3s, opacity 0.3s, visibility 0s 0.3s;
        &.active {
          transform: translateX(0%);
          opacity: 1;
          visibility: visible;
          transition: transform 0.3s, opacity 0.3s, visibility 0s 0s;
        }
      }
    }
  }
</style>
