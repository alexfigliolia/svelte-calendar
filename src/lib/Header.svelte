<script lang="ts">
  import { derived } from "svelte/store";
  import { activeMonth, activePane, activeYear } from "./Stores";
  import { Dates } from "./Dates";
  import { getContext } from "svelte";
  import type { Options } from "./types";

  const { size, buttonBGActive, buttonLabelColor, buttonLabelColorActive } =
    getContext<Options>("options");

  const month = derived(activeMonth, v => Dates.months[v]);

  let yearFocused = false;
  let monthFocused = false;

  class UIController {
    static onFocusMonth = () => {
      monthFocused = true;
    };

    static onFocusYear = () => {
      yearFocused = true;
    };

    static onBlurMonth = () => {
      monthFocused = false;
    };

    static onBlurYear = () => {
      yearFocused = false;
    };

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
    on:blur={UIController.onBlurMonth}
    on:focus={UIController.onFocusMonth}
    on:click={UIController.onClickMonth}
    style="color: {monthFocused
      ? buttonLabelColor
      : buttonLabelColorActive}; background: {monthFocused
      ? 'lightgray'
      : buttonBGActive}; font-size: {size / 1.8}px;"
  >
    {$month}
  </button>
  <button
    class="action year"
    on:blur={UIController.onBlurYear}
    on:focus={UIController.onFocusYear}
    on:click={UIController.onClickYear}
    style="color: {yearFocused
      ? buttonLabelColor
      : buttonLabelColorActive}; background: {yearFocused
      ? 'lightgray'
      : buttonBGActive}; font-size: {size / 2}px;">{$activeYear}</button
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
      border: none;
      font-weight: 500;
      cursor: pointer;
      border-radius: 2.5px;
      outline: none;
      &.month {
        font-size: 1em;
        padding: 7.5px 15px;
      }
      &.year {
        padding: 5px 12.5px;
        font-size: 0.9em;
      }
    }
  }
</style>
