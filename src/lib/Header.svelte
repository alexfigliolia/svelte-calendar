<script lang="ts">
  import { derived } from "svelte/store";
  import { activeMonth, activePane, activeYear } from "./Stores";
  import { Dates } from "./Dates";

  export let color = "#000";

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
  <button on:click={UIController.onClickMonth} class="action month" style="color: {color};">
    {$month}
  </button>
  <button on:click={UIController.onClickYear} class="action year">{$activeYear}</button>
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
      cursor: pointer;
      background-color: #e1e1e1;
      border-radius: 2.5px;
      &.month {
        font-size: 1em;
        padding: 7.5px 12.5px;
      }
      &.year {
        padding: 5px 10px;
        font-size: 0.9em;
      }
    }
  }
</style>
