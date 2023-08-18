<script lang="ts">
  import { get } from "svelte/store";
  import Back from "./Back.svelte";
  import { Dates } from "./Dates";
  import { activeDay, activeMonth, activePane, activeYear } from "./Stores";
  import type { Options } from "./types";
  import { getContext } from "svelte";

  const { onSelect, buttonBG, buttonBGActive, buttonLabelColor, buttonLabelColorActive } =
    getContext<Options>("options");

  class UIController {
    static onClickBack = () => {
      activePane.set("calendar");
    };

    static onSelectMonth = (index: number) => {
      return () => {
        activeMonth.set(index);
        activeDay.set(1);
        onSelect(get(activeYear), index, 1);
        this.onClickBack();
      };
    };
  }
</script>

<div class="months">
  <div class="header">
    <button on:click={UIController.onClickBack} class="back">
      <div class="icon">
        <Back />
      </div>
      <div>Back</div>
    </button>
  </div>
  <div class="buttons">
    {#each Dates.months as month, index}
      <button
        style="
          background-color: {index === $activeMonth ? buttonBGActive : buttonBG};
          color: {index === $activeMonth ? buttonLabelColorActive : buttonLabelColor};"
        on:click={UIController.onSelectMonth(index)}
        >{month}
      </button>
    {/each}
  </div>
</div>

<style lang="scss">
  .months {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    & > .header {
      width: 100%;
      border-bottom: 1px solid #e7e7e7;
      & > .back {
        width: auto;
        padding: 7.5px 12px;
        display: flex;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eeeeee;
        border: none;
        cursor: pointer;
        border-radius: 2.5px;
        font-size: 1em;
        margin-bottom: 10px;
        & > .icon {
          width: 17.5px;
          height: 17.5px;
          margin-right: 5px;
        }
      }
    }
    & > .buttons {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      & > button {
        width: 33.333%;
        outline: none;
        border: none;
        background-color: transparent;
        padding: 10px 0;
        cursor: pointer;
        font-size: 0.8em;
        border-radius: 2.5px;
      }
    }
  }
</style>
