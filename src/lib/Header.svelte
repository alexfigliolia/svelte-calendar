<script lang="ts">
  import { derived } from "svelte/store";
  import { activeMonth, activePane, activeYear } from "./Stores";
  import { Dates } from "./Dates";
  import { getContext } from "svelte";
  import type { Options } from "./types";

  const { size, buttonBGActive, buttonLabelColorActive } = getContext<Options>("options");

  const month = derived(activeMonth, v => Dates.months[v]);

  class UIController {
    static onClickMonth = () => {
      activePane.set("months");
    };

    static onClickYear = () => {
      activePane.set("years");
    };
  }
</script>

<div class="header">
  <button
    class="action month"
    on:click={UIController.onClickMonth}
    style="color: {buttonLabelColorActive}; background: {buttonBGActive}; font-size: {size /
      1.8}px;"
  >
    {$month}
  </button>
  <button
    class="action year"
    on:click={UIController.onClickYear}
    style="color: {buttonLabelColorActive}; background: {buttonBGActive}; font-size: {size /
      1.9}px;">{$activeYear}</button
  >
</div>

<style lang="scss">
  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    & > .action {
      outline: none;
      border: none;
      font-weight: 500;
      cursor: pointer;
      background-color: #e1e1e1;
      border-radius: 2.5px;
      &.month {
        font-size: 1em;
        padding: 7.5px 15px;
      }
      &.year {
        padding: 5px 10px;
        font-size: 0.9em;
      }
    }
  }
</style>
