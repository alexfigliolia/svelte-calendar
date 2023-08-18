<script lang="ts">
  import { get } from "svelte/store";
  import { Dates } from "./Dates";
  import { activeDay, activeMonth, activePane, activeYear } from "./Stores";
  import type { Options } from "./types";
  import { getContext } from "svelte";
  import BackButton from "./BackButton.svelte";

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
  <BackButton />
  <div class="buttons">
    {#each Dates.months as month, index}
      <button
        style="
          background: {index === $activeMonth ? buttonBGActive : buttonBG};
          color: {index === $activeMonth ? buttonLabelColorActive : buttonLabelColor};"
        on:click={UIController.onSelectMonth(index)}
        >{month.slice(0, 3)}
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
        font-weight: 300;
        text-transform: uppercase;
      }
    }
  }
</style>
